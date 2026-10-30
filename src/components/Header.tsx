import React from 'react';
import {
  Sparkles,
  Flame,
  Award,
  BookOpen,
  Settings as SettingsIcon,
  AlertCircle,
  Cpu,
} from 'lucide-react';
import { UserStats, UserSettings } from '../types';

interface HeaderProps {
  stats: UserStats;
  settings: UserSettings;
  onOpenSettings: () => void;
  onOpenHandbook: () => void;
  onOpenMistakes: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  stats,
  settings,
  onOpenSettings,
  onOpenHandbook,
  onOpenMistakes,
}) => {
  const getProviderBadge = () => {
    switch (settings.provider) {
      case 'ollama':
        return {
          label: `Ollama ${settings.ollamaModel || 'DeepSeek'} (Оффлайн)`,
          color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
        };
      case 'deepseek':
        return {
          label: `DeepSeek AI (${settings.deepseekModel || 'V3'})`,
          color: 'from-sky-500/20 to-indigo-500/20 text-sky-300 border-sky-500/30',
        };
      case 'openrouter':
        return {
          label: 'OpenRouter Free AI',
          color: 'from-violet-500/20 to-purple-500/20 text-purple-300 border-purple-500/30',
        };
      case 'groq':
        return {
          label: 'Groq Cloud Free AI',
          color: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30',
        };
      case 'gemini':
        return {
          label: 'Google Gemini Free AI',
          color: 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
        };
      default:
        return {
          label: 'Smart AI Engine (Оффлайн)',
          color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
        };
    }
  };

  const provider = getProviderBadge();

  return (
    <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-30 px-4 py-3 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo and Provider Badge */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-white m-0 p-0 flex items-center gap-1.5">
                  TenseMaster <span className="text-indigo-400 font-extrabold">AI</span>
                </h1>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  v2.0
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Умный ИИ-тренажер времен английского языка
              </p>
            </div>
          </div>

          {/* AI Model indicator */}
          <button
            onClick={onOpenSettings}
            title="Нажми для смены модели или настроек"
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border bg-gradient-to-r transition-all hover:scale-105 cursor-pointer ${provider.color}`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="font-medium">{provider.label}</span>
          </button>
        </div>

        {/* Gamification Stats & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-end overflow-x-auto pb-1 md:pb-0">
          {/* Streak */}
          <div
            title={`Твой ударный режим: ${stats.streak} дн.`}
            className="flex items-center gap-1.5 bg-slate-800/80 border border-amber-500/20 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-amber-400 shadow-sm"
          >
            <Flame className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse" />
            <span>{stats.streak} дн.</span>
          </div>

          {/* XP */}
          <div
            title={`Заработано опыта: ${stats.xp} XP`}
            className="flex items-center gap-1.5 bg-slate-800/80 border border-indigo-500/20 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 shadow-sm"
          >
            <Award className="w-4 h-4 text-indigo-400" />
            <span>{stats.xp} XP</span>
          </div>

          {/* Mistakes Bank Button */}
          {stats.mistakeBank.length > 0 && (
            <button
              onClick={onOpenMistakes}
              className="flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/30 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-rose-300 hover:bg-rose-500/20 transition-all cursor-pointer"
              title="Открыть банк ошибок для работы над ними"
            >
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>Ошибки ({stats.mistakeBank.length})</span>
            </button>
          )}

          {/* Handbook Modal Trigger */}
          <button
            onClick={onOpenHandbook}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 transition-all shadow-sm cursor-pointer"
            title="Открыть справочник всех 12 времен с формулами и примерами"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">Справочник</span>
          </button>

          {/* Settings Trigger */}
          <button
            onClick={onOpenSettings}
            className="p-1.5 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Настройки ИИ и голоса"
          >
            <SettingsIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
