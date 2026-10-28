import React, { useState, useEffect, useRef } from 'react';
import {
  Lightbulb,
  Volume2,
  Mic,
  MicOff,
  Send,
  Loader2,
  Sparkles,
  HelpCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Exercise, UserSettings } from '../types';
import {
  speakSentence,
  createSpeechRecognizer,
  isSpeechRecognitionSupported,
  soundFx,
} from '../utils/speech';
import { getExerciseHint } from '../services/aiService';

interface ExerciseCardProps {
  exercise: Exercise;
  settings: UserSettings;
  onSubmitAnswer: (answer: string) => void;
  isLoading: boolean;
  onSkip: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  settings,
  onSubmitAnswer,
  isLoading,
  onSkip,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [hintOpen, setHintOpen] = useState(false);
  const [hintText, setHintText] = useState(exercise.hint);
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognitionError, setRecognitionError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const recognizerRef = useRef<any>(null);

  // Focus input on exercise change
  useEffect(() => {
    setUserAnswer('');
    setHintOpen(false);
    setHintText(exercise.hint);
    setIsListening(false);
    setRecognitionError(null);

    // Auto focus
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    // Auto speak if enabled in settings (and not translation mode)
    if (settings.autoSpeak && exercise.mode !== 'translate') {
      const sentenceToRead = exercise.sentenceEn.replace(/_{2,}/g, 'blank');
      speakSentence(sentenceToRead, settings.voiceRate);
    }
  }, [exercise.id, settings.autoSpeak, settings.voiceRate]);

  // Clean up speech recognition on unmount
  useEffect(() => {
    return () => {
      if (recognizerRef.current) {
        recognizerRef.current.stop();
      }
    };
  }, []);

  const handleSpeak = (text: string) => {
    setIsSpeaking(true);
    speakSentence(text, settings.voiceRate, () => setIsSpeaking(false));
  };

  const handleToggleHint = async () => {
    soundFx.playHint();
    if (!hintOpen) {
      setHintOpen(true);
      // Fetch dynamic AI hint if enabled
      if (settings.provider !== 'builtin') {
        setIsLoadingHint(true);
        try {
          const aiHint = await getExerciseHint(exercise, settings);
          setHintText(aiHint);
        } catch (e) {
          setHintText(exercise.hint);
        } finally {
          setIsLoadingHint(false);
        }
      }
    } else {
      setHintOpen(false);
    }
  };

  const handleVoiceInput = () => {
    if (!isSpeechRecognitionSupported()) {
      setRecognitionError('Голосовой ввод не поддерживается вашим браузером.');
      return;
    }

    if (isListening) {
      recognizerRef.current?.stop();
      setIsListening(false);
      return;
    }

    setRecognitionError(null);
    const recognizer = createSpeechRecognizer(
      (transcript) => {
        setUserAnswer((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      },
      (err) => {
        console.warn('Speech recognition error:', err);
        setRecognitionError('Не удалось распознать речь. Попробуйте еще раз.');
        setIsListening(false);
      },
      () => {
        setIsListening(false);
      }
    );

    if (recognizer) {
      recognizerRef.current = recognizer;
      try {
        recognizer.start();
        setIsListening(true);
      } catch (e) {
        setIsListening(false);
      }
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userAnswer.trim() || isLoading) return;
    onSubmitAnswer(userAnswer.trim());
  };

  const handleOptionSelect = (option: string) => {
    setUserAnswer(option);
    onSubmitAnswer(option);
  };

  // Format blank rendering for visual punch
  const renderSentenceWithBlank = () => {
    if (exercise.mode === 'translate') {
      return (
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl font-medium text-slate-100 tracking-wide leading-relaxed">
            {exercise.sentenceEn}
          </p>
          <div className="text-xs text-indigo-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Переведи всё предложение на английский язык
          </div>
        </div>
      );
    }

    // Split by underscores
    const parts = exercise.sentenceEn.split(/_{2,}/);
    if (parts.length <= 1) {
      return (
        <p className="text-xl sm:text-2xl font-medium text-slate-100 tracking-wide leading-relaxed">
          {exercise.sentenceEn}
        </p>
      );
    }

    return (
      <p className="text-xl sm:text-2xl font-medium text-slate-100 tracking-wide leading-relaxed">
        {parts[0]}
        <span className="inline-block px-3 py-0.5 mx-1.5 rounded-lg bg-indigo-500/20 border border-dashed border-indigo-400 text-indigo-300 font-mono text-lg font-bold min-w-[70px] text-center animate-pulse-subtle">
          {userAnswer || '_____'}
        </span>
        {parts[1]}
      </p>
    );
  };

  return (
    <div className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Decorative gradient blur backdrop */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Exercise Metadata Badge Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            {exercise.tenseName}
          </span>
          {exercise.baseVerb && (
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
              Глагол: <strong className="text-white">{exercise.baseVerb}</strong>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Audio Pronunciation of Prompt */}
          <button
            onClick={() => handleSpeak(exercise.sentenceEn)}
            disabled={isSpeaking}
            title="Прослушать произношение"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer flex items-center gap-1.5 text-xs"
          >
            <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-indigo-400 animate-pulse' : ''}`} />
            <span className="hidden sm:inline">Озвучить</span>
          </button>

          {/* Hint Button */}
          <button
            onClick={handleToggleHint}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              hintOpen
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/10'
                : 'bg-slate-800 hover:bg-slate-700/80 text-amber-400 hover:text-amber-300 border-slate-700'
            }`}
          >
            <Lightbulb className={`w-3.5 h-3.5 ${hintOpen ? 'fill-amber-400 text-amber-300' : ''}`} />
            <span>{hintOpen ? 'Скрыть подсказку' : 'Подсказка'}</span>
          </button>
        </div>
      </div>

      {/* Main Exercise Prompt & Sentence */}
      <div className="my-6 space-y-3">
        <div className="text-xs font-medium uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
          {exercise.promptRu}
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
          {renderSentenceWithBlank()}
        </div>
      </div>

      {/* Expandable Hint Section */}
      {hintOpen && (
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm animate-fadeIn">
          <div className="flex items-start gap-2.5">
            <div className="p-1 rounded-md bg-amber-500/20 text-amber-300 mt-0.5 shrink-0">
              <Lightbulb className="w-4 h-4 fill-amber-400" />
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-amber-300 text-xs uppercase tracking-wider">
                Подсказка к упражнению:
              </div>
              {isLoadingHint ? (
                <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  <span>ИИ генерирует персональную подсказку...</span>
                </div>
              ) : (
                <p className="text-slate-200 leading-relaxed font-sans">{hintText}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* User Answer Area */}
      {exercise.mode === 'choice' && exercise.options && exercise.options.length > 0 ? (
        // Multiple Choice Grid
        <div className="space-y-2">
          <div className="text-xs text-slate-400 font-medium mb-1">
            Выбери один правильный ответ:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {exercise.options.map((option: string, idx: number) => {
              const letter = String.fromCharCode(65 + idx); // A, B, C, D
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isLoading}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-950/60 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 text-slate-200 hover:text-white transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-slate-800 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white font-bold text-xs flex items-center justify-center transition-colors">
                      {letter}
                    </span>
                    <span className="font-medium text-sm">{option}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-indigo-400 transition-opacity" />
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        // Text Input Form
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder={
                exercise.mode === 'translate'
                  ? 'Введи перевод предложения на английский...'
                  : exercise.mode === 'transform'
                  ? 'Введи преобразованное предложение...'
                  : 'Введи правильную форму глагола или предложение...'
              }
              disabled={isLoading}
              className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-indigo-500 rounded-xl px-4 py-3.5 pr-24 text-white text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all font-sans shadow-inner"
            />

            {/* Microphone button inside input */}
            <div className="absolute right-2 flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleVoiceInput}
                title={isListening ? 'Идет запись речи... Нажми для остановки' : 'Голосовой ввод ответа на английском'}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  isListening
                    ? 'bg-rose-500 text-white animate-pulse ring-4 ring-rose-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700'
                }`}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {recognitionError && (
            <p className="text-xs text-rose-400 px-1">{recognitionError}</p>
          )}

          {/* Action Buttons: Submit / Skip */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={onSkip}
              disabled={isLoading}
              className="text-xs text-slate-400 hover:text-slate-200 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Пропустить упражнение
            </button>

            <button
              type="submit"
              disabled={!userAnswer.trim() || isLoading}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center gap-2 transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>ИИ оценивает ответ...</span>
                </>
              ) : (
                <>
                  <span>Проверить ответ</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
