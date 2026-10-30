import {
  UserSettings,
  Exercise,
  EvaluationResult,
  TenseId,
} from '../types';
import { TENSES_MAP } from '../data/tenses';
import {
  generateBuiltInExercise,
  evaluateBuiltInAnswer,
} from './builtInEngine';

// Helper to sanitize JSON response from LLMs that might wrap in ```json ... ``` or include DeepSeek <think>...</think>
export function extractJson(text: string): any {
  let cleaned = text.trim();

  // Strip DeepSeek-R1 reasoning thought tags <think>...</think>
  cleaned = cleaned.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
  }

  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
  }
  return JSON.parse(cleaned);
}

// Check if user has an active AI model configured
export function isAIEnabled(settings: UserSettings): boolean {
  if (settings.provider === 'builtin') return false;
  if (settings.provider === 'ollama') return true; // Local Ollama runs offline without API keys
  if (settings.provider === 'deepseek') return Boolean(settings.deepseekApiKey?.trim());
  if (settings.provider === 'openrouter') return Boolean(settings.openRouterApiKey?.trim());
  if (settings.provider === 'groq') return Boolean(settings.groqApiKey?.trim());
  if (settings.provider === 'gemini') return Boolean(settings.geminiApiKey?.trim());
  return false;
}

// Call OpenAI-compatible endpoints (OpenRouter, Groq, DeepSeek, Ollama, LM Studio)
async function callOpenAICompatible(
  url: string,
  apiKey: string,
  model: string,
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (apiKey && apiKey.trim()) {
    headers['Authorization'] = `Bearer ${apiKey.trim()}`;
  }

  if (url.includes('openrouter.ai')) {
    headers['HTTP-Referer'] = 'https://englishtrainer.local';
    headers['X-Title'] = 'English Tenses AI Trainer';
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// Call local offline Ollama runner (DeepSeek R1 / V3 / Qwen / Llama)
async function callOllama(
  endpoint: string,
  model: string,
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  let cleanEndpoint = (endpoint || 'http://localhost:11434/v1').replace(/\/+$/, '');
  if (!cleanEndpoint.endsWith('/chat/completions')) {
    cleanEndpoint = `${cleanEndpoint}/chat/completions`;
  }

  const proxyEndpoint = '/api/ollama/v1/chat/completions';

  try {
    return await callOpenAICompatible(cleanEndpoint, '', model, systemPrompt, userPrompt);
  } catch (err: any) {
    // If direct call fails on localhost due to browser CORS, fallback to Vite proxy if on localhost
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      try {
        return await callOpenAICompatible(proxyEndpoint, '', model, systemPrompt, userPrompt);
      } catch {
        // Fall through
      }
    }
    throw new Error(
      `Не удалось связаться с локальной нейросетью Ollama (${cleanEndpoint}). ` +
      `Убедитесь, что Ollama запущена командой 'ollama run ${model}'. ` +
      `Ошибка: ${err?.message || 'Connection refused'}`
    );
  }
}

// Call Google Gemini REST API directly
async function callGemini(
  apiKey: string,
  model: string,
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  const cleanModel = model.replace(/^models\//, '');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('No response generated by Gemini model.');
  }
  return text;
}

// Low-level LLM call dispatcher
async function callLLM(
  settings: UserSettings,
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  if (settings.provider === 'ollama') {
    return callOllama(
      settings.ollamaEndpoint || 'http://localhost:11434/v1',
      settings.ollamaModel || 'deepseek-r1',
      systemPrompt,
      userPrompt
    );
  }

  if (settings.provider === 'deepseek') {
    if (!settings.deepseekApiKey) {
      throw new Error('API ключ DeepSeek не указан. Задайте его в настройках.');
    }
    return callOpenAICompatible(
      'https://api.deepseek.com/chat/completions',
      settings.deepseekApiKey,
      settings.deepseekModel || 'deepseek-chat',
      systemPrompt,
      userPrompt
    );
  }

  if (settings.provider === 'openrouter') {
    if (!settings.openRouterApiKey) {
      throw new Error('API ключ OpenRouter не указан. Задайте его в настройках.');
    }
    return callOpenAICompatible(
      'https://openrouter.ai/api/v1/chat/completions',
      settings.openRouterApiKey,
      settings.openRouterModel || 'deepseek/deepseek-r1:free',
      systemPrompt,
      userPrompt
    );
  }

  if (settings.provider === 'groq') {
    if (!settings.groqApiKey) {
      throw new Error('API ключ Groq не указан. Задайте его в настройках.');
    }
    return callOpenAICompatible(
      'https://api.groq.com/openai/v1/chat/completions',
      settings.groqApiKey,
      settings.groqModel || 'llama-3.3-70b-versatile',
      systemPrompt,
      userPrompt
    );
  }

  if (settings.provider === 'gemini') {
    if (!settings.geminiApiKey) {
      throw new Error('API ключ Gemini не указан. Задайте его в настройках.');
    }
    return callGemini(
      settings.geminiApiKey,
      settings.geminiModel || 'gemini-2.0-flash',
      systemPrompt,
      userPrompt
    );
  }

  throw new Error('Выбран встроенный оффлайн-движок.');
}

// Test Connection for modal
export async function testAIConnection(
  provider: UserSettings['provider'],
  apiKey: string,
  model: string,
  endpoint?: string
): Promise<{ success: boolean; message: string }> {
  if (provider === 'builtin') {
    return {
      success: true,
      message: 'Встроенный Smart AI активен: расширенная база 12 времен, алгоритмический генератор и защита от повторов!',
    };
  }

  if (provider === 'ollama') {
    try {
      const activeEndpoint = endpoint || 'http://localhost:11434/v1';
      const activeModel = model || 'deepseek-r1';
      const res = await callOllama(
        activeEndpoint,
        activeModel,
        'You are an AI assistant. Reply with only: OK',
        'Ping connection test.'
      );
      if (res) {
        return {
          success: true,
          message: `Оффлайн-нейросеть Ollama (${activeModel}) успешно подключена и работает!`,
        };
      }
      return {
        success: false,
        message: 'Ollama вернула пустой ответ. Проверьте, загружена ли модель командой ollama run ' + activeModel,
      };
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || 'Не удалось связаться с локальной Ollama.',
      };
    }
  }

  if (!apiKey.trim()) {
    return {
      success: false,
      message: 'Пожалуйста, введите API ключ для проверки.',
    };
  }

  try {
    const mockSettings: UserSettings = {
      provider,
      openRouterApiKey: provider === 'openrouter' ? apiKey : '',
      openRouterModel: model,
      groqApiKey: provider === 'groq' ? apiKey : '',
      groqModel: model,
      geminiApiKey: provider === 'gemini' ? apiKey : '',
      geminiModel: model,
      deepseekApiKey: provider === 'deepseek' ? apiKey : '',
      deepseekModel: model,
      ollamaEndpoint: endpoint || 'http://localhost:11434/v1',
      ollamaModel: model,
      selectedTenses: ['present_simple'],
      mode: 'fill_blank',
      difficulty: 'beginner',
      autoSpeak: false,
      voiceRate: 1,
    };

    const res = await callLLM(
      mockSettings,
      'You are a testing assistant. Reply with: OK',
      'Ping test connection.'
    );

    if (res) {
      return {
        success: true,
        message: `Подключение успешно! Модель ${model} ответила.`,
      };
    }
    return {
      success: false,
      message: 'Модель вернула пустой ответ. Проверьте правильность модели.',
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || 'Ошибка соединения с API.',
    };
  }
}

// Generate Exercise using AI or Built-in Engine with Anti-Repetition
export async function generateExercise(
  settings: UserSettings,
  forcedTenses?: TenseId[],
  excludeSentences: string[] = []
): Promise<Exercise> {
  const tensesToUse = (forcedTenses && forcedTenses.length > 0)
    ? forcedTenses
    : settings.selectedTenses.length > 0
    ? settings.selectedTenses
    : (['present_simple'] as TenseId[]);

  // If user selected built-in provider or AI credentials are not configured, use local engine
  if (!isAIEnabled(settings)) {
    return generateBuiltInExercise(tensesToUse, settings.mode, settings.difficulty, excludeSentences);
  }

  // Use AI Model (Ollama DeepSeek, OpenRouter DeepSeek, etc.)
  try {
    const targetTenseId = tensesToUse[Math.floor(Math.random() * tensesToUse.length)];
    const tenseInfo = TENSES_MAP.get(targetTenseId);
    const tenseName = tenseInfo ? tenseInfo.nameEn : targetTenseId;

    const topics = [
      'travel and exploration',
      'cutting-edge technology and artificial intelligence',
      'daily routines and healthy habits',
      'software development and engineering',
      'friendship and human connection',
      'space science and astronomical discoveries',
      'creative arts, music and literature',
      'environmental protection and nature',
    ];
    const chosenTopic = topics[Math.floor(Math.random() * topics.length)];

    const avoidText = excludeSentences.length > 0
      ? `DO NOT repeat any of these recent sentences or their verbs: ${excludeSentences.slice(-6).map((s) => `"${s}"`).join('; ')}.`
      : '';

    const systemPrompt = `You are a world-class Cambridge-certified English teacher creating interactive grammar exercises.
You MUST output ONLY valid JSON without any markdown formatting or explanation outside JSON.
Output schema:
{
  "tenseId": "${targetTenseId}",
  "mode": "${settings.mode}",
  "difficulty": "${settings.difficulty}",
  "promptRu": "Instruction in Russian, e.g. Раскрой скобки в ${tenseName}:",
  "sentenceEn": "English sentence with blank like 'She ____ (wait) for 2 hours.' or full sentence if translation/transformation",
  "targetSentence": "Complete correct English sentence, e.g. 'She has been waiting for 2 hours.'",
  "acceptableAnswers": ["has been waiting", "She has been waiting for 2 hours."],
  "baseVerb": "wait",
  "options": ["optional array of 4 options if mode is choice"],
  "hint": "Brief subtle hint in Russian (formula or time marker clue without spoiling the whole answer)",
  "explanation": "Clear educational explanation in Russian of why this tense and form is used"
}`;

    const userPrompt = `Create ONE interactive English exercise strictly for the tense "${tenseName}" (${targetTenseId}).
Exercise Mode: "${settings.mode}" (fill_blank, translate, transform, or choice).
Difficulty: "${settings.difficulty}".
Topic context: ${chosenTopic}.
${avoidText}
Context should be realistic, natural modern conversational English.
Output ONLY the JSON object.`;

    const raw = await callLLM(settings, systemPrompt, userPrompt);
    const parsed = extractJson(raw);

    return {
      id: `ai-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      tenseId: targetTenseId,
      tenseName: tenseInfo ? `${tenseInfo.nameEn} (${tenseInfo.nameRu})` : targetTenseId,
      mode: settings.mode,
      difficulty: settings.difficulty,
      promptRu: parsed.promptRu || `Упражнение на ${tenseName}:`,
      sentenceEn: parsed.sentenceEn || parsed.targetSentence,
      targetSentence: parsed.targetSentence,
      acceptableAnswers: parsed.acceptableAnswers || [parsed.targetSentence],
      baseVerb: parsed.baseVerb,
      options: parsed.options,
      hint: parsed.hint || `Обрати внимание на правила ${tenseName}.`,
      explanation: parsed.explanation || tenseInfo?.rules.join(' ') || '',
    };
  } catch (error) {
    console.warn('AI Generation failed, falling back to built-in generator:', error);
    return generateBuiltInExercise(tensesToUse, settings.mode, settings.difficulty, excludeSentences);
  }
}

// Request Hint for current exercise
export async function getExerciseHint(
  exercise: Exercise,
  settings: UserSettings
): Promise<string> {
  if (!isAIEnabled(settings)) {
    return exercise.hint;
  }

  try {
    const systemPrompt = `You are an encouraging English tutor. Provide a very short, subtle, friendly hint in Russian (1-2 sentences maximum).
Do NOT reveal the exact full answer directly.
Focus on:
1. The time marker or context signal
2. The tense formula or auxiliary verb needed`;

    const userPrompt = `Exercise: "${exercise.sentenceEn}"
Tense: ${exercise.tenseName}
Target answer: "${exercise.targetSentence}"
Give a short motivating hint in Russian for the student.`;

    const response = await callLLM(settings, systemPrompt, userPrompt);
    return response.trim() || exercise.hint;
  } catch {
    return exercise.hint;
  }
}

// Evaluate user's answer
export async function evaluateAnswer(
  exercise: Exercise,
  userAnswer: string,
  settings: UserSettings
): Promise<EvaluationResult> {
  const trimmed = userAnswer.trim();
  if (!trimmed) {
    return {
      score: 1,
      percentage: 10,
      isCorrect: false,
      headline: 'Ответ не введен!',
      praise: 'Ты пропустил упражнение.',
      improvements: 'Попробуй ввести свой вариант ответа, даже если не уверен!',
      grammarTip: exercise.explanation,
      correctSentence: exercise.targetSentence,
      userAnswer: '(пусто)',
    };
  }

  if (!isAIEnabled(settings)) {
    return evaluateBuiltInAnswer(exercise, trimmed);
  }

  // Use AI for comprehensive pedagogical assessment
  try {
    const systemPrompt = `You are a supportive, insightful English teacher assessing a student's answer.
You MUST output ONLY valid JSON in the exact schema below without markdown formatting or reasoning tags.
Output schema:
{
  "score": <integer from 1 to 10>,
  "percentage": <integer from 10 to 100>,
  "isCorrect": <boolean, true if score >= 8>,
  "headline": "<Short enthusiastic headline in Russian, e.g. Превосходно! or Хорошая попытка, но есть нюанс>",
  "praise": "<1-2 sentences in Russian praising what was done right (word choice, meaning, partial grammar)>",
  "improvements": "<Specific constructive feedback in Russian: explain what to improve, what auxiliary verb was missing, wrong ending, word order, etc.>",
  "grammarTip": "<Clear summary in Russian of the tense rule and why this form is required>",
  "correctSentence": "${exercise.targetSentence}"
}`;

    const userPrompt = `Exercise: "${exercise.sentenceEn}"
Prompt: "${exercise.promptRu}"
Target English Sentence: "${exercise.targetSentence}"
Target Tense: "${exercise.tenseName}"
Student's Submitted Answer: "${trimmed}"

Evaluate the student's submission carefully:
- If exact match or acceptable equivalent contraction -> score 10
- If minor typo or small spelling slip -> score 8 or 9
- If wrong auxiliary verb or missing -s/-ed/-ing -> score 5 to 7
- If wrong tense altogether -> score 3 to 5
Provide constructive, motivating feedback in Russian!
Output ONLY the JSON object.`;

    const raw = await callLLM(settings, systemPrompt, userPrompt);
    const parsed = extractJson(raw);

    const score = Math.min(10, Math.max(1, Number(parsed.score) || 5));
    const percentage = Math.min(100, Math.max(10, Number(parsed.percentage) || score * 10));

    return {
      score,
      percentage,
      isCorrect: score >= 8,
      headline: parsed.headline || (score >= 8 ? 'Отлично сделано!' : 'Обрати внимание на ошибку!'),
      praise: parsed.praise || 'Ты хорошо постарался!',
      improvements: parsed.improvements || 'Сравни свой ответ с эталоном.',
      grammarTip: parsed.grammarTip || exercise.explanation,
      correctSentence: exercise.targetSentence,
      userAnswer: trimmed,
    };
  } catch (error) {
    console.warn('AI evaluation failed, falling back to built-in evaluation:', error);
    return evaluateBuiltInAnswer(exercise, trimmed);
  }
}
