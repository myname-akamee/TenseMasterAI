import { TenseId, ExerciseMode, DifficultyLevel, Exercise, EvaluationResult } from '../types';
import { TENSES_MAP } from '../data/tenses';

interface ExerciseTemplate {
  tenseId: TenseId;
  mode: ExerciseMode;
  difficulty: DifficultyLevel;
  promptRu: string;
  sentenceEn: string;
  targetSentence: string;
  acceptableAnswers: string[];
  baseVerb?: string;
  options?: string[];
  hint: string;
  explanation: string;
}

const EXERCISE_TEMPLATES: ExerciseTemplate[] = [
  // 1. Present Simple
  {
    tenseId: 'present_simple',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Present Simple:',
    sentenceEn: 'My sister usually ____ (wake) up at 7 o\'clock.',
    targetSentence: 'My sister usually wakes up at 7 o\'clock.',
    acceptableAnswers: ['wakes', 'wakes up', 'My sister usually wakes up at 7 o\'clock.'],
    baseVerb: 'wake',
    hint: 'Sister — это третье лицо (she). В Present Simple к глаголу прибавляется окончание -s/-es.',
    explanation: 'Для he, she, it в Present Simple глагол получает окончание -s (wake -> wakes). Маркер: usually (обычно).',
  },
  {
    tenseId: 'present_simple',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Поставь глагол в отрицательную форму Present Simple:',
    sentenceEn: 'David ____ (not / drink) coffee in the evening.',
    targetSentence: 'David does not drink coffee in the evening.',
    acceptableAnswers: ['does not drink', 'doesn\'t drink', 'David does not drink coffee in the evening.', 'David doesn\'t drink coffee in the evening.'],
    baseVerb: 'not drink',
    hint: 'Для David (he) вспомогательный глагол — does. Отрицание: does not (doesn\'t) + начальная форма глагола.',
    explanation: 'В Present Simple отрицание для 3-го лица ед. ч. образуется с помощью doesn\'t + начальная форма глагола без -s.',
  },
  {
    tenseId: 'present_simple',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Они живут в центре города.',
    targetSentence: 'They live in the city center.',
    acceptableAnswers: ['They live in the city center.', 'They live in the city centre.', 'They live in the downtown.'],
    baseVerb: 'live',
    hint: 'Постоянное состояние. Местоимение They не требует окончания -s у глагола.',
    explanation: 'Обычный факт о месте жительства. С местоимением they глагол остается в базовой форме: live.',
  },
  {
    tenseId: 'present_simple',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'The Earth ____ around the Sun.',
    targetSentence: 'The Earth moves around the Sun.',
    acceptableAnswers: ['moves', 'The Earth moves around the Sun.'],
    baseVerb: 'move',
    options: ['move', 'moves', 'is moving', 'moved'],
    hint: 'Это непреложный научный факт и закон природы — используем Present Simple с окончанием 3-го лица.',
    explanation: 'Научные факты и законы природы всегда выражаются в Present Simple. The Earth (она, it) -> moves.',
  },
  {
    tenseId: 'present_simple',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение вопросительным в Present Simple:',
    sentenceEn: 'Your brother speaks Spanish fluently.',
    targetSentence: 'Does your brother speak Spanish fluently?',
    acceptableAnswers: ['Does your brother speak Spanish fluently?', 'Does your brother speak Spanish fluently'],
    baseVerb: 'speak',
    hint: 'Вопрос для your brother (he) начинается с Does. Основной глагол теряет окончание -s.',
    explanation: 'Вопрос в Present Simple для 3-го лица: Does + подлежащее + начальная форма глагола (speak, а не speaks!).',
  },

  // 2. Present Continuous
  {
    tenseId: 'present_continuous',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Present Continuous:',
    sentenceEn: 'Look! The children ____ (play) in the garden.',
    targetSentence: 'Look! The children are playing in the garden.',
    acceptableAnswers: ['are playing', 'Look! The children are playing in the garden.'],
    baseVerb: 'play',
    hint: 'Слово "Look!" показывает, что действие происходит прямо сейчас. Children — множественное число (they -> are).',
    explanation: 'Present Continuous = am/is/are + глагол с -ing. Дети (children = they) требуют форму "are playing".',
  },
  {
    tenseId: 'present_continuous',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Я не смотрю фильм сейчас, я делаю домашнее задание.',
    targetSentence: 'I am not watching a movie now, I am doing homework.',
    acceptableAnswers: [
      'I am not watching a movie now, I am doing homework.',
      'I\'m not watching a movie now, I\'m doing homework.',
      'I am not watching a movie now, I am doing my homework.',
      'I\'m not watching a movie now, I\'m doing my homework.',
      'I am not watching the film now, I am doing my homework.',
    ],
    baseVerb: 'watch / do',
    hint: 'Действие в момент речи: используй am not + V-ing и am + V-ing.',
    explanation: 'Оба действия происходят прямо сейчас (now). Используем Present Continuous: am not watching и am doing.',
  },
  {
    tenseId: 'present_continuous',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильный вариант:',
    sentenceEn: 'Why ____ right now?',
    targetSentence: 'Why are you crying right now?',
    acceptableAnswers: ['are you crying', 'Why are you crying right now?'],
    baseVerb: 'cry',
    options: ['do you cry', 'are you crying', 'did you cry', 'have you cried'],
    hint: 'Маркер "right now" указывает на действие в момент речи. В вопросе глагол be ставится перед подлежащим.',
    explanation: 'Вопрос в Present Continuous: Вопросительное слово + am/is/are + подлежащее + V-ing: Why are you crying?',
  },

  // 3. Present Perfect
  {
    tenseId: 'present_perfect',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Present Perfect:',
    sentenceEn: 'She ____ (already / see) that new movie twice.',
    targetSentence: 'She has already seen that new movie twice.',
    acceptableAnswers: [
      'has already seen',
      'She has already seen that new movie twice.',
      'has already seen that new movie twice',
    ],
    baseVerb: 'see',
    hint: 'She требует вспомогательный глагол has. 3-я форма глагола see — seen. Слово already ставится между has и seen.',
    explanation: 'Present Perfect = have/has + 3-я форма (seen). Подлежащее She требует has. Результат и жизненный опыт.',
  },
  {
    tenseId: 'present_perfect',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Мы еще не получили твое письмо.',
    targetSentence: 'We have not received your letter yet.',
    acceptableAnswers: [
      'We have not received your letter yet.',
      'We haven\'t received your letter yet.',
      'We have not got your letter yet.',
      'We haven\'t got your letter yet.',
    ],
    baseVerb: 'receive',
    hint: 'Слово "еще не" переводится как yet и ставится в конец предложения. Время — Present Perfect.',
    explanation: 'Отрицание в Present Perfect с маркером yet в конце: We haven\'t received (или have not received) your letter yet.',
  },
  {
    tenseId: 'present_perfect',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильный вариант:',
    sentenceEn: '____ you ever ____ to Japan?',
    targetSentence: 'Have you ever been to Japan?',
    acceptableAnswers: ['Have / been', 'Have you ever been to Japan?'],
    baseVerb: 'be',
    options: ['Did / go', 'Have / been', 'Were / being', 'Do / go'],
    hint: 'Вопрос о жизненном опыте со словом "ever" (когда-либо) требует Present Perfect с предлогом to: have you been to...',
    explanation: 'Опыт в жизни выражается через Present Perfect: Have you ever been to Japan? (бывал ли ты в Японии).',
  },

  // 4. Present Perfect Continuous
  {
    tenseId: 'present_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Present Perfect Continuous:',
    sentenceEn: 'It ____ (rain) for three hours without a stop.',
    targetSentence: 'It has been raining for three hours without a stop.',
    acceptableAnswers: [
      'has been raining',
      'It has been raining for three hours without a stop.',
    ],
    baseVerb: 'rain',
    hint: 'Маркер "for three hours" (в течение трех часов). Формула: have/has been + V-ing. Для It используем has.',
    explanation: 'Действие началось 3 часа назад и все еще продолжается. Для It используем has been raining.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Как долго ты учишь английский?',
    targetSentence: 'How long have you been learning English?',
    acceptableAnswers: [
      'How long have you been learning English?',
      'How long have you been studying English?',
    ],
    baseVerb: 'learn',
    hint: 'Вопрос с "How long" о процессе, который длится до сих пор, требует Present Perfect Continuous: have you been + V-ing.',
    explanation: 'Вопрос к продолжительности процесса: How long + have/has + subject + been + V-ing?',
  },

  // 5. Past Simple
  {
    tenseId: 'past_simple',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Поставь глагол в Past Simple:',
    sentenceEn: 'Last Sunday we ____ (go) to the museum.',
    targetSentence: 'Last Sunday we went to the museum.',
    acceptableAnswers: ['went', 'Last Sunday we went to the museum.'],
    baseVerb: 'go',
    hint: 'Go — неправильный глагол. Вспомни его 2-ю форму.',
    explanation: 'Маркер "Last Sunday" (в прошлое воскресенье) указывает на точное время в прошлом. 2-я форма go — went.',
  },
  {
    tenseId: 'past_simple',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Сделай отрицание в Past Simple:',
    sentenceEn: 'She ____ (not / buy) that expensive phone yesterday.',
    targetSentence: 'She did not buy that expensive phone yesterday.',
    acceptableAnswers: [
      'did not buy',
      'didn\'t buy',
      'She did not buy that expensive phone yesterday.',
      'She didn\'t buy that expensive phone yesterday.',
    ],
    baseVerb: 'buy',
    hint: 'В отрицании Past Simple используем вспомогательный глагол didn\'t + начальную форму глагола (buy).',
    explanation: 'Отрицание в Past Simple: didn\'t + инфинитив без частицы to (didn\'t buy).',
  },
  {
    tenseId: 'past_simple',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Когда ты пришел домой вчера вечером?',
    targetSentence: 'When did you come home last night?',
    acceptableAnswers: [
      'When did you come home last night?',
      'When did you come home yesterday evening?',
      'When did you arrive home last night?',
      'When did you get home last night?',
    ],
    baseVerb: 'come',
    hint: 'Вопрос в Past Simple начинается с When + did + подлежащее + начальная форма глагола.',
    explanation: 'Вопрос к определенному времени в прошлом: When did you come home yesterday evening / last night?',
  },

  // 6. Past Continuous
  {
    tenseId: 'past_continuous',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Past Continuous:',
    sentenceEn: 'At 8 PM yesterday, I ____ (read) an interesting article.',
    targetSentence: 'At 8 PM yesterday, I was reading an interesting article.',
    acceptableAnswers: [
      'was reading',
      'At 8 PM yesterday, I was reading an interesting article.',
    ],
    baseVerb: 'read',
    hint: 'Точный момент в прошлом (в 8 вечера вчера). Для "I" используется was + глагол с -ing.',
    explanation: 'Past Continuous показывает процесс в точный момент в прошлом. Формула: was/were + V-ing. Для I -> was reading.',
  },
  {
    tenseId: 'past_continuous',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму:',
    sentenceEn: 'While my mother was cooking, I ____ the piano.',
    targetSentence: 'While my mother was cooking, I was playing the piano.',
    acceptableAnswers: ['was playing', 'While my mother was cooking, I was playing the piano.'],
    baseVerb: 'play',
    options: ['played', 'was playing', 'had played', 'am playing'],
    hint: 'Два параллельных длительных действия в прошлом со словом while (пока мама готовила, я играл).',
    explanation: 'Параллельные процессы в прошлом со связкой while оба стоят в Past Continuous: was cooking / was playing.',
  },

  // 7. Past Perfect
  {
    tenseId: 'past_perfect',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Past Perfect:',
    sentenceEn: 'When we arrived at the station, the train ____ (already / leave).',
    targetSentence: 'When we arrived at the station, the train had already left.',
    acceptableAnswers: [
      'had already left',
      'When we arrived at the station, the train had already left.',
    ],
    baseVerb: 'leave',
    hint: 'Поезд уехал ДО того, как мы прибыли. Предпрошедшее время: had + 3-я форма глагола leave (left).',
    explanation: 'Действие произошло раньше другого действия в прошлом (arrived). Формула Past Perfect: had + V3 (had already left).',
  },
  {
    tenseId: 'past_perfect',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Она никогда не видела снега, пока не приехала в Канаду.',
    targetSentence: 'She had never seen snow before she came to Canada.',
    acceptableAnswers: [
      'She had never seen snow before she came to Canada.',
      'She had never seen snow until she came to Canada.',
    ],
    baseVerb: 'see',
    hint: 'Опыт до определенного момента в прошлом выражается через Past Perfect: had never seen.',
    explanation: 'Предшествование в прошлом: действие "не видела снега" предшествует приезду (came) -> had never seen.',
  },

  // 8. Past Perfect Continuous
  {
    tenseId: 'past_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Past Perfect Continuous:',
    sentenceEn: 'Alex was completely exhausted because he ____ (run) for two hours.',
    targetSentence: 'Alex was completely exhausted because he had been running for two hours.',
    acceptableAnswers: [
      'had been running',
      'Alex was completely exhausted because he had been running for two hours.',
    ],
    baseVerb: 'run',
    hint: 'Действие длилось до определенного момента в прошлом и объясняет причину усталости. Had been + V-ing.',
    explanation: 'Past Perfect Continuous подчеркивает длительность процесса, который привел к результату в прошлом: had been running.',
  },

  // 9. Future Simple
  {
    tenseId: 'future_simple',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Future Simple:',
    sentenceEn: 'Don\'t worry, I ____ (help) you with this task tomorrow.',
    targetSentence: 'Don\'t worry, I will help you with this task tomorrow.',
    acceptableAnswers: [
      'will help',
      'I will help',
      'I\'ll help',
      'Don\'t worry, I will help you with this task tomorrow.',
      'Don\'t worry, I\'ll help you with this task tomorrow.',
    ],
    baseVerb: 'help',
    hint: 'Обещание или спонтанное решение: will + начальная форма глагола.',
    explanation: 'Future Simple образуется с помощью will + инфинитив без частицы to (will help).',
  },
  {
    tenseId: 'future_simple',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Я думаю, погода будет хорошей на следующей неделе.',
    targetSentence: 'I think the weather will be good next week.',
    acceptableAnswers: [
      'I think the weather will be good next week.',
      'I think the weather will be fine next week.',
      'I think that the weather will be good next week.',
    ],
    baseVerb: 'be',
    hint: 'После "I think" для прогнозов используется Future Simple: will be.',
    explanation: 'Прогнозы и личное мнение (I think / I hope / probably) выражаются через Future Simple: will be.',
  },

  // 10. Future Continuous
  {
    tenseId: 'future_continuous',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Future Continuous:',
    sentenceEn: 'This time tomorrow, we ____ (fly) over the Atlantic.',
    targetSentence: 'This time tomorrow, we will be flying over the Atlantic.',
    acceptableAnswers: [
      'will be flying',
      'we will be flying',
      'we\'ll be flying',
      'This time tomorrow, we will be flying over the Atlantic.',
      'This time tomorrow, we\'ll be flying over the Atlantic.',
    ],
    baseVerb: 'fly',
    hint: 'Маркер "This time tomorrow" указывает на процесс в конкретный момент в будущем. Will be + V-ing.',
    explanation: 'Future Continuous обозначает процесс в определенную точку будущего. Формула: will be flying.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму:',
    sentenceEn: 'Don\'t phone me at 9 PM tonight. I ____ an important match.',
    targetSentence: 'Don\'t phone me at 9 PM tonight. I will be watching an important match.',
    acceptableAnswers: ['will be watching', 'will be watching an important match'],
    baseVerb: 'watch',
    options: ['watch', 'will watch', 'will be watching', 'have watched'],
    hint: 'В 9 вечера я буду находиться в процессе просмотра матча. Нужно будущее длительное время.',
    explanation: 'Действие будет разворачиваться в конкретное время в будущем (at 9 PM). Используем Future Continuous: will be watching.',
  },

  // 11. Future Perfect
  {
    tenseId: 'future_perfect',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Future Perfect:',
    sentenceEn: 'By 6 o\'clock tomorrow, I ____ (finish) writing the report.',
    targetSentence: 'By 6 o\'clock tomorrow, I will have finished writing the report.',
    acceptableAnswers: [
      'will have finished',
      'I will have finished',
      'I\'ll have finished',
      'By 6 o\'clock tomorrow, I will have finished writing the report.',
      'By 6 o\'clock tomorrow, I\'ll have finished writing the report.',
    ],
    baseVerb: 'finish',
    hint: 'Маркер "By 6 o\'clock tomorrow" (к 6 часам завтра) — действие завершится ДО этого момента. Will have + V3.',
    explanation: 'Future Perfect обозначает действие, завершенное к определенному сроку в будущем. Формула: will have finished.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Они построят новый мост к концу следующего года.',
    targetSentence: 'They will have built the new bridge by the end of next year.',
    acceptableAnswers: [
      'They will have built the new bridge by the end of next year.',
      'They\'ll have built the new bridge by the end of next year.',
    ],
    baseVerb: 'build',
    hint: 'Маркер дедлайна: "к концу следующего года" (by the end of next year). Используй will have built.',
    explanation: 'К указанному будущему моменту мост уже будет готов. Применяется Future Perfect: will have built.',
  },

  // 12. Future Perfect Continuous
  {
    tenseId: 'future_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Future Perfect Continuous:',
    sentenceEn: 'By next August, Maria ____ (work) at this company for 10 years.',
    targetSentence: 'By next August, Maria will have been working at this company for 10 years.',
    acceptableAnswers: [
      'will have been working',
      'By next August, Maria will have been working at this company for 10 years.',
    ],
    baseVerb: 'work',
    hint: 'Подчеркивается стаж/длительность процесса (for 10 years) к определенному моменту в будущем (by next August). Will have been + V-ing.',
    explanation: 'Future Perfect Continuous подчеркивает, как долго будет длиться действие к определенному рубежу: will have been working.',
  },
];

// Normalize text for comparison
export function cleanText(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[’‘`]/g, "'") // standard apostrophes
    .replace(/[.,!?;:]+$/g, '') // strip trailing punctuation
    .replace(/\s+/g, ' '); // collapse whitespace
}

// Check for common contractions
export function expandContractions(text: string): string {
  return text
    .replace(/\bi'm\b/g, 'i am')
    .replace(/\byou're\b/g, 'you are')
    .replace(/\bwe're\b/g, 'we are')
    .replace(/\bthey're\b/g, 'they are')
    .replace(/\bhe's\b/g, 'he is')
    .replace(/\bshe's\b/g, 'she is')
    .replace(/\bit's\b/g, 'it is')
    .replace(/\bdon't\b/g, 'do not')
    .replace(/\bdoesn't\b/g, 'does not')
    .replace(/\bdidn't\b/g, 'did not')
    .replace(/\bwon't\b/g, 'will not')
    .replace(/\bcan't\b/g, 'cannot')
    .replace(/\bhaven't\b/g, 'have not')
    .replace(/\bhasn't\b/g, 'has not')
    .replace(/\bhadn't\b/g, 'had not')
    .replace(/\bwasn't\b/g, 'was not')
    .replace(/\bweren't\b/g, 'were not')
    .replace(/\bi'll\b/g, 'i will')
    .replace(/\byou'll\b/g, 'you will')
    .replace(/\bhe'll\b/g, 'he will')
    .replace(/\bshe'll\b/g, 'she will')
    .replace(/\bwe'll\b/g, 'we will')
    .replace(/\bthey'll\b/g, 'they will')
    .replace(/\bi've\b/g, 'i have')
    .replace(/\byou've\b/g, 'you have')
    .replace(/\bwe've\b/g, 'we have')
    .replace(/\bthey've\b/g, 'they have')
    .replace(/\bi'd\b/g, 'i had')
    .replace(/\bhe'd\b/g, 'he had')
    .replace(/\bshe'd\b/g, 'she had');
}

// Generate offline exercise matching user filter
export function generateBuiltInExercise(
  selectedTenses: TenseId[],
  mode?: ExerciseMode,
  difficulty?: DifficultyLevel
): Exercise {
  const activeTenses = selectedTenses.length > 0 ? selectedTenses : (['present_simple'] as TenseId[]);

  let matches = EXERCISE_TEMPLATES.filter((t) => activeTenses.includes(t.tenseId));

  if (mode) {
    const modeMatches = matches.filter((t) => t.mode === mode);
    if (modeMatches.length > 0) matches = modeMatches;
  }

  if (difficulty) {
    const diffMatches = matches.filter((t) => t.difficulty === difficulty);
    if (diffMatches.length > 0) matches = diffMatches;
  }

  if (matches.length === 0) {
    matches = EXERCISE_TEMPLATES.filter((t) => activeTenses.includes(t.tenseId));
  }
  if (matches.length === 0) {
    matches = EXERCISE_TEMPLATES;
  }

  const selectedTemplate = matches[Math.floor(Math.random() * matches.length)];
  const tenseInfo = TENSES_MAP.get(selectedTemplate.tenseId);

  return {
    id: `local-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    tenseId: selectedTemplate.tenseId,
    tenseName: tenseInfo ? `${tenseInfo.nameEn} (${tenseInfo.nameRu})` : selectedTemplate.tenseId,
    mode: selectedTemplate.mode,
    difficulty: selectedTemplate.difficulty,
    promptRu: selectedTemplate.promptRu,
    sentenceEn: selectedTemplate.sentenceEn,
    targetSentence: selectedTemplate.targetSentence,
    acceptableAnswers: selectedTemplate.acceptableAnswers,
    baseVerb: selectedTemplate.baseVerb,
    options: selectedTemplate.options,
    hint: selectedTemplate.hint,
    explanation: selectedTemplate.explanation,
  };
}

// Intelligent Offline Evaluation
export function evaluateBuiltInAnswer(
  exercise: Exercise,
  userAnswer: string
): EvaluationResult {
  const cleanUser = cleanText(userAnswer);
  const cleanTarget = cleanText(exercise.targetSentence);
  const userExpanded = cleanText(expandContractions(cleanUser));
  const targetExpanded = cleanText(expandContractions(cleanTarget));

  // Check against acceptable answers
  const allAcceptable = [exercise.targetSentence, ...(exercise.acceptableAnswers || [])];
  const isDirectMatch = allAcceptable.some((acc) => {
    const cleanAcc = cleanText(acc);
    return cleanUser === cleanAcc || userExpanded === cleanText(expandContractions(cleanAcc));
  });

  if (isDirectMatch) {
    return {
      score: 10,
      percentage: 100,
      isCorrect: true,
      headline: 'Великолепно! Идеальный ответ! 🎯',
      praise: 'Ты безупречно применил грамматическую форму и соблюдал правила времени.',
      improvements: 'Ошибок нет. Ты отлично владеешь этим временем!',
      grammarTip: exercise.explanation,
      correctSentence: exercise.targetSentence,
      userAnswer,
    };
  }

  // If user just typed the verb form (e.g., target was "She wakes up", user typed "wakes" or "wakes up")
  if (exercise.acceptableAnswers && exercise.acceptableAnswers.length > 0) {
    const verbMatch = exercise.acceptableAnswers.some((ans: string) => {
      const cAns = cleanText(ans);
      return cleanUser === cAns || userExpanded === cleanText(expandContractions(cAns));
    });
    if (verbMatch) {
      return {
        score: 10,
        percentage: 100,
        isCorrect: true,
        headline: 'Отлично! Верная форма глагола! ✨',
        praise: 'Форма глагола выбрана совершенно точно.',
        improvements: 'В следующий раз можешь писать как только глагол, так и всё предложение целиком.',
        grammarTip: exercise.explanation,
        correctSentence: exercise.targetSentence,
        userAnswer,
      };
    }
  }

  // Check partial similarity / typos
  const targetWords = targetExpanded.split(' ');
  const userWords = userExpanded.split(' ');

  let matchingWords = 0;
  for (const w of userWords) {
    if (targetWords.includes(w)) {
      matchingWords++;
    }
  }

  const wordOverlap = matchingWords / Math.max(targetWords.length, userWords.length);

  // Missing auxiliary verb checks
  const tenseInfo = TENSES_MAP.get(exercise.tenseId);
  const tenseName = tenseInfo ? tenseInfo.nameEn : 'этом времени';

  let specificMistake = '';
  let score = 5;

  if (exercise.tenseId.includes('continuous')) {
    if (!userExpanded.includes('ing')) {
      specificMistake += 'Глагол должен быть с окончанием -ing (длительное действие). ';
    }
    if (
      (exercise.tenseId === 'present_continuous' && !/(am|is|are)/.test(userExpanded)) ||
      (exercise.tenseId === 'past_continuous' && !/(was|were)/.test(userExpanded)) ||
      (exercise.tenseId === 'future_continuous' && !/will be/.test(userExpanded))
    ) {
      specificMistake += 'Забыт вспомогательный глагол (am/is/are, was/were или will be). ';
    }
  }

  if (exercise.tenseId.includes('perfect')) {
    if (
      (exercise.tenseId.startsWith('present_perfect') && !/(have|has)/.test(userExpanded)) ||
      (exercise.tenseId.startsWith('past_perfect') && !/had/.test(userExpanded)) ||
      (exercise.tenseId.startsWith('future_perfect') && !/will have/.test(userExpanded))
    ) {
      specificMistake += 'Не хватает вспомогательного глагола have/has/had. ';
    }
  }

  if (exercise.tenseId.startsWith('future') && !userExpanded.includes('will')) {
    specificMistake += 'Для будущего времени требуется вспомогательный глагол will. ';
  }

  // Calculate score based on overlap and detected issues
  if (wordOverlap > 0.75) {
    score = 8;
  } else if (wordOverlap > 0.5) {
    score = 6;
  } else if (wordOverlap > 0.25) {
    score = 4;
  } else {
    score = 2;
  }

  if (specificMistake && score > 6) {
    score = 6;
  }

  const isAcceptable = score >= 8;

  return {
    score,
    percentage: score * 10,
    isCorrect: isAcceptable,
    headline: score >= 7 ? 'Хорошая попытка, но есть неточности!' : 'Нужно еще потренироваться!',
    praise:
      matchingWords > 0
        ? `Ты верно уловил контекст и использовал ключевые слова: "${userWords.filter((w) => targetWords.includes(w)).slice(0, 3).join(', ')}".`
        : 'Ты попытался сформулировать ответ, это отличный шаг к практике.',
    improvements: specificMistake
      ? `${specificMistake} Обрати внимание на формулу для ${tenseName}.`
      : `Сравни свой ответ с правильным вариантом. Обрати внимание на правильную грамматическую конструкцию для ${tenseName}.`,
    grammarTip: exercise.explanation,
    correctSentence: exercise.targetSentence,
    userAnswer,
  };
}
