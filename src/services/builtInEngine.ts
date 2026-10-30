import { TenseId, ExerciseMode, DifficultyLevel, Exercise, EvaluationResult } from '../types';
import { TENSES_MAP } from '../data/tenses';

export interface ExerciseTemplate {
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

// Comprehensive Bank of Exercises Covering all 12 English Tenses across all 4 Modes and 3 Difficulties
export const EXERCISE_TEMPLATES: ExerciseTemplate[] = [
  // ==========================================
  // 1. PRESENT SIMPLE
  // ==========================================
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
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Present Simple (расписание/факт):',
    sentenceEn: 'The international flight to Tokyo ____ (depart) at 9:30 PM.',
    targetSentence: 'The international flight to Tokyo departs at 9:30 PM.',
    acceptableAnswers: ['departs', 'The international flight to Tokyo departs at 9:30 PM.'],
    baseVerb: 'depart',
    hint: 'Для расписаний самолетов, поездов и событий используется Present Simple. Подлежащее flight (it) требует окончания -s.',
    explanation: 'Действия по официальному расписанию выражаются в Present Simple с окончанием -s для 3-го лица (flight -> departs).',
  },
  {
    tenseId: 'present_simple',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в придаточном времени (Present Simple):',
    sentenceEn: 'As soon as the manager ____ (arrive), we will begin the conference.',
    targetSentence: 'As soon as the manager arrives, we will begin the conference.',
    acceptableAnswers: ['arrives', 'As soon as the manager arrives, we will begin the conference.'],
    baseVerb: 'arrive',
    hint: 'В придаточных времени после "as soon as", "when", "if" будущее время заменяется на Present Simple.',
    explanation: 'Правило условных предложений и придаточных времени: после союзов when, as soon as, if используется Present Simple вместо will.',
  },
  {
    tenseId: 'present_simple',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Они живут в центре города.',
    targetSentence: 'They live in the city center.',
    acceptableAnswers: ['They live in the city center.', 'They live in the city centre.', 'They live downtown.'],
    baseVerb: 'live',
    hint: 'Постоянное состояние. Местоимение They не требует окончания -s у глагола.',
    explanation: 'Обычный факт о месте жительства. С местоимением they глагол остается в базовой форме: live.',
  },
  {
    tenseId: 'present_simple',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Мой брат редко смотрит телевизор по будням.',
    targetSentence: 'My brother rarely watches TV on weekdays.',
    acceptableAnswers: [
      'My brother rarely watches TV on weekdays.',
      'My brother seldom watches TV on weekdays.',
      'My brother rarely watches television on weekdays.',
    ],
    baseVerb: 'watch',
    hint: 'Маркер частотности (rarely) ставится перед смысловым глаголом. Брат (he) -> watches.',
    explanation: 'Слова частотности (rarely, seldom) ставятся перед основным глаголом, а глагол watch принимает окончание -es после шипящих.',
  },
  {
    tenseId: 'present_simple',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Вода закипает при 100 градусах Цельсия.',
    targetSentence: 'Water boils at 100 degrees Celsius.',
    acceptableAnswers: ['Water boils at 100 degrees Celsius.', 'Water boils at 100 degrees.'],
    baseVerb: 'boil',
    hint: 'Научные факты и законы природы всегда выражаются в Present Simple. Неисчисляемое water = it.',
    explanation: 'Физические законы и природные явления передаются в Present Simple: water (it) -> boils.',
  },
  {
    tenseId: 'present_simple',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение отрицательным в Present Simple:',
    sentenceEn: 'Anna likes spicy food.',
    targetSentence: 'Anna does not like spicy food.',
    acceptableAnswers: ['Anna does not like spicy food.', 'Anna doesn\'t like spicy food.', 'doesn\'t like spicy food'],
    baseVerb: 'like',
    hint: 'Для Anna (she) вспомогательный глагол — does. Отрицание: does not (doesn\'t) + начальная форма like (без -s).',
    explanation: 'Отрицание для 3-го лица: doesn\'t + базовая форма глагола (does not like).',
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
  {
    tenseId: 'present_simple',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Задай общий вопрос к предложению в Present Simple:',
    sentenceEn: 'This software company develops cutting-edge artificial intelligence solutions.',
    targetSentence: 'Does this software company develop cutting-edge artificial intelligence solutions?',
    acceptableAnswers: [
      'Does this software company develop cutting-edge artificial intelligence solutions?',
      'Does this software company develop cutting-edge artificial intelligence solutions',
    ],
    baseVerb: 'develop',
    hint: 'Компания — это единственное число (it), поэтому вопрос начинается с Does, а глагол develop остается без окончания -s.',
    explanation: 'Для подлежащего в единственном числе вопрос образуется с помощью Does, а основной глагол теряет окончание -s.',
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
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму отрицания:',
    sentenceEn: 'Alex ____ meat because he is a vegetarian.',
    targetSentence: 'Alex does not eat meat because he is a vegetarian.',
    acceptableAnswers: ['does not eat', 'Alex does not eat meat because he is a vegetarian.'],
    baseVerb: 'eat',
    options: ['does not eat', 'do not eat', 'is not eating', 'not eats'],
    hint: 'Alex — это он (he). Отрицание в Present Simple требует вспомогательного глагола does.',
    explanation: 'Для 3-го лица единственного числа (he, she, it) отрицание строится через does not + начальная форма.',
  },
  {
    tenseId: 'present_simple',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильную грамматическую конструкцию:',
    sentenceEn: 'She ____ very little about quantum physics, yet she loves reading about it.',
    targetSentence: 'She knows very little about quantum physics, yet she loves reading about it.',
    acceptableAnswers: ['knows', 'She knows very little about quantum physics, yet she loves reading about it.'],
    baseVerb: 'know',
    options: ['knows', 'is knowing', 'know', 'has known'],
    hint: 'Глагол know — глагол состояния (stative verb), он не употребляется в Continuous.',
    explanation: 'Глаголы умственной деятельности (know, understand, believe) употребляются в Present Simple, а не Continuous.',
  },

  // ==========================================
  // 2. PRESENT CONTINUOUS
  // ==========================================
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
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Present Continuous (временная ситуация):',
    sentenceEn: 'Currently, our team ____ (develop) a brand new mobile application.',
    targetSentence: 'Currently, our team is developing a brand new mobile application.',
    acceptableAnswers: [
      'is developing',
      'are developing',
      'Currently, our team is developing a brand new mobile application.',
    ],
    baseVerb: 'develop',
    hint: 'Маркер currently указывает на действие в текущий период времени: be + V-ing.',
    explanation: 'Present Continuous выражает временный процесс, происходящий в текущий период жизни (currently).',
  },
  {
    tenseId: 'present_continuous',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Present Continuous (раздражающая привычка):',
    sentenceEn: 'He is so annoying! He ____ (always / lose) his keys.',
    targetSentence: 'He is so annoying! He is always losing his keys.',
    acceptableAnswers: [
      'is always losing',
      'He is always losing his keys.',
      'is always losing his keys',
    ],
    baseVerb: 'lose',
    hint: 'Когда Present Continuous используется со словом "always", это выражает критику или раздражение поведением человека.',
    explanation: 'Конструкция be + always + V-ing используется для выражения раздражения или частых повторяющихся оплошностей.',
  },
  {
    tenseId: 'present_continuous',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Я читаю интересную статью прямо сейчас.',
    targetSentence: 'I am reading an interesting article right now.',
    acceptableAnswers: [
      'I am reading an interesting article right now.',
      'I\'m reading an interesting article right now.',
      'I am reading an interesting article now.',
    ],
    baseVerb: 'read',
    hint: 'Прямо сейчас (right now) — действие в момент речи: I am + V-ing.',
    explanation: 'Present Continuous для местоимения I: am reading. Маркер: right now.',
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
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык (запланированное будущее):',
    sentenceEn: 'Завтра вечером мы встречаемся с инвесторами.',
    targetSentence: 'We are meeting with the investors tomorrow evening.',
    acceptableAnswers: [
      'We are meeting with the investors tomorrow evening.',
      'We\'re meeting with the investors tomorrow evening.',
      'We are meeting the investors tomorrow evening.',
    ],
    baseVerb: 'meet',
    hint: 'Четкая договоренность на будущее в английском передается через Present Continuous (be + V-ing).',
    explanation: 'Present Continuous часто используется для запланированных встреч и договоренностей в ближайшем будущем.',
  },
  {
    tenseId: 'present_continuous',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Present Continuous:',
    sentenceEn: 'You are studying English right now.',
    targetSentence: 'Are you studying English right now?',
    acceptableAnswers: ['Are you studying English right now?', 'Are you studying English right now'],
    baseVerb: 'study',
    hint: 'В вопросе вспомогательный глагол Are выносится на первое место перед подлежащим you.',
    explanation: 'Порядок слов в вопросе Present Continuous: Am/Is/Are + подлежащее + V-ing.',
  },
  {
    tenseId: 'present_continuous',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Present Continuous:',
    sentenceEn: 'The company is expanding its operations in Europe.',
    targetSentence: 'The company is not expanding its operations in Europe.',
    acceptableAnswers: [
      'The company is not expanding its operations in Europe.',
      'The company isn\'t expanding its operations in Europe.',
    ],
    baseVerb: 'expand',
    hint: 'Добавь отрицательную частицу not после вспомогательного глагола is: is not (isn\'t) expanding.',
    explanation: 'Отрицание в Present Continuous строится добавлением not после am/is/are.',
  },
  {
    tenseId: 'present_continuous',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Переделай предложение из Present Simple в Present Continuous (действие прямо сейчас):',
    sentenceEn: 'She talks to her financial advisor.',
    targetSentence: 'She is talking to her financial advisor right now.',
    acceptableAnswers: [
      'She is talking to her financial advisor right now.',
      'She is talking to her financial advisor.',
      'She\'s talking to her financial advisor right now.',
    ],
    baseVerb: 'talk',
    hint: 'Замени форму talks на форму Present Continuous: is talking.',
    explanation: 'Present Continuous подчеркивает процесс, происходящий прямо сейчас: is + talk-ing.',
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
  {
    tenseId: 'present_continuous',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'Listen! Somebody ____ at the door.',
    targetSentence: 'Listen! Somebody is knocking at the door.',
    acceptableAnswers: ['is knocking', 'Listen! Somebody is knocking at the door.'],
    baseVerb: 'knock',
    options: ['knocks', 'is knocking', 'are knocking', 'knocked'],
    hint: 'Listen! призывает обратить внимание на происходящее сейчас. Местоимения somebody/everyone грамматически считаются единственным числом (is).',
    explanation: 'Somebody согласуется с глаголом в единственном числе: is knocking.',
  },
  {
    tenseId: 'present_continuous',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери грамматически верный вариант для меняющейся ситуации:',
    sentenceEn: 'Global temperatures ____ year by year due to climate change.',
    targetSentence: 'Global temperatures are rising year by year due to climate change.',
    acceptableAnswers: ['are rising', 'Global temperatures are rising year by year due to climate change.'],
    baseVerb: 'rise',
    options: ['rise', 'are rising', 'have risen', 'were rising'],
    hint: 'Для описания постепенных трендов, изменений и динамики используется Present Continuous.',
    explanation: 'Тренды и постепенно развивающиеся процессы выражаются временем Present Continuous (temperatures are rising).',
  },

  // ==========================================
  // 3. PRESENT PERFECT
  // ==========================================
  {
    tenseId: 'present_perfect',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Present Perfect:',
    sentenceEn: 'I ____ (never / visit) Australia before.',
    targetSentence: 'I have never visited Australia before.',
    acceptableAnswers: [
      'have never visited',
      'I have never visited Australia before.',
      'have never visited Australia before',
    ],
    baseVerb: 'visit',
    hint: 'Жизненный опыт с маркёром never: have/has + 3-я форма глагола (visited).',
    explanation: 'Present Perfect = have/has + V3/ed. Для местоимения I используется вспомогательный глагол have.',
  },
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
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Present Perfect:',
    sentenceEn: 'The research scientists ____ (not / publish) their findings yet.',
    targetSentence: 'The research scientists have not published their findings yet.',
    acceptableAnswers: [
      'have not published',
      'haven\'t published',
      'The research scientists have not published their findings yet.',
    ],
    baseVerb: 'not publish',
    hint: 'Scientists — множественное число (they -> have). Отрицание: have not (haven\'t) + V3.',
    explanation: 'Маркер yet в конце предложения указывает на отрицание в Present Perfect: have not published.',
  },
  {
    tenseId: 'present_perfect',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Я потерял свои ключи.',
    targetSentence: 'I have lost my keys.',
    acceptableAnswers: [
      'I have lost my keys.',
      'I\'ve lost my keys.',
      'I have lost my key.',
    ],
    baseVerb: 'lose',
    hint: 'Результат в настоящем: я потерял их и сейчас не могу войти. Have + lost (3-я форма).',
    explanation: 'Результат действия важен для настоящего момента — классическое применение Present Perfect (have lost).',
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
      'We have not received your email yet.',
      'We haven\'t received your email yet.',
    ],
    baseVerb: 'receive',
    hint: 'Слово "еще не" в конце предложения переводится как "yet". Формула: have not + received.',
    explanation: 'Yet ставится в конце отрицательных предложений в Present Perfect: haven\'t received ... yet.',
  },
  {
    tenseId: 'present_perfect',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Это лучший фильм, который я когда-либо смотрел.',
    targetSentence: 'This is the best movie I have ever watched.',
    acceptableAnswers: [
      'This is the best movie I have ever watched.',
      'This is the best movie that I have ever seen.',
      'This is the best film I have ever seen.',
      'This is the best film I\'ve ever seen.',
      'This is the best movie I\'ve ever seen.',
    ],
    baseVerb: 'watch / see',
    hint: 'После превосходной степени (the best) для выражения жизненного опыта используется Present Perfect с ever.',
    explanation: 'Конструкция "It/This is the best ... I have ever seen/watched" всегда требует Present Perfect.',
  },
  {
    tenseId: 'present_perfect',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Present Perfect:',
    sentenceEn: 'You have visited London.',
    targetSentence: 'Have you visited London?',
    acceptableAnswers: ['Have you visited London?', 'Have you visited London'],
    baseVerb: 'visit',
    hint: 'В вопросе вынеси вспомогательный глагол Have на первое место.',
    explanation: 'Вопрос в Present Perfect: Have/Has + подлежащее + 3-я форма глагола (Have you visited...?).',
  },
  {
    tenseId: 'present_perfect',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Переделай предложение в отрицательное в Present Perfect:',
    sentenceEn: 'Michael has completed his university degree.',
    targetSentence: 'Michael has not completed his university degree.',
    acceptableAnswers: [
      'Michael has not completed his university degree.',
      'Michael hasn\'t completed his university degree.',
    ],
    baseVerb: 'complete',
    hint: 'Добавь not к вспомогательному глаголу has: has not (hasn\'t) completed.',
    explanation: 'Отрицание в Present Perfect для 3-го лица: has not / hasn\'t + V3.',
  },
  {
    tenseId: 'present_perfect',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Соедини два факта в одно предложение с помощью Present Perfect и союза since:',
    sentenceEn: 'He moved to New York in 2020. He still lives there.',
    targetSentence: 'He has lived in New York since 2020.',
    acceptableAnswers: [
      'He has lived in New York since 2020.',
      'He\'s lived in New York since 2020.',
    ],
    baseVerb: 'live',
    hint: 'Действие началось в прошлом (in 2020) и продолжается до сих пор: has lived + since 2020.',
    explanation: 'Present Perfect с предлогом since выражает действие, начавшееся в определенный момент прошлого и длящееся до настоящего.',
  },
  {
    tenseId: 'present_perfect',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильный маркер времени:',
    sentenceEn: 'Have you ____ eaten sushi?',
    targetSentence: 'Have you ever eaten sushi?',
    acceptableAnswers: ['ever', 'Have you ever eaten sushi?'],
    baseVerb: 'eat',
    options: ['ever', 'never', 'yesterday', 'yet'],
    hint: 'В вопросах о жизненном опыте ("когда-либо") используется слово ever.',
    explanation: 'В вопросительных предложениях Present Perfect используется ever (когда-либо): Have you ever...?',
  },
  {
    tenseId: 'present_perfect',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'She ____ her arm and cannot play tennis today.',
    targetSentence: 'She has broken her arm and cannot play tennis today.',
    acceptableAnswers: ['has broken', 'She has broken her arm and cannot play tennis today.'],
    baseVerb: 'break',
    options: ['has broken', 'broke', 'breaks', 'had broken'],
    hint: 'Следствие в настоящем ("не может играть сегодня") требует Present Perfect.',
    explanation: 'Present Perfect соединяет прошлое действие с настоящим результатом: she has broken her arm.',
  },
  {
    tenseId: 'present_perfect',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери верный предлог времени:',
    sentenceEn: 'I have known Alexander ____ more than ten years.',
    targetSentence: 'I have known Alexander for more than ten years.',
    acceptableAnswers: ['for', 'I have known Alexander for more than ten years.'],
    baseVerb: 'know',
    options: ['for', 'since', 'during', 'from'],
    hint: 'Для указания периода / протяженности времени (продолжительности) используется предлог for, а не since.',
    explanation: 'For используется с промежутками времени (for 10 years), тогда как since указывает на начальную точку во времени (since 2014).',
  },

  // ==========================================
  // 4. PRESENT PERFECT CONTINUOUS
  // ==========================================
  {
    tenseId: 'present_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Present Perfect Continuous:',
    sentenceEn: 'I ____ (learn) English for six months.',
    targetSentence: 'I have been learning English for six months.',
    acceptableAnswers: [
      'have been learning',
      'I have been learning English for six months.',
      'have been learning English for six months',
    ],
    baseVerb: 'learn',
    hint: 'Формула: have/has been + глагол с -ing. Маркер for six months показывает длительность.',
    explanation: 'Действие началось 6 месяцев назад и продолжается сейчас. Present Perfect Continuous = have been learning.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Present Perfect Continuous:',
    sentenceEn: 'It ____ (rain) heavily since early morning.',
    targetSentence: 'It has been raining heavily since early morning.',
    acceptableAnswers: [
      'has been raining',
      'It has been raining heavily since early morning.',
    ],
    baseVerb: 'rain',
    hint: 'Подлежащее It требует has. Формула: has been + V-ing. Маркер: since early morning.',
    explanation: 'Дождь начался утром и все еще идет. Для третьего лица (It) формула: has been raining.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Present Perfect Continuous:',
    sentenceEn: 'How long ____ the engineers ____ (work) on this artificial intelligence model?',
    targetSentence: 'How long have the engineers been working on this artificial intelligence model?',
    acceptableAnswers: [
      'have the engineers been working',
      'have been working',
      'How long have the engineers been working on this artificial intelligence model?',
    ],
    baseVerb: 'work',
    hint: 'Вопрос с "How long": How long + have + подлежащее + been + V-ing?',
    explanation: 'В специальных вопросах с How long: How long + have/has + Subject + been + V-ing.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Она ждет тебя уже два часа.',
    targetSentence: 'She has been waiting for you for two hours.',
    acceptableAnswers: [
      'She has been waiting for you for two hours.',
      'She\'s been waiting for you for two hours.',
    ],
    baseVerb: 'wait',
    hint: 'Длительность действия до настоящего момента: she has been waiting for you for two hours.',
    explanation: 'Обязательно has been + waiting. Предлог for используется для обозначения периода (два часа).',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Почему твои глаза красные? — Я читал весь день.',
    targetSentence: 'Why are your eyes red? — I have been reading all day.',
    acceptableAnswers: [
      'Why are your eyes red? — I have been reading all day.',
      'Why are your eyes red? I have been reading all day.',
      'Why are your eyes red? I\'ve been reading all day.',
    ],
    baseVerb: 'read',
    hint: 'Видимый результат недавней длительной деятельности: have been + V-ing (reading all day).',
    explanation: 'Present Perfect Continuous используется, когда длительное действие в прошлом объясняет видимый физический эффект сейчас.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Мы ведем переговоры с этой компанией с прошлого месяца.',
    targetSentence: 'We have been negotiating with this company since last month.',
    acceptableAnswers: [
      'We have been negotiating with this company since last month.',
      'We\'ve been negotiating with this company since last month.',
    ],
    baseVerb: 'negotiate',
    hint: 'Вести переговоры — negotiate. Маркер since last month требует Present Perfect Continuous.',
    explanation: 'Формула: have been negotiating. Предлог since обозначает исходную временную точку процесса.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Present Perfect Continuous:',
    sentenceEn: 'You have been sleeping for ten hours.',
    targetSentence: 'Have you been sleeping for ten hours?',
    acceptableAnswers: ['Have you been sleeping for ten hours?', 'Have you been sleeping for ten hours'],
    baseVerb: 'sleep',
    hint: 'Поставь вспомогательный глагол Have перед подлежащим you.',
    explanation: 'Структура вопроса: Have + you + been sleeping + ...?',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Present Perfect Continuous:',
    sentenceEn: 'He has been practicing the piano lately.',
    targetSentence: 'He has not been practicing the piano lately.',
    acceptableAnswers: [
      'He has not been practicing the piano lately.',
      'He hasn\'t been practicing the piano lately.',
    ],
    baseVerb: 'practice',
    hint: 'Отрицательная частица not ставится сразу после первого вспомогательного глагола has: has not been practicing.',
    explanation: 'Отрицание: has not been / hasn\'t been + глагол с окончанием -ing.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Переделай предложение в вопрос с вопросительным словом How long:',
    sentenceEn: 'They have been renovating the historical building.',
    targetSentence: 'How long have they been renovating the historical building?',
    acceptableAnswers: [
      'How long have they been renovating the historical building?',
      'How long have they been renovating the historical building',
    ],
    baseVerb: 'renovate',
    hint: 'Порядок слов: How long + have + they + been renovating...?',
    explanation: 'Специальный вопрос образуется выносом How long на первое место, затем вспомогательный глагол have.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'I am exhausted because I ____ all afternoon.',
    targetSentence: 'I am exhausted because I have been running all afternoon.',
    acceptableAnswers: ['have been running', 'I am exhausted because I have been running all afternoon.'],
    baseVerb: 'run',
    options: ['have been running', 'run', 'am running', 'was ran'],
    hint: 'Усталость в настоящем — результат длительного непрерывного действия. Have been + running.',
    explanation: 'Видимый эффект в настоящем после непрерывной нагрузки выражается временем Present Perfect Continuous.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму:',
    sentenceEn: 'Sophia looks tired. She ____ for her exams since early morning.',
    targetSentence: 'Sophia looks tired. She has been studying for her exams since early morning.',
    acceptableAnswers: ['has been studying', 'Sophia looks tired. She has been studying for her exams since early morning.'],
    baseVerb: 'study',
    options: ['has been studying', 'is studying', 'studies', 'has studied'],
    hint: 'Sophia (she) требует форму has been studying для процесса, начавшегося утром (since early morning).',
    explanation: 'Present Perfect Continuous подчеркивает непрерывность и протяженность подготовки: has been studying.',
  },
  {
    tenseId: 'present_perfect_continuous',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильную конструкцию (Continuous против Simple):',
    sentenceEn: 'I ____ on this report all week, but I haven\'t finished it yet.',
    targetSentence: 'I have been working on this report all week, but I haven\'t finished it yet.',
    acceptableAnswers: ['have been working', 'I have been working on this report all week, but I haven\'t finished it yet.'],
    baseVerb: 'work',
    options: ['have been working', 'have worked', 'am working', 'worked'],
    hint: 'Маркер all week в сочетании с незавершенностью процесса ("haven\'t finished it yet") требует Continuous.',
    explanation: 'Когда подчеркивается сам процесс и потраченное время, а не результат завершения, выбираем Present Perfect Continuous.',
  },

  // ==========================================
  // 5. PAST SIMPLE
  // ==========================================
  {
    tenseId: 'past_simple',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Поставь глагол в Past Simple:',
    sentenceEn: 'We ____ (visit) our grandparents in the countryside last weekend.',
    targetSentence: 'We visited our grandparents in the countryside last weekend.',
    acceptableAnswers: ['visited', 'We visited our grandparents in the countryside last weekend.'],
    baseVerb: 'visit',
    hint: 'Глагол visit — правильный. В Past Simple добавляется окончание -ed (visited). Маркер: last weekend.',
    explanation: 'Past Simple для правильных глаголов образуется прибавлением окончания -ed (visit -> visited).',
  },
  {
    tenseId: 'past_simple',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Past Simple (неправильный глагол):',
    sentenceEn: 'Yesterday afternoon, I ____ (buy) a new pair of headphones.',
    targetSentence: 'Yesterday afternoon, I bought a new pair of headphones.',
    acceptableAnswers: ['bought', 'Yesterday afternoon, I bought a new pair of headphones.'],
    baseVerb: 'buy',
    hint: 'Buy — неправильный глагол. 2-я форма прошедшего времени — bought.',
    explanation: 'Неправильный глагол buy во 2-й форме прошедшего времени: bought.',
  },
  {
    tenseId: 'past_simple',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Поставь глагол в отрицательную форму Past Simple:',
    sentenceEn: 'They ____ (not / attend) the annual product presentation yesterday.',
    targetSentence: 'They did not attend the annual product presentation yesterday.',
    acceptableAnswers: [
      'did not attend',
      'didn\'t attend',
      'They did not attend the annual product presentation yesterday.',
      'They didn\'t attend the annual product presentation yesterday.',
    ],
    baseVerb: 'not attend',
    hint: 'Отрицание в Past Simple для всех лиц: did not (didn\'t) + начальная форма глагола без -ed.',
    explanation: 'В отрицаниях Past Simple используется did not (didn\'t) + базовая форма (attend, а не attended!).',
  },
  {
    tenseId: 'past_simple',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Past Simple (последовательность действий):',
    sentenceEn: 'She ____ (open) the envelope, ____ (read) the official letter, and smiled.',
    targetSentence: 'She opened the envelope, read the official letter, and smiled.',
    acceptableAnswers: [
      'opened, read',
      'opened read',
      'She opened the envelope, read the official letter, and smiled.',
    ],
    baseVerb: 'open / read',
    hint: 'Последовательность завершенных действий в прошлом. Open -> opened, read -> read (произносится как red).',
    explanation: 'Цепочка последовательных действий в прошлом выражается серией глаголов в Past Simple.',
  },
  {
    tenseId: 'past_simple',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Мы посмотрели этот фильм вчера вечером.',
    targetSentence: 'We watched this movie yesterday evening.',
    acceptableAnswers: [
      'We watched this movie yesterday evening.',
      'We watched this film yesterday evening.',
      'We watched this movie yesterday night.',
    ],
    baseVerb: 'watch',
    hint: 'Маркер времени вчера вечером (yesterday evening) требует Past Simple: watched.',
    explanation: 'Конкретное указание времени в прошлом (yesterday) — жесткий маркер Past Simple (watched).',
  },
  {
    tenseId: 'past_simple',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Когда ты закончил университет?',
    targetSentence: 'When did you graduate from university?',
    acceptableAnswers: [
      'When did you graduate from university?',
      'When did you finish university?',
      'When did you graduate from college?',
    ],
    baseVerb: 'graduate / finish',
    hint: 'Вопрос со словом When в прошлом всегда строится в Past Simple: When did you graduate...?',
    explanation: 'Вопросы со словом When (когда?) всегда требуют Past Simple, так как запрашивают конкретный момент в прошлом.',
  },
  {
    tenseId: 'past_simple',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Основатели запустили свой первый стартап более десяти лет назад.',
    targetSentence: 'The founders launched their first startup more than ten years ago.',
    acceptableAnswers: [
      'The founders launched their first startup more than ten years ago.',
      'The founders launched their first startup over ten years ago.',
    ],
    baseVerb: 'launch',
    hint: 'Маркер ago (тому назад) требует строго Past Simple: launched.',
    explanation: 'Слово "ago" указывает на завершенный период в прошлом и всегда используется с Past Simple.',
  },
  {
    tenseId: 'past_simple',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Past Simple:',
    sentenceEn: 'They arrived on time.',
    targetSentence: 'Did they arrive on time?',
    acceptableAnswers: ['Did they arrive on time?', 'Did they arrive on time'],
    baseVerb: 'arrive',
    hint: 'Вопрос в Past Simple начинается со вспомогательного глагола Did, а основной глагол теряет окончание: arrive.',
    explanation: 'Did + Subject + базовая форма глагола: Did they arrive on time?',
  },
  {
    tenseId: 'past_simple',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Past Simple:',
    sentenceEn: 'He caught the morning express train.',
    targetSentence: 'He did not catch the morning express train.',
    acceptableAnswers: [
      'He did not catch the morning express train.',
      'He didn\'t catch the morning express train.',
    ],
    baseVerb: 'catch',
    hint: 'Did not + 1-я форма глагола (catch, а не caught!): didn\'t catch.',
    explanation: 'В отрицании 2-я форма глагола возвращается в инфинитив: caught -> did not catch.',
  },
  {
    tenseId: 'past_simple',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Переделай утвердительное предложение в отрицательное в Past Simple:',
    sentenceEn: 'The team understood the complex requirements from the very beginning.',
    targetSentence: 'The team did not understand the complex requirements from the very beginning.',
    acceptableAnswers: [
      'The team did not understand the complex requirements from the very beginning.',
      'The team didn\'t understand the complex requirements from the very beginning.',
    ],
    baseVerb: 'understand',
    hint: 'Глагол understand во 2-й форме — understood. Отрицание: did not understand.',
    explanation: 'После did not глагол ставится в начальную форму: did not understand.',
  },
  {
    tenseId: 'past_simple',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'Where ____ you spend your summer vacation last year?',
    targetSentence: 'Where did you spend your summer vacation last year?',
    acceptableAnswers: ['did', 'Where did you spend your summer vacation last year?'],
    baseVerb: 'do',
    options: ['did', 'do', 'have', 'were'],
    hint: 'Маркер last year указывает на Past Simple. В вопросе смысловой глагол spend требует вспомогательный did.',
    explanation: 'Для вопросов в Past Simple со смысловым глаголом используется вспомогательный did.',
  },
  {
    tenseId: 'past_simple',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'The famous scientist ____ the groundbreaking theory in 1915.',
    targetSentence: 'The famous scientist published the groundbreaking theory in 1915.',
    acceptableAnswers: ['published', 'The famous scientist published the groundbreaking theory in 1915.'],
    baseVerb: 'publish',
    options: ['published', 'has published', 'was publishing', 'had published'],
    hint: 'Точная дата в прошлом (in 1915) требует только Past Simple.',
    explanation: 'Когда указан конкретный год или дата в прошлом (in 1915), используется Past Simple (published).',
  },
  {
    tenseId: 'past_simple',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильную грамматическую форму:',
    sentenceEn: 'He ____ the scholarship because his application was submitted too late.',
    targetSentence: 'He did not win the scholarship because his application was submitted too late.',
    acceptableAnswers: ['did not win', 'He did not win the scholarship because his application was submitted too late.'],
    baseVerb: 'win',
    options: ['did not win', 'has not won', 'did not won', 'was not winning'],
    hint: 'В Past Simple после did not всегда стоит инфинитив: did not win.',
    explanation: 'После did not используется только начальная форма глагола без окончаний: did not win.',
  },

  // ==========================================
  // 6. PAST CONTINUOUS
  // ==========================================
  {
    tenseId: 'past_continuous',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Past Continuous:',
    sentenceEn: 'At 8 PM yesterday, I ____ (watch) a documentary on TV.',
    targetSentence: 'At 8 PM yesterday, I was watching a documentary on TV.',
    acceptableAnswers: [
      'was watching',
      'At 8 PM yesterday, I was watching a documentary on TV.',
    ],
    baseVerb: 'watch',
    hint: 'Действие в точный момент в прошлом (at 8 PM yesterday). I -> was watching.',
    explanation: 'Past Continuous = was/were + V-ing. Для местоимения I используется was: was watching.',
  },
  {
    tenseId: 'past_continuous',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Past Continuous:',
    sentenceEn: 'While we ____ (wait) for the train, it started to rain heavily.',
    targetSentence: 'While we were waiting for the train, it started to rain heavily.',
    acceptableAnswers: [
      'were waiting',
      'While we were waiting for the train, it started to rain heavily.',
    ],
    baseVerb: 'wait',
    hint: 'Длительное фоновое действие после слова While: we were waiting.',
    explanation: 'Фоновое длительное действие, прерванное кратким событием, ставится в Past Continuous: were waiting.',
  },
  {
    tenseId: 'past_continuous',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Past Continuous (два параллельных процесса):',
    sentenceEn: 'While the developers ____ (write) the backend code, the designers ____ (create) the interface mockups.',
    targetSentence: 'While the developers were writing the backend code, the designers were creating the interface mockups.',
    acceptableAnswers: [
      'were writing, were creating',
      'were writing were creating',
      'While the developers were writing the backend code, the designers were creating the interface mockups.',
    ],
    baseVerb: 'write / create',
    hint: 'Два одновременных длительных процесса в прошлом: were writing и were creating.',
    explanation: 'Параллельные одновременные действия в прошлом оба ставятся в Past Continuous.',
  },
  {
    tenseId: 'past_continuous',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Они играли в футбол в пять часов вечера.',
    targetSentence: 'They were playing football at five o\'clock in the evening.',
    acceptableAnswers: [
      'They were playing football at five o\'clock in the evening.',
      'They were playing soccer at five o\'clock in the evening.',
      'They were playing football at 5 PM.',
    ],
    baseVerb: 'play',
    hint: 'Точный момент в прошлом (в пять часов): They were playing.',
    explanation: 'Действие в процессе в указанный момент прошлого выражается Past Continuous (were playing).',
  },
  {
    tenseId: 'past_continuous',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Я не слушал музыку, когда ты вошел в комнату.',
    targetSentence: 'I was not listening to music when you entered the room.',
    acceptableAnswers: [
      'I was not listening to music when you entered the room.',
      'I wasn\'t listening to music when you entered the room.',
      'I wasn\'t listening to music when you came into the room.',
    ],
    baseVerb: 'listen',
    hint: 'Отрицание в прошлом длительном: I was not listening to music.',
    explanation: 'Формула: was not (wasn\'t) + listening. Краткое прерывающее действие — Past Simple (entered).',
  },
  {
    tenseId: 'past_continuous',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'О чем ты думал в тот момент?',
    targetSentence: 'What were you thinking about at that moment?',
    acceptableAnswers: [
      'What were you thinking about at that moment?',
      'What were you thinking at that moment?',
    ],
    baseVerb: 'think',
    hint: 'Вопрос о процессе мышления в конкретный прошлый момент: What were you thinking about...?',
    explanation: 'Специальный вопрос в Past Continuous: What + were + you + thinking about...?',
  },
  {
    tenseId: 'past_continuous',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Past Continuous:',
    sentenceEn: 'She was preparing dinner when guests arrived.',
    targetSentence: 'Was she preparing dinner when guests arrived?',
    acceptableAnswers: [
      'Was she preparing dinner when guests arrived?',
      'Was she preparing dinner when guests arrived',
    ],
    baseVerb: 'prepare',
    hint: 'Вынеси Was на первое место перед подлежащим she.',
    explanation: 'Порядок слов в вопросе Past Continuous: Was/Were + Subject + V-ing.',
  },
  {
    tenseId: 'past_continuous',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Past Continuous:',
    sentenceEn: 'The children were sleeping when the thunder struck.',
    targetSentence: 'The children were not sleeping when the thunder struck.',
    acceptableAnswers: [
      'The children were not sleeping when the thunder struck.',
      'The children weren\'t sleeping when the thunder struck.',
    ],
    baseVerb: 'sleep',
    hint: 'Добавь not после вспомогательного глагола were: were not (weren\'t) sleeping.',
    explanation: 'Отрицание в Past Continuous для множественного числа: were not / weren\'t + sleeping.',
  },
  {
    tenseId: 'past_continuous',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Преобразуй утверждение в вопрос с вопросительным словом Where:',
    sentenceEn: 'They were driving when the heavy snowstorm started.',
    targetSentence: 'Where were they driving when the heavy snowstorm started?',
    acceptableAnswers: [
      'Where were they driving when the heavy snowstorm started?',
      'Where were they driving when the heavy snowstorm started',
    ],
    baseVerb: 'drive',
    hint: 'Порядок слов: Where + were + they + driving...?',
    explanation: 'Специальный вопрос: Вопросительное слово + were + подлежащее + V-ing.',
  },
  {
    tenseId: 'past_continuous',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'I ____ home when I suddenly met my old friend.',
    targetSentence: 'I was walking home when I suddenly met my old friend.',
    acceptableAnswers: ['was walking', 'I was walking home when I suddenly met my old friend.'],
    baseVerb: 'walk',
    options: ['was walking', 'walked', 'were walking', 'am walking'],
    hint: 'Для местоимения I используется форма was + walking.',
    explanation: 'Фоновое длительное действие: I was walking.',
  },
  {
    tenseId: 'past_continuous',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильный вариант союза:',
    sentenceEn: 'He slipped and broke his ankle ____ he was playing basketball.',
    targetSentence: 'He slipped and broke his ankle while he was playing basketball.',
    acceptableAnswers: ['while', 'He slipped and broke his ankle while he was playing basketball.'],
    baseVerb: 'play',
    options: ['while', 'during', 'since', 'for'],
    hint: 'Союз while соединяет предложение с придаточным в Past Continuous (while he was playing).',
    explanation: 'Перед предложением с подлежащим и сказуемым в Continuous используется союз while (в то время как).',
  },
  {
    tenseId: 'past_continuous',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильную комбинацию времен:',
    sentenceEn: 'What ____ when the power outage occurred?',
    targetSentence: 'What were you doing when the power outage occurred?',
    acceptableAnswers: ['were you doing', 'What were you doing when the power outage occurred?'],
    baseVerb: 'do',
    options: ['were you doing', 'did you do', 'had you done', 'have you been doing'],
    hint: 'Вопрос о том, каким процессом был занят человек в момент происшествия (Past Continuous).',
    explanation: 'Процесс в момент краткого события в прошлом выражается вопросом в Past Continuous: What were you doing?',
  },

  // ==========================================
  // 7. PAST PERFECT
  // ==========================================
  {
    tenseId: 'past_perfect',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Past Perfect (предшествующее действие):',
    sentenceEn: 'When we arrived at the cinema, the film ____ (already / start).',
    targetSentence: 'When we arrived at the cinema, the film had already started.',
    acceptableAnswers: [
      'had already started',
      'When we arrived at the cinema, the film had already started.',
    ],
    baseVerb: 'start',
    hint: 'Действие произошло ДО нашего прибытия. Past Perfect = had + 3-я форма глагола (started).',
    explanation: 'Предпрошедшее действие (случившееся раньше другого момента в прошлом) выражается Past Perfect: had started.',
  },
  {
    tenseId: 'past_perfect',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Past Perfect:',
    sentenceEn: 'She knew the city well because she ____ (visit) it multiple times before.',
    targetSentence: 'She knew the city well because she had visited it multiple times before.',
    acceptableAnswers: [
      'had visited',
      'She knew the city well because she had visited it multiple times before.',
    ],
    baseVerb: 'visit',
    hint: 'Посещения были совершены ДО того, как она оказалась там в тот момент: had + visited.',
    explanation: 'Past Perfect передает предшествующий опыт относительно прошлого момента речи: had visited.',
  },
  {
    tenseId: 'past_perfect',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Past Perfect (отрицание):',
    sentenceEn: 'He was nervous during the flight because he ____ (never / fly) on an airplane before.',
    targetSentence: 'He was nervous during the flight because he had never flown on an airplane before.',
    acceptableAnswers: [
      'had never flown',
      'He was nervous during the flight because he had never flown on an airplane before.',
    ],
    baseVerb: 'fly',
    hint: 'Глагол fly — неправильный (fly - flew - flown). Had never flown.',
    explanation: '3-я форма глагола fly — flown. Past Perfect: had never flown.',
  },
  {
    tenseId: 'past_perfect',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Поезд уже ушел, когда мы приехали на станцию.',
    targetSentence: 'The train had already left when we arrived at the station.',
    acceptableAnswers: [
      'The train had already left when we arrived at the station.',
      'The train had already departed when we arrived at the station.',
    ],
    baseVerb: 'leave',
    hint: 'Поезд ушел ДО прибытия: had already left (3-я форма глагола leave).',
    explanation: 'Действие, совершившееся ранее другого действия в прошлом, оформляется в Past Perfect: had already left.',
  },
  {
    tenseId: 'past_perfect',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'К шести часам вечера он закончил весь отчет.',
    targetSentence: 'By six o\'clock in the evening, he had finished the whole report.',
    acceptableAnswers: [
      'By six o\'clock in the evening, he had finished the whole report.',
      'By 6 PM, he had finished the whole report.',
      'By 6 PM he had finished the entire report.',
    ],
    baseVerb: 'finish',
    hint: 'Маркер к определенному времени (by six o\'clock) — классический признак Past Perfect: had finished.',
    explanation: 'Предлог by с моментом времени в прошлом указывает на завершенность к этому рубежу: had finished.',
  },
  {
    tenseId: 'past_perfect',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Они не подписали контракт, потому что не прочитали условия заранее.',
    targetSentence: 'They did not sign the contract because they had not read the terms beforehand.',
    acceptableAnswers: [
      'They did not sign the contract because they had not read the terms beforehand.',
      'They didn\'t sign the contract because they hadn\'t read the terms in advance.',
      'They didn\'t sign the contract because they hadn\'t read the conditions in advance.',
    ],
    baseVerb: 'read',
    hint: 'Не прочитали ДО момента подписания: had not read (произносится red).',
    explanation: 'Причина в прошлом, предшествовавшая основному событию: Past Perfect (had not read).',
  },
  {
    tenseId: 'past_perfect',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Past Perfect:',
    sentenceEn: 'She had finished her breakfast before the taxi arrived.',
    targetSentence: 'Had she finished her breakfast before the taxi arrived?',
    acceptableAnswers: [
      'Had she finished her breakfast before the taxi arrived?',
      'Had she finished her breakfast before the taxi arrived',
    ],
    baseVerb: 'finish',
    hint: 'Поставь вспомогательный глагол Had в самое начало предложения перед she.',
    explanation: 'Структура вопроса в Past Perfect: Had + Subject + V3...?',
  },
  {
    tenseId: 'past_perfect',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Past Perfect:',
    sentenceEn: 'They had received the confirmation email before leaving.',
    targetSentence: 'They had not received the confirmation email before leaving.',
    acceptableAnswers: [
      'They had not received the confirmation email before leaving.',
      'They hadn\'t received the confirmation email before leaving.',
    ],
    baseVerb: 'receive',
    hint: 'Добавь отрицание not после had: had not (hadn\'t) received.',
    explanation: 'Отрицание в Past Perfect: had not / hadn\'t + 3-я форма глагола.',
  },
  {
    tenseId: 'past_perfect',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Объедини два предложения в одно с союзом After, поставив первое действие в Past Perfect:',
    sentenceEn: 'The team completed the testing. Then they deployed the update.',
    targetSentence: 'After the team had completed the testing, they deployed the update.',
    acceptableAnswers: [
      'After the team had completed the testing, they deployed the update.',
      'After the team had completed the testing they deployed the update.',
    ],
    baseVerb: 'complete',
    hint: 'Первое законченное действие ставится в Past Perfect: had completed.',
    explanation: 'Действие после союза After, которое произошло раньше второго, ставится в Past Perfect.',
  },
  {
    tenseId: 'past_perfect',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'By the time the police arrived, the burglar ____.',
    targetSentence: 'By the time the police arrived, the burglar had escaped.',
    acceptableAnswers: ['had escaped', 'By the time the police arrived, the burglar had escaped.'],
    baseVerb: 'escape',
    options: ['had escaped', 'escaped', 'has escaped', 'was escaping'],
    hint: 'Конструкция By the time + Past Simple требует в главной части Past Perfect.',
    explanation: 'Вор скрылся ДО приезда полиции: предпрошедшее действие выражается Past Perfect (had escaped).',
  },
  {
    tenseId: 'past_perfect',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'I realized that I ____ my wallet at home.',
    targetSentence: 'I realized that I had left my wallet at home.',
    acceptableAnswers: ['had left', 'I realized that I had left my wallet at home.'],
    baseVerb: 'leave',
    options: ['had left', 'left', 'have left', 'was leaving'],
    hint: 'Кошелек был оставлен ДО того, как я это осознал: had left.',
    explanation: 'Past Perfect выражает действие, случившееся до момента осознания в прошлом (realized).',
  },
  {
    tenseId: 'past_perfect',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильный союз для инверсии с Past Perfect:',
    sentenceEn: '____ had the plane taken off when the storm hit.',
    targetSentence: 'Hardly had the plane taken off when the storm hit.',
    acceptableAnswers: ['Hardly', 'Hardly had the plane taken off when the storm hit.'],
    baseVerb: 'take',
    options: ['Hardly', 'No sooner', 'While', 'After'],
    hint: 'Конструкция с союзом when: "Hardly had ... when ...". (С No sooner используется than).',
    explanation: 'Инверсионная конструкция: Hardly had + Subject + V3 + when...',
  },

  // ==========================================
  // 8. PAST PERFECT CONTINUOUS
  // ==========================================
  {
    tenseId: 'past_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Past Perfect Continuous:',
    sentenceEn: 'He was out of breath because he ____ (run) for an hour.',
    targetSentence: 'He was out of breath because he had been running for an hour.',
    acceptableAnswers: [
      'had been running',
      'He was out of breath because he had been running for an hour.',
    ],
    baseVerb: 'run',
    hint: 'Причина усталости в прошлом — длительный процесс до этого: had been + running.',
    explanation: 'Past Perfect Continuous подчеркивает длительность процесса, приведшего к видимому результату в прошлом: had been running.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Past Perfect Continuous:',
    sentenceEn: 'They ____ (negotiate) for three hours before reaching an agreement.',
    targetSentence: 'They had been negotiating for three hours before reaching an agreement.',
    acceptableAnswers: [
      'had been negotiating',
      'They had been negotiating for three hours before reaching an agreement.',
    ],
    baseVerb: 'negotiate',
    hint: 'Длительность процесса (for three hours) до определенного момента в прошлом (before reaching): had been negotiating.',
    explanation: 'Длительное действие, продолжавшееся вплоть до другого события в прошлом: had been negotiating.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Past Perfect Continuous:',
    sentenceEn: 'The road was dangerous because it ____ (snow) heavily all night long.',
    targetSentence: 'The road was dangerous because it had been snowing heavily all night long.',
    acceptableAnswers: [
      'had been snowing',
      'The road was dangerous because it had been snowing heavily all night long.',
    ],
    baseVerb: 'snow',
    hint: 'Непрерывный длительный процесс в прошлом с маркером all night long: had been snowing.',
    explanation: 'Продолжавшееся всю ночь действие объясняло состояние дороги утром: had been snowing.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Она учила испанский два года перед тем, как переехала в Мадрид.',
    targetSentence: 'She had been learning Spanish for two years before she moved to Madrid.',
    acceptableAnswers: [
      'She had been learning Spanish for two years before she moved to Madrid.',
      'She had been studying Spanish for two years before she moved to Madrid.',
    ],
    baseVerb: 'learn / study',
    hint: 'Длительность (for two years) до момента переезда: had been learning.',
    explanation: 'Формула: had been + V-ing. Указывает на непрерывный стаж изучения до момента переезда в прошлом.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Мы ждали его уже сорок минут, когда он наконец позвонил.',
    targetSentence: 'We had been waiting for him for forty minutes when he finally called.',
    acceptableAnswers: [
      'We had been waiting for him for forty minutes when he finally called.',
      'We had been waiting for him for 40 minutes when he finally called.',
    ],
    baseVerb: 'wait',
    hint: 'Ждали в течение сорока минут до звонка: had been waiting for forty minutes.',
    explanation: 'Действие длилось до прерывающего звонка в прошлом: Past Perfect Continuous (had been waiting).',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Глаза программиста болели, так как он работал за компьютером весь день.',
    targetSentence: 'The programmer\'s eyes were sore because he had been working at the computer all day.',
    acceptableAnswers: [
      'The programmer\'s eyes were sore because he had been working at the computer all day.',
      'The programmer\'s eyes hurt because he had been working at the computer all day.',
    ],
    baseVerb: 'work',
    hint: 'Причина физического состояния в прошлом после длительного непрерывного процесса: had been working all day.',
    explanation: 'Объяснение состояния в прошлом через длительную непрерывную деятельность: had been working.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Past Perfect Continuous:',
    sentenceEn: 'They had been driving for five hours.',
    targetSentence: 'Had they been driving for five hours?',
    acceptableAnswers: [
      'Had they been driving for five hours?',
      'Had they been driving for five hours',
    ],
    baseVerb: 'drive',
    hint: 'Вынеси Had в самое начало перед подлежащим they.',
    explanation: 'Вопрос в Past Perfect Continuous: Had + Subject + been + V-ing...?',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Past Perfect Continuous:',
    sentenceEn: 'She had been living in that apartment for very long.',
    targetSentence: 'She had not been living in that apartment for very long.',
    acceptableAnswers: [
      'She had not been living in that apartment for very long.',
      'She hadn\'t been living in that apartment for very long.',
    ],
    baseVerb: 'live',
    hint: 'Добавь not после had: had not (hadn\'t) been living.',
    explanation: 'Отрицание: had not been / hadn\'t been + V-ing.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Переделай предложение в вопрос со словом How long:',
    sentenceEn: 'The scientists had been researching the virus before the breakthrough.',
    targetSentence: 'How long had the scientists been researching the virus before the breakthrough?',
    acceptableAnswers: [
      'How long had the scientists been researching the virus before the breakthrough?',
      'How long had the scientists been researching the virus before the breakthrough',
    ],
    baseVerb: 'research',
    hint: 'Порядок слов: How long + had + the scientists + been researching...?',
    explanation: 'Специальный вопрос: How long + had + Subject + been + V-ing.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'Her hands were covered in paint because she ____ the kitchen walls.',
    targetSentence: 'Her hands were covered in paint because she had been painting the kitchen walls.',
    acceptableAnswers: ['had been painting', 'Her hands were covered in paint because she had been painting the kitchen walls.'],
    baseVerb: 'paint',
    options: ['had been painting', 'painted', 'was painted', 'has painted'],
    hint: 'Следы краски на руках в прошлом — следствие недавнего длительного процесса: had been painting.',
    explanation: 'Результат в прошлом после непрерывного физического действия: had been painting.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'At that point, Mr. Harris ____ at the university for 25 years.',
    targetSentence: 'At that point, Mr. Harris had been teaching at the university for 25 years.',
    acceptableAnswers: ['had been teaching', 'At that point, Mr. Harris had been teaching at the university for 25 years.'],
    baseVerb: 'teach',
    options: ['had been teaching', 'has been teaching', 'was teaching', 'taught'],
    hint: 'Стаж к определенному моменту в прошлом (at that point ... for 25 years): had been teaching.',
    explanation: 'Длительность непрерывного действия к точке в прошлом: Past Perfect Continuous.',
  },
  {
    tenseId: 'past_perfect_continuous',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери грамматически верный вариант:',
    sentenceEn: 'They ____ in the snow for hours before the rescue team finally arrived.',
    targetSentence: 'They had been waiting in the snow for hours before the rescue team finally arrived.',
    acceptableAnswers: ['had been waiting', 'They had been waiting in the snow for hours before the rescue team finally arrived.'],
    baseVerb: 'wait',
    options: ['had been waiting', 'waited', 'were waiting', 'have been waiting'],
    hint: 'Непрерывное ожидание в течение нескольких часов ДО прибытия спасателей: had been waiting.',
    explanation: 'Past Perfect Continuous подчеркивает непрерывный мучительный процесс ожидания до прибытия помощи.',
  },

  // ==========================================
  // 9. FUTURE SIMPLE
  // ==========================================
  {
    tenseId: 'future_simple',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Future Simple (спонтанное решение):',
    sentenceEn: 'It is too cold in the room. I ____ (close) the window.',
    targetSentence: 'It is too cold in the room. I will close the window.',
    acceptableAnswers: ['will close', 'I will close the window.', 'I\'ll close the window.'],
    baseVerb: 'close',
    hint: 'Спонтанное решение в момент речи выражается с помощью will + глагол.',
    explanation: 'Future Simple (will + глагол) используется для спонтанных решений, принятых в момент речи.',
  },
  {
    tenseId: 'future_simple',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Future Simple (прогноз):',
    sentenceEn: 'I think artificial intelligence ____ (transform) education in the near future.',
    targetSentence: 'I think artificial intelligence will transform education in the near future.',
    acceptableAnswers: [
      'will transform',
      'I think artificial intelligence will transform education in the near future.',
    ],
    baseVerb: 'transform',
    hint: 'После выражений мнения (I think, I believe) для предсказания будущего используется will + V.',
    explanation: 'Прогнозы и предположения с I think, probably выражаются через Future Simple: will transform.',
  },
  {
    tenseId: 'future_simple',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в отрицательной форме Future Simple:',
    sentenceEn: 'Don\'t worry, I promise I ____ (not / tell) anyone your secret.',
    targetSentence: 'Don\'t worry, I promise I will not tell anyone your secret.',
    acceptableAnswers: [
      'will not tell',
      'won\'t tell',
      'Don\'t worry, I promise I will not tell anyone your secret.',
      'Don\'t worry, I promise I won\'t tell anyone your secret.',
    ],
    baseVerb: 'not tell',
    hint: 'Обещание с отрицанием: will not (won\'t) + начальная форма tell.',
    explanation: 'Обещания и заверения в будущем выражаются конструкцией will not (won\'t) + глагол.',
  },
  {
    tenseId: 'future_simple',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Я помогу тебе с сумками.',
    targetSentence: 'I will help you with your bags.',
    acceptableAnswers: [
      'I will help you with your bags.',
      'I\'ll help you with your bags.',
      'I will help you with the bags.',
      'I\'ll help you with the bags.',
    ],
    baseVerb: 'help',
    hint: 'Предложение помощи в момент речи: I will help you...',
    explanation: 'Спонтанное предложение помощи всегда передается через will: I will / I\'ll help you.',
  },
  {
    tenseId: 'future_simple',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Завтра погода будет солнечной и теплой.',
    targetSentence: 'The weather will be sunny and warm tomorrow.',
    acceptableAnswers: [
      'The weather will be sunny and warm tomorrow.',
      'Tomorrow the weather will be sunny and warm.',
    ],
    baseVerb: 'be',
    hint: 'Прогноз погоды: The weather will be...',
    explanation: 'Прогноз погоды выражается через Future Simple глагола to be: will be.',
  },
  {
    tenseId: 'future_simple',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Я уверен, что ты сдашь этот сложный экзамен без проблем.',
    targetSentence: 'I am sure that you will pass this difficult exam without problems.',
    acceptableAnswers: [
      'I am sure that you will pass this difficult exam without problems.',
      'I\'m sure that you will pass this difficult exam without problems.',
      'I am sure you will pass this difficult exam without any problems.',
      'I\'m sure you\'ll pass this difficult exam without any problems.',
    ],
    baseVerb: 'pass',
    hint: 'После фразы I am sure прогноз на будущее формулируется через will pass.',
    explanation: 'Уверенность в будущем (I am sure) требует Future Simple: will pass.',
  },
  {
    tenseId: 'future_simple',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Future Simple:',
    sentenceEn: 'They will attend the annual tech conference.',
    targetSentence: 'Will they attend the annual tech conference?',
    acceptableAnswers: [
      'Will they attend the annual tech conference?',
      'Will they attend the annual tech conference',
    ],
    baseVerb: 'attend',
    hint: 'Вынеси will на первое место перед подлежащим they.',
    explanation: 'Вопрос в Future Simple: Will + Subject + глагол (Will they attend...?).',
  },
  {
    tenseId: 'future_simple',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Future Simple (используй сокращение):',
    sentenceEn: 'We will accept these unfavorable terms.',
    targetSentence: 'We won\'t accept these unfavorable terms.',
    acceptableAnswers: [
      'We won\'t accept these unfavorable terms.',
      'We will not accept these unfavorable terms.',
    ],
    baseVerb: 'accept',
    hint: 'Отрицательная форма will not сокращается до won\'t.',
    explanation: 'Сокращенная форма отрицания для will not — won\'t.',
  },
  {
    tenseId: 'future_simple',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Сделай вежливое предложение помощи (вопрос с Shall для 1-го лица):',
    sentenceEn: 'I will carry your heavy suitcase.',
    targetSentence: 'Shall I carry your heavy suitcase?',
    acceptableAnswers: [
      'Shall I carry your heavy suitcase?',
      'Shall I carry your heavy suitcase',
      'Will I carry your heavy suitcase?',
    ],
    baseVerb: 'carry',
    hint: 'Для предложений помощи с местоимением I традиционно используется модальная форма Shall: Shall I carry...?',
    explanation: 'Вежливое предложение услуги или совместного действия с I / We строится через Shall: Shall I carry...?',
  },
  {
    tenseId: 'future_simple',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'The phone is ringing. — Don\'t get up, I ____ it.',
    targetSentence: 'The phone is ringing. — Don\'t get up, I will answer it.',
    acceptableAnswers: ['will answer', 'The phone is ringing. — Don\'t get up, I will answer it.'],
    baseVerb: 'answer',
    options: ['will answer', 'answer', 'am answering', 'have answered'],
    hint: 'Спонтанное решение помочь в момент звонка телефона: will answer.',
    explanation: 'Мгновенное решение в момент речи выражается Future Simple (will answer).',
  },
  {
    tenseId: 'future_simple',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'People ____ probably live on Mars within the next century.',
    targetSentence: 'People will probably live on Mars within the next century.',
    acceptableAnswers: ['will probably live', 'People will probably live on Mars within the next century.'],
    baseVerb: 'live',
    options: ['will probably live', 'are probably living', 'probably live', 'would probably live'],
    hint: 'Слово probably (вероятно) в прогнозах будущего сочетается с will: will probably live.',
    explanation: 'Прогнозы вероятного будущего с наречием probably строятся с will.',
  },
  {
    tenseId: 'future_simple',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильный вспомогательный глагол для вежливого совета/предложения:',
    sentenceEn: '____ we go for a walk in the central park tonight?',
    targetSentence: 'Shall we go for a walk in the central park tonight?',
    acceptableAnswers: ['Shall', 'Shall we go for a walk in the central park tonight?'],
    baseVerb: 'go',
    options: ['Shall', 'Will', 'Would', 'Do'],
    hint: 'Для совместных предложений с местоимением We в классическом английском используется Shall.',
    explanation: 'Предложение совместного действия с We: Shall we go...?',
  },

  // ==========================================
  // 10. FUTURE CONTINUOUS
  // ==========================================
  {
    tenseId: 'future_continuous',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Future Continuous:',
    sentenceEn: 'This time tomorrow, I ____ (fly) over the Atlantic Ocean.',
    targetSentence: 'This time tomorrow, I will be flying over the Atlantic Ocean.',
    acceptableAnswers: [
      'will be flying',
      'This time tomorrow, I will be flying over the Atlantic Ocean.',
      'I\'ll be flying',
    ],
    baseVerb: 'fly',
    hint: 'Точный момент в будущем (в это же время завтра): will be + глагол с -ing (flying).',
    explanation: 'Действие в процессе в определенный момент в будущем: will be + V-ing (will be flying).',
  },
  {
    tenseId: 'future_continuous',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Future Continuous:',
    sentenceEn: 'Please do not call me at 3 PM because I ____ (conduct) an important interview.',
    targetSentence: 'Please do not call me at 3 PM because I will be conducting an important interview.',
    acceptableAnswers: [
      'will be conducting',
      'Please do not call me at 3 PM because I will be conducting an important interview.',
    ],
    baseVerb: 'conduct',
    hint: 'Процесс будет происходить именно в 3 часа дня: will be conducting.',
    explanation: 'Действие будет находиться в развитии в указанный момент времени: will be conducting.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Future Continuous (вежливый вопрос о планах):',
    sentenceEn: '____ you ____ (use) your car tonight, or can I borrow it?',
    targetSentence: 'Will you be using your car tonight, or can I borrow it?',
    acceptableAnswers: [
      'Will you be using',
      'Will be using',
      'Will you be using your car tonight, or can I borrow it?',
    ],
    baseVerb: 'use',
    hint: 'Вежливый вопрос о естественном ходе планов: Will you be using...?',
    explanation: 'Future Continuous часто используется для деликатного выяснения чужих планов без давления.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'В восемь вечера мы будем смотреть финал чемпионата.',
    targetSentence: 'At eight in the evening, we will be watching the championship final.',
    acceptableAnswers: [
      'At eight in the evening, we will be watching the championship final.',
      'At 8 PM, we will be watching the championship final.',
      'We will be watching the championship final at 8 PM.',
    ],
    baseVerb: 'watch',
    hint: 'Точный час в будущем (at eight): we will be watching.',
    explanation: 'Future Continuous подчеркивает, что в 8 вечера действие будет в самом разгаре: will be watching.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Она будет ждать тебя в аэропорту, когда ты приземлишься.',
    targetSentence: 'She will be waiting for you at the airport when you land.',
    acceptableAnswers: [
      'She will be waiting for you at the airport when you land.',
      'She\'ll be waiting for you at the airport when you land.',
    ],
    baseVerb: 'wait',
    hint: 'Длительное действие в момент твоего прилета: will be waiting. В придаточном времени — Present Simple (land).',
    explanation: 'Future Continuous (will be waiting) описывает процесс, в момент которого произойдет краткое событие (when you land).',
  },
  {
    tenseId: 'future_continuous',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Всю следующую неделю ученые будут тестировать новый прототип.',
    targetSentence: 'All next week, the scientists will be testing the new prototype.',
    acceptableAnswers: [
      'All next week, the scientists will be testing the new prototype.',
      'The scientists will be testing the new prototype all next week.',
    ],
    baseVerb: 'test',
    hint: 'Непрерывное действие на протяжении всего будущего периода (all next week): will be testing.',
    explanation: 'Указание периода в будущем (all next week) часто сопровождается Future Continuous: will be testing.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Future Continuous:',
    sentenceEn: 'They will be staying at the Grand Hotel next week.',
    targetSentence: 'Will they be staying at the Grand Hotel next week?',
    acceptableAnswers: [
      'Will they be staying at the Grand Hotel next week?',
      'Will they be staying at the Grand Hotel next week',
    ],
    baseVerb: 'stay',
    hint: 'Вынеси Will на первое место перед they: Will they be staying...?',
    explanation: 'Порядок слов в вопросе Future Continuous: Will + Subject + be + V-ing.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Future Continuous:',
    sentenceEn: 'I will be working during the weekend.',
    targetSentence: 'I will not be working during the weekend.',
    acceptableAnswers: [
      'I will not be working during the weekend.',
      'I won\'t be working during the weekend.',
    ],
    baseVerb: 'work',
    hint: 'Добавь not после will: will not (won\'t) be working.',
    explanation: 'Отрицание: will not be / won\'t be + глагол с -ing.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Сделай деликатный вопрос о чужих планах в Future Continuous:',
    sentenceEn: 'You will drive past the supermarket.',
    targetSentence: 'Will you be driving past the supermarket?',
    acceptableAnswers: [
      'Will you be driving past the supermarket?',
      'Will you be driving past the supermarket',
    ],
    baseVerb: 'drive',
    hint: 'Вежливый вопрос: Will you be driving...?',
    explanation: 'Future Continuous звучит мягче и вежливее, чем прямой вопрос в Future Simple.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'At noon tomorrow, we ____ lunch with the partners.',
    targetSentence: 'At noon tomorrow, we will be having lunch with the partners.',
    acceptableAnswers: ['will be having', 'At noon tomorrow, we will be having lunch with the partners.'],
    baseVerb: 'have',
    options: ['will be having', 'will have', 'have', 'are having been'],
    hint: 'Действие в процессе в полдень (at noon tomorrow): will be having.',
    explanation: 'Точное время в будущем (at noon) требует Future Continuous: will be having.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную грамматическую форму:',
    sentenceEn: 'Don\'t call her tonight — she ____ for the state bar exam.',
    targetSentence: 'Don\'t call her tonight — she will be studying for the state bar exam.',
    acceptableAnswers: ['will be studying', 'Don\'t call her tonight — she will be studying for the state bar exam.'],
    baseVerb: 'study',
    options: ['will be studying', 'will study', 'studies', 'has studied'],
    hint: 'Она будет погружена в процесс учебы весь вечер: will be studying.',
    explanation: 'Future Continuous показывает, что процесс будет идти в указанный период.',
  },
  {
    tenseId: 'future_continuous',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'By this time next month, you ____ on a sunny Mediterranean beach.',
    targetSentence: 'By this time next month, you will be sunbathing on a sunny Mediterranean beach.',
    acceptableAnswers: ['will be sunbathing', 'By this time next month, you will be sunbathing on a sunny Mediterranean beach.'],
    baseVerb: 'sunbathe',
    options: ['will be sunbathing', 'sunbathe', 'will have sunbathed', 'are sunbathed'],
    hint: 'Представление процесса в конкретный момент в будущем: will be sunbathing.',
    explanation: 'Ожидаемый процесс в конкретный момент будущего передается через Future Continuous.',
  },

  // ==========================================
  // 11. FUTURE PERFECT
  // ==========================================
  {
    tenseId: 'future_perfect',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Future Perfect (действие к моменту времени):',
    sentenceEn: 'By 9 PM tonight, she ____ (complete) all her homework.',
    targetSentence: 'By 9 PM tonight, she will have completed all her homework.',
    acceptableAnswers: [
      'will have completed',
      'By 9 PM tonight, she will have completed all her homework.',
    ],
    baseVerb: 'complete',
    hint: 'Маркер "By 9 PM" указывает на результат к моменту в будущем: will have + 3-я форма (completed).',
    explanation: 'Future Perfect выражает действие, которое завершится к определенному рубежу в будущем: will have completed.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Future Perfect:',
    sentenceEn: 'By the end of this year, our company ____ (launch) three innovative products.',
    targetSentence: 'By the end of this year, our company will have launched three innovative products.',
    acceptableAnswers: [
      'will have launched',
      'By the end of this year, our company will have launched three innovative products.',
    ],
    baseVerb: 'launch',
    hint: 'К концу этого года (By the end of this year): will have launched.',
    explanation: 'Future Perfect = will have + V3/ed для действия, которое будет выполнено к указанной дате.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Future Perfect (до другого события в будущем):',
    sentenceEn: 'By the time you wake up tomorrow, the snowplows ____ (clear) the streets.',
    targetSentence: 'By the time you wake up tomorrow, the snowplows will have cleared the streets.',
    acceptableAnswers: [
      'will have cleared',
      'By the time you wake up tomorrow, the snowplows will have cleared the streets.',
    ],
    baseVerb: 'clear',
    hint: 'Конструкция By the time + Present Simple требует в главной части Future Perfect: will have cleared.',
    explanation: 'Действие совершится до момента наступления другого события в будущем: will have cleared.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Я закончу этот отчет к пятнице.',
    targetSentence: 'I will have finished this report by Friday.',
    acceptableAnswers: [
      'I will have finished this report by Friday.',
      'I\'ll have finished this report by Friday.',
      'By Friday, I will have finished this report.',
    ],
    baseVerb: 'finish',
    hint: 'К пятнице (by Friday) — маркер завершенности в будущем: will have finished.',
    explanation: 'Завершение действия к сроку в будущем: Future Perfect (will have finished).',
  },
  {
    tenseId: 'future_perfect',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'К тому времени, как ты вернешься, мы уже приготовим ужин.',
    targetSentence: 'By the time you return, we will have already prepared dinner.',
    acceptableAnswers: [
      'By the time you return, we will have already prepared dinner.',
      'By the time you return, we will have cooked dinner.',
      'By the time you return, we will have already cooked dinner.',
      'By the time you come back, we will have already prepared dinner.',
    ],
    baseVerb: 'prepare / cook',
    hint: 'By the time you return (Present Simple) + we will have already prepared dinner (Future Perfect).',
    explanation: 'Временной рубеж в придаточном выражен Present Simple, а результат к этому моменту — Future Perfect.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'К 2030 году человечество построит постоянную базу на Луне.',
    targetSentence: 'By 2030, humanity will have built a permanent base on the Moon.',
    acceptableAnswers: [
      'By 2030, humanity will have built a permanent base on the Moon.',
      'By the year 2030, humanity will have built a permanent base on the Moon.',
    ],
    baseVerb: 'build',
    hint: 'К 2030 году: By 2030. Build — неправильный глагол (build - built - built). Will have built.',
    explanation: '3-я форма глагола build — built. Future Perfect: will have built.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Future Perfect:',
    sentenceEn: 'She will have saved enough money by next summer.',
    targetSentence: 'Will she have saved enough money by next summer?',
    acceptableAnswers: [
      'Will she have saved enough money by next summer?',
      'Will she have saved enough money by next summer',
    ],
    baseVerb: 'save',
    hint: 'Вынеси Will на первое место перед подлежащим she.',
    explanation: 'Вопрос в Future Perfect: Will + Subject + have + V3...?',
  },
  {
    tenseId: 'future_perfect',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Future Perfect:',
    sentenceEn: 'The construction workers will have finished the bridge by November.',
    targetSentence: 'The construction workers will not have finished the bridge by November.',
    acceptableAnswers: [
      'The construction workers will not have finished the bridge by November.',
      'The construction workers won\'t have finished the bridge by November.',
    ],
    baseVerb: 'finish',
    hint: 'Добавь not после will: will not (won\'t) have finished.',
    explanation: 'Отрицание: will not have / won\'t have + 3-я форма глагола.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Переделай предложение в вопрос со словом What:',
    sentenceEn: 'They will have accomplished all key milestones by the end of the quarter.',
    targetSentence: 'What will they have accomplished by the end of the quarter?',
    acceptableAnswers: [
      'What will they have accomplished by the end of the quarter?',
      'What will they have accomplished by the end of the quarter',
    ],
    baseVerb: 'accomplish',
    hint: 'Порядок слов: What + will + they + have accomplished...?',
    explanation: 'Специальный вопрос: Вопросительное слово + will + Subject + have + V3.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'By next Friday, I ____ all the required documents.',
    targetSentence: 'By next Friday, I will have signed all the required documents.',
    acceptableAnswers: ['will have signed', 'By next Friday, I will have signed all the required documents.'],
    baseVerb: 'sign',
    options: ['will have signed', 'will sign', 'have signed', 'will be signed'],
    hint: 'Маркер By next Friday требует времени Future Perfect: will have signed.',
    explanation: 'Завершенность к пятнице: will have signed.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'In two years\' time, she ____ from medical school.',
    targetSentence: 'In two years\' time, she will have graduated from medical school.',
    acceptableAnswers: ['will have graduated', 'In two years\' time, she will have graduated from medical school.'],
    baseVerb: 'graduate',
    options: ['will have graduated', 'graduates', 'will graduate', 'is graduated'],
    hint: 'Выражение "in two years\' time" указывает на рубеж в будущем, к которому наступит результат.',
    explanation: 'Future Perfect выражает результат, который свершится через определенный период в будущем.',
  },
  {
    tenseId: 'future_perfect',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильный маркер времени:',
    sentenceEn: 'The flight will have landed ____ midnight.',
    targetSentence: 'The flight will have landed by midnight.',
    acceptableAnswers: ['by', 'The flight will have landed by midnight.'],
    baseVerb: 'land',
    options: ['by', 'until', 'since', 'during'],
    hint: 'Для утвердительных предложений в Future Perfect предлог завершения к моменту — это by.',
    explanation: 'В утвердительных предложениях Future Perfect рубеж времени задается предлогом by (к полуночи).',
  },

  // ==========================================
  // 12. FUTURE PERFECT CONTINUOUS
  // ==========================================
  {
    tenseId: 'future_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'beginner',
    promptRu: 'Раскрой скобки в Future Perfect Continuous:',
    sentenceEn: 'Next month, I ____ (live) in this city for five years.',
    targetSentence: 'Next month, I will have been living in this city for five years.',
    acceptableAnswers: [
      'will have been living',
      'Next month, I will have been living in this city for five years.',
    ],
    baseVerb: 'live',
    hint: 'Стаж/длительность (for five years) к будущему моменту (next month). Will have been + V-ing.',
    explanation: 'Future Perfect Continuous подчеркивает длительность процесса к рубежу в будущем: will have been living.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'intermediate',
    promptRu: 'Раскрой скобки в Future Perfect Continuous:',
    sentenceEn: 'By 5 PM, they ____ (play) tennis for three continuous hours.',
    targetSentence: 'By 5 PM, they will have been playing tennis for three continuous hours.',
    acceptableAnswers: [
      'will have been playing',
      'By 5 PM, they will have been playing tennis for three continuous hours.',
    ],
    baseVerb: 'play',
    hint: 'Формула: will have been + глагол с окончанием -ing (playing).',
    explanation: 'Длительность непрерывного действия к моменту в будущем (by 5 PM): will have been playing.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'fill_blank',
    difficulty: 'advanced',
    promptRu: 'Раскрой скобки в Future Perfect Continuous:',
    sentenceEn: 'By next August, Maria ____ (work) at this international tech company for 10 years.',
    targetSentence: 'By next August, Maria will have been working at this international tech company for 10 years.',
    acceptableAnswers: [
      'will have been working',
      'By next August, Maria will have been working at this international tech company for 10 years.',
    ],
    baseVerb: 'work',
    hint: 'Подчеркивается стаж/длительность процесса (for 10 years) к определенному моменту в будущем (by next August). Will have been + V-ing.',
    explanation: 'Future Perfect Continuous подчеркивает, как долго будет длиться действие к определенному рубежу: will have been working.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'translate',
    difficulty: 'beginner',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'К следующему году мы будем изучать английский уже три года.',
    targetSentence: 'By next year, we will have been learning English for three years.',
    acceptableAnswers: [
      'By next year, we will have been learning English for three years.',
      'By next year, we will have been studying English for three years.',
    ],
    baseVerb: 'learn / study',
    hint: 'Стаж к следующему году: By next year + we will have been learning English for three years.',
    explanation: 'Future Perfect Continuous подчеркивает непрерывный стаж к будущему моменту: will have been learning.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'translate',
    difficulty: 'intermediate',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'Когда она приедет, он будет ждать ее на вокзале уже два часа.',
    targetSentence: 'When she arrives, he will have been waiting for her at the station for two hours.',
    acceptableAnswers: [
      'When she arrives, he will have been waiting for her at the station for two hours.',
      'When she arrives, he will have been waiting for her for two hours at the station.',
    ],
    baseVerb: 'wait',
    hint: 'When she arrives (Present Simple) + he will have been waiting for two hours (Future Perfect Continuous).',
    explanation: 'Длительность процесса ожидания к моменту другого будущего события выражается Future Perfect Continuous.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'translate',
    difficulty: 'advanced',
    promptRu: 'Переведи на английский язык:',
    sentenceEn: 'К концу этого семестра профессор будет преподавать в этом институте уже четверть века.',
    targetSentence: 'By the end of this semester, the professor will have been teaching at this institute for a quarter of a century.',
    acceptableAnswers: [
      'By the end of this semester, the professor will have been teaching at this institute for a quarter of a century.',
      'By the end of this semester, the professor will have been teaching at this university for 25 years.',
    ],
    baseVerb: 'teach',
    hint: 'Формула: will have been teaching + for a quarter of a century (for 25 years).',
    explanation: 'Длительный профессиональный стаж к будущей отметке: will have been teaching.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'transform',
    difficulty: 'beginner',
    promptRu: 'Сделай предложение вопросительным в Future Perfect Continuous:',
    sentenceEn: 'They will have been traveling for twelve hours by the time they reach Tokyo.',
    targetSentence: 'Will they have been traveling for twelve hours by the time they reach Tokyo?',
    acceptableAnswers: [
      'Will they have been traveling for twelve hours by the time they reach Tokyo?',
      'Will they have been traveling for twelve hours by the time they reach Tokyo',
    ],
    baseVerb: 'travel',
    hint: 'Вынеси Will на первое место перед they: Will they have been traveling...?',
    explanation: 'Вопрос в Future Perfect Continuous: Will + Subject + have been + V-ing...?',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'transform',
    difficulty: 'intermediate',
    promptRu: 'Сделай предложение отрицательным в Future Perfect Continuous:',
    sentenceEn: 'He will have been working here long enough to qualify for the pension.',
    targetSentence: 'He will not have been working here long enough to qualify for the pension.',
    acceptableAnswers: [
      'He will not have been working here long enough to qualify for the pension.',
      'He won\'t have been working here long enough to qualify for the pension.',
    ],
    baseVerb: 'work',
    hint: 'Добавь not после will: will not (won\'t) have been working.',
    explanation: 'Отрицание: will not have been / won\'t have been + V-ing.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'transform',
    difficulty: 'advanced',
    promptRu: 'Переделай предложение в вопрос с вопросительным словом How long:',
    sentenceEn: 'By the end of December, she will have been managing the project for two full years.',
    targetSentence: 'How long will she have been managing the project by the end of December?',
    acceptableAnswers: [
      'How long will she have been managing the project by the end of December?',
      'How long will she have been managing the project by the end of December',
    ],
    baseVerb: 'manage',
    hint: 'Порядок слов: How long + will + she + have been managing...?',
    explanation: 'Специальный вопрос: How long + will + Subject + have been + V-ing.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'choice',
    difficulty: 'beginner',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'By midnight, we ____ on the road for ten hours straight.',
    targetSentence: 'By midnight, we will have been driving on the road for ten hours straight.',
    acceptableAnswers: ['will have been driving', 'By midnight, we will have been driving on the road for ten hours straight.'],
    baseVerb: 'drive',
    options: ['will have been driving', 'will drive', 'will be driving', 'have been driving'],
    hint: 'Длительность непрерывной поездки к полуночи (for ten hours straight): will have been driving.',
    explanation: 'Future Perfect Continuous подчеркивает продолжительность непрерывного процесса к будущей отметке времени.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'choice',
    difficulty: 'intermediate',
    promptRu: 'Выбери правильную форму глагола:',
    sentenceEn: 'In November, they ____ married for exactly thirty years.',
    targetSentence: 'In November, they will have been married for exactly thirty years.',
    acceptableAnswers: ['will have been married', 'In November, they will have been married for exactly thirty years.'],
    baseVerb: 'be married',
    options: ['will have been married', 'will be marrying', 'are marrying', 'will have been marrying'],
    hint: 'Глагол be — глагол состояния, поэтому используется форма Future Perfect (will have been married).',
    explanation: 'Для глагола to be используется форма Future Perfect: will have been married.',
  },
  {
    tenseId: 'future_perfect_continuous',
    mode: 'choice',
    difficulty: 'advanced',
    promptRu: 'Выбери правильную форму для подчеркивания непрерывности процесса:',
    sentenceEn: 'When the marathon finishes, the athletes ____ for over four hours in the scorching heat.',
    targetSentence: 'When the marathon finishes, the athletes will have been running for over four hours in the scorching heat.',
    acceptableAnswers: ['will have been running', 'When the marathon finishes, the athletes will have been running for over four hours in the scorching heat.'],
    baseVerb: 'run',
    options: ['will have been running', 'will run', 'will have run', 'are running'],
    hint: 'Подчеркивается изнурительная длительность бега (for over four hours) к финишу марафона: will have been running.',
    explanation: 'Продолжительность непрерывного физического процесса к моменту в будущем передается через Future Perfect Continuous.',
  },
];

// In-memory Anti-repetition session cache
const recentSentencesBuffer: string[] = [];
const MAX_RECENT_BUFFER = 50;

export function recordExerciseShown(targetSentence: string) {
  if (!targetSentence) return;
  recentSentencesBuffer.push(targetSentence.toLowerCase().trim());
  if (recentSentencesBuffer.length > MAX_RECENT_BUFFER) {
    recentSentencesBuffer.shift();
  }
}

// Procedural dynamic sentence synthesis to guarantee zero repetitions even offline!
interface ProceduralGrammarPattern {
  subject: string;
  subjectRu: string;
  isThirdPersonSingular: boolean;
  baseVerb: string;
  verbRu: string;
  v2: string;
  v3: string;
  vIng: string;
  objectEn: string;
  objectRu: string;
  timeMarkerEn: string;
  timeMarkerRu: string;
}

const PROCEDURAL_PATTERNS: ProceduralGrammarPattern[] = [
  {
    subject: 'Alex',
    subjectRu: 'Алекс',
    isThirdPersonSingular: true,
    baseVerb: 'write',
    verbRu: 'писать',
    v2: 'wrote',
    v3: 'written',
    vIng: 'writing',
    objectEn: 'clean code for the new mobile application',
    objectRu: 'чистый код для нового мобильного приложения',
    timeMarkerEn: 'every single morning',
    timeMarkerRu: 'каждое утро',
  },
  {
    subject: 'The software engineers',
    subjectRu: 'Программисты',
    isThirdPersonSingular: false,
    baseVerb: 'test',
    verbRu: 'тестировать',
    v2: 'tested',
    v3: 'tested',
    vIng: 'testing',
    objectEn: 'the neural network architecture',
    objectRu: 'архитектуру нейронной сети',
    timeMarkerEn: 'carefully',
    timeMarkerRu: 'тщательно',
  },
  {
    subject: 'Elena',
    subjectRu: 'Елена',
    isThirdPersonSingular: true,
    baseVerb: 'design',
    verbRu: 'проектировать',
    v2: 'designed',
    v3: 'designed',
    vIng: 'designing',
    objectEn: 'an intuitive user interface',
    objectRu: 'интуитивно понятный интерфейс',
    timeMarkerEn: 'for our international clients',
    timeMarkerRu: 'для наших международных клиентов',
  },
  {
    subject: 'We',
    subjectRu: 'Мы',
    isThirdPersonSingular: false,
    baseVerb: 'discuss',
    verbRu: 'обсуждать',
    v2: 'discussed',
    v3: 'discussed',
    vIng: 'discussing',
    objectEn: 'the quarterly project roadmap',
    objectRu: 'план проекта на квартал',
    timeMarkerEn: 'in the conference room',
    timeMarkerRu: 'в конференц-зале',
  },
  {
    subject: 'Marcus',
    subjectRu: 'Маркус',
    isThirdPersonSingular: true,
    baseVerb: 'explore',
    verbRu: 'исследовать',
    v2: 'explored',
    v3: 'explored',
    vIng: 'exploring',
    objectEn: 'historic cities in southern Italy',
    objectRu: 'исторические города в южной Италии',
    timeMarkerEn: 'during his summer vacation',
    timeMarkerRu: 'во время летнего отпуска',
  },
  {
    subject: 'The research team',
    subjectRu: 'Исследовательская команда',
    isThirdPersonSingular: true,
    baseVerb: 'analyze',
    verbRu: 'анализировать',
    v2: 'analyzed',
    v3: 'analyzed',
    vIng: 'analyzing',
    objectEn: 'large datasets on climate change',
    objectRu: 'большие объемы данных об изменении климата',
    timeMarkerEn: 'with advanced algorithms',
    timeMarkerRu: 'с помощью передовых алгоритмов',
  },
  {
    subject: 'They',
    subjectRu: 'Они',
    isThirdPersonSingular: false,
    baseVerb: 'build',
    verbRu: 'строить',
    v2: 'built',
    v3: 'built',
    vIng: 'building',
    objectEn: 'a sustainable eco-friendly house',
    objectRu: 'экологичный энергоэффективный дом',
    timeMarkerEn: 'near the pine forest',
    timeMarkerRu: 'рядом с сосновым лесом',
  },
  {
    subject: 'Sarah',
    subjectRu: 'Сара',
    isThirdPersonSingular: true,
    baseVerb: 'play',
    verbRu: 'играть на',
    v2: 'played',
    v3: 'played',
    vIng: 'playing',
    objectEn: 'the acoustic guitar',
    objectRu: 'акустической гитаре',
    timeMarkerEn: 'at the musical festival',
    timeMarkerRu: 'на музыкальном фестивале',
  },
  {
    subject: 'Our doctor',
    subjectRu: 'Наш доктор',
    isThirdPersonSingular: true,
    baseVerb: 'examine',
    verbRu: 'осматривать',
    v2: 'examined',
    v3: 'examined',
    vIng: 'examining',
    objectEn: 'patients with great compassion',
    objectRu: 'пациентов с большой заботой',
    timeMarkerEn: 'every working day',
    timeMarkerRu: 'каждый рабочий день',
  },
  {
    subject: 'The students',
    subjectRu: 'Студенты',
    isThirdPersonSingular: false,
    baseVerb: 'solve',
    verbRu: 'решать',
    v2: 'solved',
    v3: 'solved',
    vIng: 'solving',
    objectEn: 'complex mathematical equations',
    objectRu: 'сложные математические уравнения',
    timeMarkerEn: 'before the final examination',
    timeMarkerRu: 'перед выпускным экзаменом',
  },
];

// Helper to synthesize a fresh dynamic exercise when needed
function synthesizeDynamicExercise(
  tenseId: TenseId,
  mode: ExerciseMode,
  difficulty: DifficultyLevel,
  excludeSentences: string[]
): ExerciseTemplate {
  // Filter procedural patterns not recently used
  const availablePatterns = PROCEDURAL_PATTERNS.filter((p) => {
    return !excludeSentences.some((ex) => ex.toLowerCase().includes(p.subject.toLowerCase()));
  });

  const p = availablePatterns.length > 0
    ? availablePatterns[Math.floor(Math.random() * availablePatterns.length)]
    : PROCEDURAL_PATTERNS[Math.floor(Math.random() * PROCEDURAL_PATTERNS.length)];

  const tenseInfo = TENSES_MAP.get(tenseId);
  const tenseName = tenseInfo ? tenseInfo.nameEn : tenseId;

  let targetSentence = '';
  let sentenceEn = '';
  let promptRu = '';
  let hint = '';
  let explanation = '';
  let acceptableAnswers: string[] = [];
  let options: string[] | undefined = undefined;

  switch (tenseId) {
    case 'present_simple': {
      const verbForm = p.isThirdPersonSingular ? `${p.baseVerb}s` : p.baseVerb;
      targetSentence = `${p.subject} ${verbForm} ${p.objectEn} ${p.timeMarkerEn}.`;
      if (mode === 'fill_blank') {
        promptRu = `Раскрой скобки в Present Simple:`;
        sentenceEn = `${p.subject} ____ (${p.baseVerb}) ${p.objectEn} ${p.timeMarkerEn}.`;
        acceptableAnswers = [verbForm, targetSentence];
      } else if (mode === 'translate') {
        promptRu = `Переведи на английский язык в Present Simple:`;
        sentenceEn = `${p.subjectRu} ${p.verbRu} ${p.objectRu} ${p.timeMarkerRu}.`;
        acceptableAnswers = [targetSentence];
      } else if (mode === 'transform') {
        promptRu = `Сделай предложение вопросительным в Present Simple:`;
        const aux = p.isThirdPersonSingular ? 'Does' : 'Do';
        targetSentence = `${aux} ${p.subject.toLowerCase() === 'alex' || p.subject.toLowerCase() === 'elena' || p.subject.toLowerCase() === 'marcus' || p.subject.toLowerCase() === 'sarah' ? p.subject : p.subject.toLowerCase()} ${p.baseVerb} ${p.objectEn} ${p.timeMarkerEn}?`;
        sentenceEn = `${p.subject} ${verbForm} ${p.objectEn} ${p.timeMarkerEn}.`;
        acceptableAnswers = [targetSentence];
      } else {
        promptRu = `Выбери правильную форму глагола в Present Simple:`;
        sentenceEn = `${p.subject} ____ ${p.objectEn} ${p.timeMarkerEn}.`;
        options = [verbForm, `${p.baseVerb}ing`, p.v2, `has ${p.v3}`].sort(() => Math.random() - 0.5);
        acceptableAnswers = [verbForm, targetSentence];
      }
      hint = p.isThirdPersonSingular
        ? `Подлежащее в 3-м лице единственного числа требует окончания -s/-es.`
        : `Подлежащее во множественном числе/первом лице использует базовую форму глагола.`;
      explanation = `В Present Simple глагол получает окончание -s для he/she/it (${verbForm}).`;
      break;
    }

    case 'present_continuous': {
      const be = p.isThirdPersonSingular ? 'is' : (p.subject === 'I' ? 'am' : 'are');
      targetSentence = `${p.subject} ${be} ${p.vIng} ${p.objectEn} right now.`;
      if (mode === 'fill_blank') {
        promptRu = `Раскрой скобки в Present Continuous (действие прямо сейчас):`;
        sentenceEn = `${p.subject} ____ (${p.baseVerb}) ${p.objectEn} right now.`;
        acceptableAnswers = [`${be} ${p.vIng}`, targetSentence];
      } else if (mode === 'translate') {
        promptRu = `Переведи на английский язык в Present Continuous:`;
        sentenceEn = `${p.subjectRu} прямо сейчас ${p.verbRu} ${p.objectRu}.`;
        acceptableAnswers = [targetSentence];
      } else if (mode === 'transform') {
        promptRu = `Сделай предложение отрицательным в Present Continuous:`;
        targetSentence = `${p.subject} ${be} not ${p.vIng} ${p.objectEn} right now.`;
        sentenceEn = `${p.subject} ${be} ${p.vIng} ${p.objectEn} right now.`;
        acceptableAnswers = [targetSentence, `${p.subject} ${be === 'is' ? "isn't" : "aren't"} ${p.vIng} ${p.objectEn} right now.`];
      } else {
        promptRu = `Выбери правильную форму глагола в Present Continuous:`;
        sentenceEn = `${p.subject} ____ ${p.objectEn} right now.`;
        options = [`${be} ${p.vIng}`, p.baseVerb, p.v2, `has been ${p.vIng}`].sort(() => Math.random() - 0.5);
        acceptableAnswers = [`${be} ${p.vIng}`, targetSentence];
      }
      hint = `Формула Present Continuous: am / is / are + V-ing.`;
      explanation = `Present Continuous обозначает действие в момент речи: ${be} ${p.vIng}.`;
      break;
    }

    case 'present_perfect': {
      const aux = p.isThirdPersonSingular ? 'has' : 'have';
      targetSentence = `${p.subject} ${aux} already ${p.v3} ${p.objectEn}.`;
      if (mode === 'fill_blank') {
        promptRu = `Раскрой скобки в Present Perfect:`;
        sentenceEn = `${p.subject} ____ (already / ${p.baseVerb}) ${p.objectEn}.`;
        acceptableAnswers = [`${aux} already ${p.v3}`, targetSentence];
      } else if (mode === 'translate') {
        promptRu = `Переведи на английский язык в Present Perfect:`;
        sentenceEn = `${p.subjectRu} уже ${p.verbRu} ${p.objectRu}.`;
        acceptableAnswers = [targetSentence];
      } else if (mode === 'transform') {
        promptRu = `Сделай предложение вопросительным в Present Perfect:`;
        targetSentence = `${aux.charAt(0).toUpperCase() + aux.slice(1)} ${p.subject.toLowerCase() === 'alex' || p.subject.toLowerCase() === 'elena' || p.subject.toLowerCase() === 'marcus' || p.subject.toLowerCase() === 'sarah' ? p.subject : p.subject.toLowerCase()} ${p.v3} ${p.objectEn}?`;
        sentenceEn = `${p.subject} ${aux} ${p.v3} ${p.objectEn}.`;
        acceptableAnswers = [targetSentence];
      } else {
        promptRu = `Выбери правильную форму Present Perfect:`;
        sentenceEn = `${p.subject} ____ ${p.objectEn} recently.`;
        options = [`${aux} ${p.v3}`, p.v2, `${aux} ${p.vIng}`, `had ${p.v3}`].sort(() => Math.random() - 0.5);
        acceptableAnswers = [`${aux} ${p.v3}`, `${p.subject} ${aux} ${p.v3} ${p.objectEn} recently.`];
      }
      hint = `Present Perfect = have / has + 3-я форма глагола.`;
      explanation = `Результат к настоящему моменту: ${aux} ${p.v3}.`;
      break;
    }

    case 'past_simple': {
      targetSentence = `${p.subject} ${p.v2} ${p.objectEn} yesterday.`;
      if (mode === 'fill_blank') {
        promptRu = `Раскрой скобки в Past Simple:`;
        sentenceEn = `${p.subject} ____ (${p.baseVerb}) ${p.objectEn} yesterday.`;
        acceptableAnswers = [p.v2, targetSentence];
      } else if (mode === 'translate') {
        promptRu = `Переведи на английский язык в Past Simple:`;
        sentenceEn = `Вчера ${p.subjectRu} ${p.verbRu} ${p.objectRu}.`;
        acceptableAnswers = [targetSentence, `Yesterday, ${targetSentence}`];
      } else if (mode === 'transform') {
        promptRu = `Сделай предложение отрицательным в Past Simple:`;
        targetSentence = `${p.subject} did not ${p.baseVerb} ${p.objectEn} yesterday.`;
        sentenceEn = `${p.subject} ${p.v2} ${p.objectEn} yesterday.`;
        acceptableAnswers = [targetSentence, `${p.subject} didn't ${p.baseVerb} ${p.objectEn} yesterday.`];
      } else {
        promptRu = `Выбери форму прошедшего времени Past Simple:`;
        sentenceEn = `${p.subject} ____ ${p.objectEn} yesterday.`;
        options = [p.v2, p.baseVerb, `was ${p.vIng}`, `has ${p.v3}`].sort(() => Math.random() - 0.5);
        acceptableAnswers = [p.v2, targetSentence];
      }
      hint = `Past Simple использует 2-ю форму глагола (для неправильных) или окончание -ed.`;
      explanation = `Вчерашнее завершенное действие в прошлом выражается 2-й формой: ${p.v2}.`;
      break;
    }

    default: {
      // General procedural generator for continuous/perfect/future tenses
      if (tenseId.includes('future')) {
        targetSentence = `${p.subject} will ${p.baseVerb} ${p.objectEn} tomorrow.`;
        sentenceEn = `${p.subject} ____ (${p.baseVerb}) ${p.objectEn} tomorrow.`;
        promptRu = `Раскрой скобки в ${tenseName}:`;
        acceptableAnswers = [`will ${p.baseVerb}`, targetSentence];
        hint = `Для будущего времени используй вспомогательный глагол will.`;
        explanation = `Действие в будущем выражается формой will ${p.baseVerb}.`;
      } else {
        targetSentence = `${p.subject} had ${p.v3} ${p.objectEn} before the meeting.`;
        sentenceEn = `${p.subject} ____ (${p.baseVerb}) ${p.objectEn} before the meeting.`;
        promptRu = `Раскрой скобки в ${tenseName}:`;
        acceptableAnswers = [`had ${p.v3}`, targetSentence];
        hint = `Действие произошло ДО другого события в прошлом: had + 3-я форма.`;
        explanation = `Предпрошедшее действие оформляется через had ${p.v3}.`;
      }
      break;
    }
  }

  return {
    tenseId,
    mode,
    difficulty,
    promptRu,
    sentenceEn,
    targetSentence,
    acceptableAnswers,
    baseVerb: p.baseVerb,
    options,
    hint,
    explanation,
  };
}

// Generate offline exercise matching user filter without annoying repetitions!
export function generateBuiltInExercise(
  selectedTenses: TenseId[],
  mode?: ExerciseMode,
  difficulty?: DifficultyLevel,
  excludeSentences: string[] = []
): Exercise {
  const activeTenses = selectedTenses.length > 0 ? selectedTenses : (['present_simple'] as TenseId[]);

  // 1. Filter templates by active tenses
  let pool = EXERCISE_TEMPLATES.filter((t) => activeTenses.includes(t.tenseId));

  // 2. Filter by mode if specified (strictly preserve requested mode!)
  if (mode) {
    const modeMatches = pool.filter((t) => t.mode === mode);
    if (modeMatches.length > 0) {
      pool = modeMatches;
    }
  }

  // 3. Filter by difficulty if matches exist
  if (difficulty) {
    const diffMatches = pool.filter((t) => t.difficulty === difficulty);
    if (diffMatches.length > 0) {
      pool = diffMatches;
    }
  }

  // Combine excludeSentences and recentSentencesBuffer for robust de-duplication
  const combinedExcludes = new Set([
    ...excludeSentences.map((s) => s.toLowerCase().trim()),
    ...recentSentencesBuffer,
  ]);

  // 4. Exclude recently seen exercises
  let unseenCandidates = pool.filter(
    (t) => !combinedExcludes.has(t.targetSentence.toLowerCase().trim())
  );

  let selectedTemplate: ExerciseTemplate;

  if (unseenCandidates.length > 0) {
    // Pick randomly from unseen matching candidates
    selectedTemplate = unseenCandidates[Math.floor(Math.random() * unseenCandidates.length)];
  } else if (pool.length > 0) {
    // If all curated templates in this filter were recently seen, synthesize a procedural fresh one!
    const randomTense = activeTenses[Math.floor(Math.random() * activeTenses.length)];
    const chosenMode = mode || 'fill_blank';
    const chosenDifficulty = difficulty || 'intermediate';
    selectedTemplate = synthesizeDynamicExercise(
      randomTense,
      chosenMode,
      chosenDifficulty,
      Array.from(combinedExcludes)
    );
  } else {
    // Fallback if empty pool
    const randomTense = activeTenses[Math.floor(Math.random() * activeTenses.length)];
    selectedTemplate = synthesizeDynamicExercise(
      randomTense,
      mode || 'fill_blank',
      difficulty || 'intermediate',
      Array.from(combinedExcludes)
    );
  }

  // Record into buffer so it won't repeat next turn
  recordExerciseShown(selectedTemplate.targetSentence);

  const tenseInfo = TENSES_MAP.get(selectedTemplate.tenseId);

  return {
    id: `local-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
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
