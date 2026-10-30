<div align="center">

# 🎓 TenseMaster AI
### Умный интерактивный ИИ-тренажер 12 времен английского языка

[![React](https://img.shields.io/badge/React-19-61dafb.svg?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38b2ac.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Интерактивное веб-приложение для эффективной и увлекательной тренировки всех **12 времен английского языка** с поддержкой **бесплатных ИИ-моделей** (OpenRouter Free, Groq Cloud Free, Google Gemini API) и автономного умного оффлайн-движка.

</div>

---

## 🌟 Ключевые возможности

### 1. 🎯 Гибкий выбор времен (мультиселект)
- Выбирайте **любое количество времен одновременно** (от 1 до 12).
- Удобная группировка по группам: **Present**, **Past**, **Future**.
- Быстрые пресеты в один клик:
  - *Все 12 времен*
  - *Все Simple (Present, Past, Future)*
  - *Все Continuous (Present, Past, Future)*
  - *Все Perfect (Present, Past, Future)*
  - *Все Present*, *Все Past*, *Все Future*
  - *Базовые 4 времени для новичков*

### 2. 🤖 Подключение к бесплатным ИИ-моделям и оффлайн-нейросетям
- **Ollama Local AI (DeepSeek R1 Оффлайн)**: Полностью локальный запуск нейросетей (DeepSeek R1, Llama 3.2, Qwen 2.5) на вашем компьютере **без интернета, без API-ключей и 100% бесплатно**.
- **Встроенный Smart AI (Оффлайн)**: Работает моментально прямо «из коробки» без API-ключей и интернета, с процедурной генерацией и умной защитой от повторений упражнений.
- **DeepSeek Official API**: Прямое подключение к `deepseek-chat` (DeepSeek-V3) и `deepseek-reasoner` (DeepSeek-R1).
- **OpenRouter (100% бесплатные модели с тегом `:free`)**:
  - `deepseek/deepseek-r1:free` (Топовая рассуждающая модель)
  - `google/gemini-2.0-flash-lite:free`
  - `meta-llama/llama-3.3-70b-instruct:free`
  - `qwen/qwen-2.5-72b-instruct:free`
  - `mistralai/mistral-7b-instruct:free`
- **Groq Cloud (Бесплатный тир)**:
  - `llama-3.3-70b-versatile` (молниеносная генерация 500+ токенов в секунду)
  - `llama-3.1-8b-instant`
- **Google Gemini API (Бесплатный ключ Google AI Studio)**:
  - `gemini-2.0-flash`
  - `gemini-1.5-flash`
- Кнопка **«Проверить подключение»** прямо в окне настроек с живым тестированием связи с моделью.

### 3. 💡 Кнопка «Подсказка»
- Небольшая тактичная подсказка, которая не спойлерит ответ целиком, а направляет мысль: напоминает ключевой маркер времени (*yesterday*, *already*, *since 2020*, *at 5 PM*...) или грамматическую формулу глагола.

### 4. 📊 Оценка и разбор после каждого упражнения
- Оценка по шкале **от 1 до 10** с цветовым бейджем и анимацией конфетти при 10/10.
- **Что получилось отлично**: похвала правильным грамматическим решениям и структуре.
- **Что нужно улучшить**: подробный разбор неточностей (пропущенный вспомогательный глагол, согласование с 3-м лицом, неправильное окончание или форма неправильного глагола).
- **Грамматический разбор**: объяснение правила времени простым языком.
- **Эталонный ответ**: возможность скопировать и прослушать правильное произношение.

### 5. ✨ Дополнительные функции
- **4 режима тренировки**:
  1. *Раскрыть скобки* (Fill in the blank)
  2. *Перевод RU → EN* (Translation)
  3. *Трансформация предложения* (Sentence Transformation)
  4. *Выбор варианта* (Multiple Choice Quiz)
- **3 уровня сложности**: Базовый (A1-A2), Средний (B1-B2), Продвинутый (C1-C2).
- **Озвучка и речь (Text-to-Speech)**: Прослушивание любого предложения с регулировкой скорости произношения (0.6x – 1.3x).
- **Голосовой ввод (Speech Recognition)**: Возможность надиктовать свой ответ по-английски голосом в микрофон!
- **Интерактивный справочник всех 12 времен**: Полноценный справочник с формулами (+, -, ?), сигнальными словами, правилами и озвученными примерами.
- **Банк ошибок**: Автоматически сохраняет задания с оценкой ниже 8/10, чтобы вы могли вернуться и прорешать их повторно.
- **Геймификация**: Ударный режим (Streak) по дням, очки опыта (XP), уровни прогресса и звуковые эффекты (Web Audio API).

---

## 🛠 Стек технологий

- **Фреймворк:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Сборщик:** [Vite](https://vitejs.dev/)
- **Стилизация:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Иконки:** [Lucide React](https://lucide.dev/)
- **Анимации & Эффекты:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti), Web Audio API, Web Speech API

---

## 🚀 Быстрый старт

### Требования
- Установленный **Node.js** (версии 18+).

### Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/ВАШ_ЛОГИН/english-trainer.git
cd english-trainer
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите локальный сервер разработки:
```bash
npm run dev
```

4. Откройте в браузере ссылку (обычно `http://localhost:5173`).

---

## 🔑 Как подключить бесплатные ИИ-модели и запустить DeepSeek оффлайн

1. Нажмите иконку **⚙️ (Настройки)** в шапке приложения.
2. Выберите провайдера:
   - **Ollama Local AI (100% Оффлайн DeepSeek)**:
     - Установите [Ollama](https://ollama.com)
     - В терминале выполните: `ollama run deepseek-r1` (или `ollama run deepseek-r1:1.5b` для слабых ПК)
     - Работает без интернета и без API ключей!
   - **DeepSeek Official API**: Введите ключ с [platform.deepseek.com](https://platform.deepseek.com/api_keys) для моделей DeepSeek-V3 и DeepSeek-R1.
   - **OpenRouter Free**: Получите бесплатный ключ на [openrouter.ai/keys](https://openrouter.ai/keys) и выберите модель `deepseek/deepseek-r1:free`.
   - **Groq Cloud Free**: Создайте бесплатный ключ на [console.groq.com/keys](https://console.groq.com/keys) для мгновенных ответов на базе Llama 3.3 70B.
   - **Google Gemini**: Получите бесплатный ключ в [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) для модели `gemini-2.0-flash`.
   - **Встроенный Smart AI**: Никаких ключей не нужно, работает сразу с алгоритмической защитой от повторений!
3. Нажмите **«Проверить подключение»**, затем **«Сохранить настройки»**.
