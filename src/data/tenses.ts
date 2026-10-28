import { TenseInfo, TenseId } from '../types';

export const ALL_TENSES: TenseInfo[] = [
  // PRESENT
  {
    id: 'present_simple',
    nameEn: 'Present Simple',
    nameRu: 'Настоящее простое',
    category: 'present',
    shortDesc: 'Регулярные действия, привычки, факты и расписание',
    formula: {
      affirmative: 'I/You/We/They + V (He/She/It + V-s/es)',
      negative: "don't / doesn't + V",
      question: 'Do / Does + Subject + V...?',
    },
    markers: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'every day', 'on Mondays'],
    rules: [
      'Добавляем окончание -s или -es для he, she, it (She works, He watches).',
      'В отрицаниях и вопросах используем do/does, а основной глагол идет в начальной форме (She does not work).',
      'Глагол to be имеет формы: am, is, are.',
    ],
    examples: [
      { en: 'I drink coffee every morning.', ru: 'Я пью кофе каждое утро.' },
      { en: 'She does not like loud music.', ru: 'Она не любит громкую музыку.' },
      { en: 'Do you live in London?', ru: 'Ты живешь в Лондоне?' },
    ],
  },
  {
    id: 'present_continuous',
    nameEn: 'Present Continuous',
    nameRu: 'Настоящее длительное',
    category: 'present',
    shortDesc: 'Действие происходит прямо сейчас или в текущий период',
    formula: {
      affirmative: 'Subject + am / is / are + V-ing',
      negative: 'Subject + am / is / are + not + V-ing',
      question: 'Am / Is / Are + Subject + V-ing...?',
    },
    markers: ['now', 'right now', 'at the moment', 'currently', 'these days', 'Look!', 'Listen!'],
    rules: [
      'Формы be: I am, He/She/It is, We/You/They are.',
      'Глаголы состояния (stative verbs: know, love, believe, want) обычно не используются в Continuous.',
      'Удвоение согласной при добавлении -ing: run -> running, sit -> sitting.',
    ],
    examples: [
      { en: 'She is reading a book right now.', ru: 'Она читает книгу прямо сейчас.' },
      { en: 'We are not watching TV at the moment.', ru: 'Мы не смотрим телевизор в данный момент.' },
      { en: 'Are you working on this project today?', ru: 'Ты работаешь над этим проектом сегодня?' },
    ],
  },
  {
    id: 'present_perfect',
    nameEn: 'Present Perfect',
    nameRu: 'Настоящее совершенное',
    category: 'present',
    shortDesc: 'Результат в настоящем, жизненный опыт, незавершенное время',
    formula: {
      affirmative: 'Subject + have / has + V3 (ed)',
      negative: "Subject + haven't / hasn't + V3 (ed)",
      question: 'Have / Has + Subject + V3 (ed)...?',
    },
    markers: ['already', 'yet', 'just', 'ever', 'never', 'recently', 'so far', 'since', 'for'],
    rules: [
      'Has используется с He / She / It; Have — со всеми остальными.',
      'V3 — третья форма неправильного глагола (go -> gone) или окончание -ed (worked).',
      'Yet ставится в конце вопросов и отрицаний: "I haven\'t finished yet".',
    ],
    examples: [
      { en: 'I have already finished my homework.', ru: 'Я уже закончил домашнее задание.' },
      { en: 'He has visited Spain three times.', ru: 'Он посетил Испанию три раза.' },
      { en: 'Have you ever seen this movie?', ru: 'Ты когда-нибудь видел этот фильм?' },
    ],
  },
  {
    id: 'present_perfect_continuous',
    nameEn: 'Present Perfect Continuous',
    nameRu: 'Настоящее длительное совершенное',
    category: 'present',
    shortDesc: 'Действие началось в прошлом и длится до сих пор (акцент на времени)',
    formula: {
      affirmative: 'Subject + have / has been + V-ing',
      negative: "Subject + haven't / hasn't been + V-ing",
      question: 'Have / Has + Subject + been + V-ing...?',
    },
    markers: ['for 2 hours', 'since morning', 'all day', 'lately', 'how long'],
    rules: [
      'Подчеркивает длительность процесса: "I have been waiting for two hours".',
      'For указывает на период (for 5 days), Since — на точку начала (since 2020).',
    ],
    examples: [
      { en: 'It has been raining since early morning.', ru: 'Дождь идет с самого раннего утра.' },
      { en: 'They have been learning English for three years.', ru: 'Они учат английский уже три года.' },
      { en: 'How long have you been waiting here?', ru: 'Как долго ты здесь ждешь?' },
    ],
  },

  // PAST
  {
    id: 'past_simple',
    nameEn: 'Past Simple',
    nameRu: 'Прошедшее простое',
    category: 'past',
    shortDesc: 'Завершенное действие в конкретный момент в прошлом',
    formula: {
      affirmative: 'Subject + V2 (ed)',
      negative: "Subject + didn't + V (инфинитив)",
      question: 'Did + Subject + V...?',
    },
    markers: ['yesterday', 'last night', '2 days ago', 'in 2015', 'when I was a child'],
    rules: [
      'Для правильных глаголов добавляем -ed, неправильные берем из 2-й колонки таблицы (went, bought, saw).',
      'В отрицаниях didn\'t и вопросах Did основной глагол возвращается в 1-ю форму (I didn\'t go).',
      'Глагол to be: was (I/he/she/it) и were (we/you/they).',
    ],
    examples: [
      { en: 'We visited Paris last summer.', ru: 'Мы посетили Париж прошлым летом.' },
      { en: 'She did not call me yesterday.', ru: 'Она не звонила мне вчера.' },
      { en: 'Where did you buy that jacket?', ru: 'Где ты купил эту куртку?' },
    ],
  },
  {
    id: 'past_continuous',
    nameEn: 'Past Continuous',
    nameRu: 'Прошедшее длительное',
    category: 'past',
    shortDesc: 'Действие, которое длилось в точный момент или период в прошлом',
    formula: {
      affirmative: 'Subject + was / were + V-ing',
      negative: "Subject + wasn't / weren't + V-ing",
      question: 'Was / Were + Subject + V-ing...?',
    },
    markers: ['at 5 PM yesterday', 'all evening yesterday', 'while', 'when'],
    rules: [
      'Часто используется в связке с Past Simple: длительное действие (Past Continuous) прерывается кратким (Past Simple): "I was sleeping when the phone rang".',
      'Was используется с I, he, she, it. Were — с we, you, they.',
    ],
    examples: [
      { en: 'I was cooking dinner at 7 PM yesterday.', ru: 'Я готовил ужин вчера в 7 вечера.' },
      { en: 'They were playing tennis while we were walking.', ru: 'Они играли в теннис, пока мы гуляли.' },
      { en: 'What were you doing when I called?', ru: 'Что ты делал, когда я позвонил?' },
    ],
  },
  {
    id: 'past_perfect',
    nameEn: 'Past Perfect',
    nameRu: 'Прошедшее совершенное (предпрошедшее)',
    category: 'past',
    shortDesc: 'Действие завершилось ДО другого события в прошлом',
    formula: {
      affirmative: 'Subject + had + V3 (ed)',
      negative: "Subject + hadn't + V3 (ed)",
      question: 'Had + Subject + V3 (ed)...?',
    },
    markers: ['by 5 o\'clock yesterday', 'before', 'after', 'by the time', 'already'],
    rules: [
      'Служит маркером предшествования: то, что произошло раньше всего в прошлом — это Past Perfect.',
      'Had используется абсолютно со всеми местоимениями без изменений.',
    ],
    examples: [
      { en: 'When we arrived, the train had already left.', ru: 'Когда мы прибыли, поезд уже уехал.' },
      { en: 'She had finished the report before the boss asked for it.', ru: 'Она закончила отчет до того, как начальник попросил его.' },
      { en: 'Had you ever visited that city before that trip?', ru: 'Ты бывал в том городе до той поездки?' },
    ],
  },
  {
    id: 'past_perfect_continuous',
    nameEn: 'Past Perfect Continuous',
    nameRu: 'Прошедшее длительное совершенное',
    category: 'past',
    shortDesc: 'Действие продолжалось некоторое время до момента в прошлом',
    formula: {
      affirmative: 'Subject + had been + V-ing',
      negative: "Subject + hadn't been + V-ing",
      question: 'Had + Subject + been + V-ing...?',
    },
    markers: ['for 3 hours before...', 'since morning until...', 'how long had you been...'],
    rules: [
      'Показывает причину события в прошлом или длительность до определенной точки: "He was tired because he had been running".',
    ],
    examples: [
      { en: 'They had been driving for four hours before they stopped.', ru: 'Они ехали четыре часа, прежде чем остановились.' },
      { en: 'She had been crying before the teacher entered.', ru: 'Она плакала до того, как вошел учитель.' },
      { en: 'Had you been waiting long before the bus came?', ru: 'Ты долго ждал до того, как пришел автобус?' },
    ],
  },

  // FUTURE
  {
    id: 'future_simple',
    nameEn: 'Future Simple',
    nameRu: 'Будущее простое',
    category: 'future',
    shortDesc: 'Спонтанные решения, прогнозы, обещания и факты в будущем',
    formula: {
      affirmative: 'Subject + will + V',
      negative: "Subject + won't (will not) + V",
      question: 'Will + Subject + V...?',
    },
    markers: ['tomorrow', 'next week', 'soon', 'in 3 days', 'I think', 'probably', 'maybe'],
    rules: [
      'Will не изменяется по лицам.',
      'Отрицательная форма: will not = won\'t.',
      'Для спонтанного решения в момент речи: "I\'ll help you with that bag!"',
    ],
    examples: [
      { en: 'I will call you tomorrow morning.', ru: 'Я позвоню тебе завтра утром.' },
      { en: 'She will not (won\'t) agree to these conditions.', ru: 'Она не согласится на эти условия.' },
      { en: 'Will you come to my party next Friday?', ru: 'Ты придешь на мою вечеринку в следующую пятницу?' },
    ],
  },
  {
    id: 'future_continuous',
    nameEn: 'Future Continuous',
    nameRu: 'Будущее длительное',
    category: 'future',
    shortDesc: 'Действие будет происходить в определенный момент в будущем',
    formula: {
      affirmative: 'Subject + will be + V-ing',
      negative: "Subject + won't be + V-ing",
      question: 'Will + Subject + be + V-ing...?',
    },
    markers: ['at 5 PM tomorrow', 'this time next week', 'all day tomorrow'],
    rules: [
      'Описывает процесс, который будет разворачиваться в конкретную минуту или интервал в будущем.',
    ],
    examples: [
      { en: 'This time tomorrow I will be flying to Rome.', ru: 'В это время завтра я буду лететь в Рим.' },
      { en: 'He won\'t be sleeping at 8 PM, you can call him.', ru: 'В 8 вечера он не будет спать, можешь позвонить ему.' },
      { en: 'Will you be using your car tomorrow morning?', ru: 'Ты будешь пользоваться машиной завтра утром?' },
    ],
  },
  {
    id: 'future_perfect',
    nameEn: 'Future Perfect',
    nameRu: 'Будущее совершенное',
    category: 'future',
    shortDesc: 'Действие завершится к определенному моменту в будущем',
    formula: {
      affirmative: 'Subject + will have + V3 (ed)',
      negative: "Subject + won't have + V3 (ed)",
      question: 'Will + Subject + have + V3 (ed)...?',
    },
    markers: ['by 5 o\'clock tomorrow', 'by next Friday', 'by the end of this year', 'by then'],
    rules: [
      'Обязательно присутствует предлог by (к такому-то времени).',
      'Действие произойдет Раньше указанного дедлайна.',
    ],
    examples: [
      { en: 'By 6 PM I will have finished this report.', ru: 'К 6 вечера я уже закончу этот отчет.' },
      { en: 'They will have built the new bridge by next summer.', ru: 'Они построят новый мост к следующему лету.' },
      { en: 'Will you have written the essay by tomorrow?', ru: 'Ты напишешь эссе к завтрашнему дню?' },
    ],
  },
  {
    id: 'future_perfect_continuous',
    nameEn: 'Future Perfect Continuous',
    nameRu: 'Будущее совершенное длительное',
    category: 'future',
    shortDesc: 'К определенному моменту действие будет длиться уже какой-то срок',
    formula: {
      affirmative: 'Subject + will have been + V-ing',
      negative: "Subject + won't have been + V-ing",
      question: 'Will + Subject + have been + V-ing...?',
    },
    markers: ['by next year for 10 years', 'by 6 PM for 5 hours'],
    rules: [
      'Подчеркивает будущий юбилей или стаж процесса к дедлайну: "By next May, I will have been working here for 5 years".',
    ],
    examples: [
      { en: 'By next month she will have been living here for ten years.', ru: 'К следующему месяцу исполнится 10 лет, как она здесь живет.' },
      { en: 'By 8 PM we will have been waiting for six hours.', ru: 'К 8 вечера будет ровно 6 часов, как мы ждем.' },
      { en: 'Will he have been studying for four hours by noon?', ru: 'Будет ли он учиться уже 4 часа к полудню?' },
    ],
  },
];

export const TENSES_MAP = new Map<TenseId, TenseInfo>(
  ALL_TENSES.map((t) => [t.id, t])
);

export const DEFAULT_TENSES: TenseId[] = [
  'present_simple',
  'present_continuous',
  'past_simple',
  'future_simple',
];
