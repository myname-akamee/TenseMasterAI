import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Volume2,
  Copy,
  Check,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { EvaluationResult, Exercise, UserSettings } from '../types';
import { speakSentence, soundFx } from '../utils/speech';

interface EvaluationCardProps {
  evaluation: EvaluationResult;
  exercise: Exercise;
  settings: UserSettings;
  onNext: () => void;
}

export const EvaluationCard: React.FC<EvaluationCardProps> = ({
  evaluation,
  exercise,
  settings,
  onNext,
}) => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Play sound and trigger confetti on mounting
  useEffect(() => {
    if (evaluation.score >= 8) {
      soundFx.playSuccess();
      if (evaluation.score === 10) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#6366f1', '#a855f7', '#ec4899', '#10b981'],
        });
      }
    } else {
      soundFx.playMistake();
    }

    // Auto-listen to correct sentence if autoSpeak enabled
    if (settings.autoSpeak) {
      speakSentence(evaluation.correctSentence, settings.voiceRate);
    }

    // Global Enter key listener to quickly proceed to next exercise
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [evaluation]);

  const handleCopy = () => {
    navigator.clipboard.writeText(evaluation.correctSentence);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    setIsSpeaking(true);
    speakSentence(evaluation.correctSentence, settings.voiceRate, () => setIsSpeaking(false));
  };

  const getScoreBadge = () => {
    if (evaluation.score >= 9) {
      return {
        bg: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300',
        icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
        gradeText: 'Отлично! 🎉',
        accentColor: 'text-emerald-400',
      };
    }
    if (evaluation.score >= 7) {
      return {
        bg: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300',
        icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
        gradeText: 'Хорошо! 👍',
        accentColor: 'text-amber-400',
      };
    }
    return {
      bg: 'from-rose-500/20 to-red-500/20 border-rose-500/40 text-rose-300',
      icon: <XCircle className="w-6 h-6 text-rose-400" />,
      gradeText: 'Нужно повторить! 💡',
      accentColor: 'text-rose-400',
    };
  };

  const scoreBadge = getScoreBadge();

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-7 backdrop-blur-xl shadow-2xl space-y-6 animate-fadeIn">
      {/* Top Score Banner */}
      <div
        className={`p-4 sm:p-5 rounded-2xl border bg-gradient-to-r ${scoreBadge.bg} flex flex-col sm:flex-row items-center justify-between gap-4`}
      >
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="p-2.5 rounded-xl bg-slate-950/40 border border-white/10 shrink-0">
            {scoreBadge.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h3 className="text-lg font-bold text-white m-0 p-0">
                {evaluation.headline}
              </h3>
              <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-950/50 ${scoreBadge.accentColor}`}>
                {scoreBadge.gradeText}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Время: <strong className="text-white">{exercise.tenseName}</strong>
            </p>
          </div>
        </div>

        {/* Score Counter Gauge */}
        <div className="flex items-center gap-2 bg-slate-950/60 px-4 py-2 rounded-xl border border-white/10 shrink-0">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            Оценка:
          </span>
          <span className={`text-2xl font-black ${scoreBadge.accentColor}`}>
            {evaluation.score}
          </span>
          <span className="text-slate-500 text-sm font-bold">/ 10</span>
        </div>
      </div>

      {/* Answer Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* User's Answer */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            Твой ответ:
          </span>
          <p
            className={`text-base font-medium font-sans ${
              evaluation.score >= 8 ? 'text-emerald-300' : 'text-rose-300'
            }`}
          >
            {evaluation.userAnswer || '(пусто)'}
          </p>
        </div>

        {/* Correct Answer */}
        <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 space-y-1.5 relative group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              Правильный вариант:
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={handleSpeak}
                disabled={isSpeaking}
                className="p-1 rounded-md text-indigo-300 hover:text-white hover:bg-indigo-500/20 transition-colors cursor-pointer"
                title="Прослушать произношение"
              >
                <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-indigo-400 animate-pulse' : ''}`} />
              </button>
              <button
                onClick={handleCopy}
                className="p-1 rounded-md text-indigo-300 hover:text-white hover:bg-indigo-500/20 transition-colors cursor-pointer"
                title="Скопировать"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <p className="text-base font-semibold text-white font-sans">
            {evaluation.correctSentence}
          </p>
        </div>
      </div>

      {/* Structured Feedback Sections */}
      <div className="space-y-3">
        {/* Praise (Что получилось хорошо) */}
        {evaluation.praise && (
          <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs sm:text-sm text-emerald-200 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-emerald-300 font-semibold block text-xs uppercase tracking-wider mb-0.5">
                Что получилось отлично:
              </strong>
              <p className="leading-relaxed">{evaluation.praise}</p>
            </div>
          </div>
        )}

        {/* Improvements (Что нужно улучшить) */}
        {evaluation.improvements && (
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/25 text-xs sm:text-sm text-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold block text-xs uppercase tracking-wider mb-0.5">
                Что нужно улучшить:
              </strong>
              <p className="leading-relaxed">{evaluation.improvements}</p>
            </div>
          </div>
        )}

        {/* Grammar Tip / Rule */}
        {evaluation.grammarTip && (
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
            <BookOpen className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-indigo-300 font-semibold block text-xs uppercase tracking-wider mb-0.5">
                Грамматический разбор:
              </strong>
              <p className="leading-relaxed">{evaluation.grammarTip}</p>
            </div>
          </div>
        )}
      </div>

      {/* Next Exercise Button */}
      <div className="pt-2 flex items-center justify-end">
        <button
          onClick={onNext}
          className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] cursor-pointer"
        >
          <span>Следующее упражнение</span>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded font-mono font-normal">
            Enter ↵
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
