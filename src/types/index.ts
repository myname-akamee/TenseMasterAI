export type TenseId =
  | 'present_simple'
  | 'present_continuous'
  | 'present_perfect'
  | 'present_perfect_continuous'
  | 'past_simple'
  | 'past_continuous'
  | 'past_perfect'
  | 'past_perfect_continuous'
  | 'future_simple'
  | 'future_continuous'
  | 'future_perfect'
  | 'future_perfect_continuous';

export type TenseCategory = 'present' | 'past' | 'future';

export interface TenseInfo {
  id: TenseId;
  nameEn: string;
  nameRu: string;
  category: TenseCategory;
  shortDesc: string;
  formula: {
    affirmative: string;
    negative: string;
    question: string;
  };
  markers: string[];
  rules: string[];
  examples: {
    en: string;
    ru: string;
  }[];
}

export type ExerciseMode =
  | 'fill_blank'    // Раскрыть скобки
  | 'translate'     // Перевод с русского на английский
  | 'transform'     // Переделать предложение в нужное время
  | 'choice'        // Выбрать правильный вариант
  | 'dialogue';     // Мини-диалог в контексте

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type AIProvider = 'builtin' | 'openrouter' | 'groq' | 'gemini';

export interface Exercise {
  id: string;
  tenseId: TenseId;
  tenseName: string;
  mode: ExerciseMode;
  difficulty: DifficultyLevel;
  promptRu: string;             // Задание или контекст на русском
  sentenceEn: string;           // Предложение с пропуском или исходное (например "She ____ (read) right now.")
  targetSentence: string;       // Идеальный правильный ответ
  acceptableAnswers?: string[]; // Альтернативные правильные формы (сокращения и т.д.)
  baseVerb?: string;            // Глагол в инфинитиве (например, "read")
  options?: string[];           // Для режима multiple choice
  hint: string;                 // Короткая подсказка (формула, маркер или идея)
  explanation: string;          // Грамматическое объяснение
}

export interface EvaluationResult {
  score: number;                // 1 to 10
  percentage: number;           // 0 to 100
  isCorrect: boolean;           // true if score >= 8
  headline: string;             // "Превосходно!", "Очень близко!", "Нужно повторить"
  praise: string;               // Что сделано правильно
  improvements: string;         // Что нужно улучшить, в чем ошибка
  grammarTip: string;           // Правило, почему используется это время
  correctSentence: string;      // Полное правильное предложение
  userAnswer: string;           // Ответ пользователя
  highlightedDifferences?: {
    expected: string;
    actual: string;
  };
}

export interface UserSettings {
  provider: AIProvider;
  openRouterApiKey: string;
  openRouterModel: string;
  groqApiKey: string;
  groqModel: string;
  geminiApiKey: string;
  geminiModel: string;
  selectedTenses: TenseId[];
  mode: ExerciseMode;
  difficulty: DifficultyLevel;
  autoSpeak: boolean;
  voiceRate: number;
}

export interface AttemptRecord {
  id: string;
  timestamp: number;
  exercise: Exercise;
  userAnswer: string;
  result: EvaluationResult;
}

export interface UserStats {
  streak: number;
  lastTrainedDate: string;
  totalAnswered: number;
  totalCorrect: number;
  xp: number;
  mistakeBank: Exercise[];
}
