import React, { useState } from 'react';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react';
import { TenseId, TenseCategory } from '../types';
import { ALL_TENSES, DEFAULT_TENSES } from '../data/tenses';

interface TenseSelectorProps {
  selectedTenses: TenseId[];
  onTensesChange: (tenses: TenseId[]) => void;
}

export const TenseSelector: React.FC<TenseSelectorProps> = ({
  selectedTenses,
  onTensesChange,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleTense = (id: TenseId) => {
    if (selectedTenses.includes(id)) {
      if (selectedTenses.length === 1) {
        // Keep at least one tense selected
        return;
      }
      onTensesChange(selectedTenses.filter((t) => t !== id));
    } else {
      onTensesChange([...selectedTenses, id]);
    }
  };

  const selectAll = () => {
    onTensesChange(ALL_TENSES.map((t) => t.id));
  };

  const selectSimple = () => {
    onTensesChange(['present_simple', 'past_simple', 'future_simple']);
  };

  const selectContinuous = () => {
    onTensesChange([
      'present_continuous',
      'past_continuous',
      'future_continuous',
    ]);
  };

  const selectPerfect = () => {
    onTensesChange([
      'present_perfect',
      'past_perfect',
      'future_perfect',
    ]);
  };

  const selectCategory = (category: TenseCategory) => {
    onTensesChange(ALL_TENSES.filter((t) => t.category === category).map((t) => t.id));
  };

  const resetToDefault = () => {
    onTensesChange(DEFAULT_TENSES);
  };

  const categories: { key: TenseCategory; labelRu: string; color: string }[] = [
    { key: 'present', labelRu: 'Present (Настоящее)', color: 'text-emerald-400 border-emerald-500/30' },
    { key: 'past', labelRu: 'Past (Прошедшее)', color: 'text-amber-400 border-amber-500/30' },
    { key: 'future', labelRu: 'Future (Будущее)', color: 'text-sky-400 border-sky-500/30' },
  ];

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-xl transition-all">
      {/* Header bar of Tense Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-semibold text-white m-0 p-0">
                Выбор времен для практики
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium border border-indigo-500/30">
                {selectedTenses.length} из {ALL_TENSES.length}
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Отметь одно или несколько времен — ИИ будет генерировать упражнения именно по ним
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 transition-colors cursor-pointer"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>{isOpen ? 'Свернуть' : 'Развернуть'}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Quick Presets Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-medium whitespace-nowrap flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-400" /> Пресеты:
            </span>
            <button
              onClick={selectAll}
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 whitespace-nowrap transition-colors cursor-pointer"
            >
              Все 12
            </button>
            <button
              onClick={selectSimple}
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 whitespace-nowrap transition-colors cursor-pointer"
            >
              Все Simple
            </button>
            <button
              onClick={selectContinuous}
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 whitespace-nowrap transition-colors cursor-pointer"
            >
              Все Continuous
            </button>
            <button
              onClick={selectPerfect}
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 whitespace-nowrap transition-colors cursor-pointer"
            >
              Все Perfect
            </button>
            <button
              onClick={() => selectCategory('present')}
              className="px-2.5 py-1 rounded-md bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/40 whitespace-nowrap transition-colors cursor-pointer"
            >
              Все Present
            </button>
            <button
              onClick={() => selectCategory('past')}
              className="px-2.5 py-1 rounded-md bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 border border-amber-800/40 whitespace-nowrap transition-colors cursor-pointer"
            >
              Все Past
            </button>
            <button
              onClick={() => selectCategory('future')}
              className="px-2.5 py-1 rounded-md bg-sky-950/40 hover:bg-sky-900/60 text-sky-300 border border-sky-800/40 whitespace-nowrap transition-colors cursor-pointer"
            >
              Все Future
            </button>
            <button
              onClick={resetToDefault}
              className="px-2 py-1 rounded-md bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/50 whitespace-nowrap flex items-center gap-1 transition-colors cursor-pointer ml-auto"
              title="Сбросить к базовому набору (Present Simple, Continuous, Past Simple, Future Simple)"
            >
              <RotateCcw className="w-3 h-3" />
              Базовые
            </button>
          </div>

          {/* Grid grouped by Category (Present, Past, Future) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {categories.map((cat) => {
              const catTenses = ALL_TENSES.filter((t) => t.category === cat.key);
              const selectedInCat = catTenses.filter((t) => selectedTenses.includes(t.id)).length;

              return (
                <div
                  key={cat.key}
                  className="bg-slate-950/50 rounded-xl p-3 border border-slate-800/70 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between px-1">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${cat.color}`}>
                      {cat.labelRu}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {selectedInCat} / {catTenses.length}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {catTenses.map((tense) => {
                      const isSelected = selectedTenses.includes(tense.id);
                      return (
                        <button
                          key={tense.id}
                          type="button"
                          onClick={() => toggleTense(tense.id)}
                          className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-start gap-2.5 cursor-pointer group ${
                            isSelected
                              ? 'bg-indigo-600/15 border-indigo-500/50 text-white shadow-sm ring-1 ring-indigo-500/20'
                              : 'bg-slate-900/40 border-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 hover:border-slate-700'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors shrink-0 ${
                              isSelected
                                ? 'bg-indigo-500 border-indigo-500 text-white'
                                : 'border-slate-700 bg-slate-800 group-hover:border-slate-600'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-semibold truncate leading-tight">
                                {tense.nameEn}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400 truncate mt-0.5">
                              {tense.nameRu}
                            </div>
                            <div className="text-[10px] text-indigo-300/80 font-mono mt-1 bg-indigo-950/40 px-1.5 py-0.5 rounded border border-indigo-900/40 truncate">
                              {tense.formula.affirmative}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
