import React from 'react';
import { Target, CheckCircle2, TrendingUp } from 'lucide-react';
import { UserStats } from '../types';

interface StatsBarProps {
  stats: UserStats;
}

export const StatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  const accuracy =
    stats.totalAnswered > 0
      ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
      : 100;

  // Level computation: 100 XP per level
  const currentLevel = Math.floor(stats.xp / 100) + 1;
  const xpInCurrentLevel = stats.xp % 100;

  return (
    <div className="w-full bg-slate-900/40 border border-slate-800/60 rounded-xl px-4 py-2.5 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-4">
        {/* Level & XP Progress */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
            Уровень {currentLevel}
          </span>
          <div className="w-24 bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${xpInCurrentLevel}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            {xpInCurrentLevel}/100 XP
          </span>
        </div>

        {/* Total completed */}
        <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
          <Target className="w-3.5 h-3.5 text-slate-500" />
          <span>Пройдено заданий:</span>
          <strong className="text-white">{stats.totalAnswered}</strong>
        </div>

        {/* Accuracy */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Точность:</span>
          <strong
            className={`${
              accuracy >= 80
                ? 'text-emerald-400'
                : accuracy >= 60
                ? 'text-amber-400'
                : 'text-rose-400'
            }`}
          >
            {accuracy}%
          </strong>
        </div>
      </div>

      <div className="text-[11px] text-slate-400 hidden md:flex items-center gap-1">
        <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
        <span>Каждый правильный ответ развивает языковую интуицию</span>
      </div>
    </div>
  );
};
