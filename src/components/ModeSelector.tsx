import React from 'react';
import {
  PenTool,
  Languages,
  Repeat,
  CheckCircle2,
  Sliders,
} from 'lucide-react';
import { ExerciseMode, DifficultyLevel } from '../types';

interface ModeSelectorProps {
  currentMode: ExerciseMode;
  currentDifficulty: DifficultyLevel;
  onModeChange: (mode: ExerciseMode) => void;
  onDifficultyChange: (difficulty: DifficultyLevel) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  currentMode,
  currentDifficulty,
  onModeChange,
  onDifficultyChange,
}) => {
  const modes: { id: ExerciseMode; labelRu: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'fill_blank',
      labelRu: 'Раскрыть скобки',
      icon: <PenTool className="w-3.5 h-3.5" />,
      desc: 'Поставить нужную форму глагола в пропуск',
    },
    {
      id: 'translate',
      labelRu: 'Перевод RU → EN',
      icon: <Languages className="w-3.5 h-3.5" />,
      desc: 'Перевести предложение с русского на английский',
    },
    {
      id: 'transform',
      labelRu: 'Трансформация',
      icon: <Repeat className="w-3.5 h-3.5" />,
      desc: 'Переделать предложение в требуемое время',
    },
    {
      id: 'choice',
      labelRu: 'Выбор варианта',
      icon: <CheckCircle2 className="w-3.5 h-3.5" />,
      desc: 'Выбрать правильный ответ из 4 предложенных',
    },
  ];

  const difficulties: { id: DifficultyLevel; labelRu: string; level: string; color: string }[] = [
    { id: 'beginner', labelRu: 'Базовый', level: 'A1 - A2', color: 'emerald' },
    { id: 'intermediate', labelRu: 'Средний', level: 'B1 - B2', color: 'amber' },
    { id: 'advanced', labelRu: 'Продвинутый', level: 'C1 - C2', color: 'rose' },
  ];

  return (
    <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/50 border border-slate-800/80 rounded-xl p-3 text-xs">
      {/* Modes */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
        <span className="text-slate-400 font-medium whitespace-nowrap mr-1 hidden lg:inline">
          Режим:
        </span>
        {modes.map((m) => {
          const isActive = currentMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onModeChange(m.id)}
              title={m.desc}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50'
              }`}
            >
              {m.icon}
              <span>{m.labelRu}</span>
            </button>
          );
        })}
      </div>

      {/* Difficulty */}
      <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
        <span className="text-slate-400 font-medium whitespace-nowrap flex items-center gap-1">
          <Sliders className="w-3 h-3 text-slate-400" />
          <span className="hidden lg:inline">Сложность:</span>
        </span>
        <div className="flex items-center bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
          {difficulties.map((d) => {
            const isActive = currentDifficulty === d.id;
            return (
              <button
                key={d.id}
                onClick={() => onDifficultyChange(d.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? d.color === 'emerald'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : d.color === 'amber'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {d.labelRu} <span className="opacity-70 font-normal">({d.level})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
