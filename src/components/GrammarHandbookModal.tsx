import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Volume2,
  Search,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { ALL_TENSES } from '../data/tenses';
import { TenseCategory, TenseInfo } from '../types';
import { speakSentence } from '../utils/speech';

interface GrammarHandbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  voiceRate: number;
}

export const GrammarHandbookModal: React.FC<GrammarHandbookModalProps> = ({
  isOpen,
  onClose,
  voiceRate,
}) => {
  const [activeCategory, setActiveCategory] = useState<TenseCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTense, setSelectedTense] = useState<TenseInfo>(ALL_TENSES[0]);

  if (!isOpen) return null;

  const filteredTenses = ALL_TENSES.filter((t) => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchesSearch =
      t.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.nameRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.markers.some((m: string) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSpeak = (text: string) => {
    speakSentence(text, voiceRate);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white m-0 p-0 flex items-center gap-2">
                Справочник 12 времен английского языка
              </h2>
              <p className="text-xs text-slate-400 hidden sm:block">
                Формулы, маркеры времени, правила и озвученные примеры
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="px-5 py-3 border-b border-slate-800 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Все времена ({ALL_TENSES.length})
            </button>
            <button
              onClick={() => setActiveCategory('present')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'present'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Present (4)
            </button>
            <button
              onClick={() => setActiveCategory('past')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'past'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Past (4)
            </button>
            <button
              onClick={() => setActiveCategory('future')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'future'
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Future (4)
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию или маркеру..."
              className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Main Handbook Content Area: 2 Columns */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Tense List */}
          <div className="md:col-span-4 border-r border-slate-800 overflow-y-auto max-h-[35vh] md:max-h-none p-3 space-y-1.5 bg-slate-950/40">
            {filteredTenses.map((tense) => {
              const isSelected = selectedTense.id === tense.id;
              return (
                <button
                  key={tense.id}
                  onClick={() => setSelectedTense(tense)}
                  className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{tense.nameEn}</span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      {tense.category}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{tense.nameRu}</div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tense Deep Dive */}
          <div className="md:col-span-8 overflow-y-auto p-5 sm:p-6 space-y-5">
            {/* Header of selected tense */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white m-0 p-0 flex items-center gap-2">
                    {selectedTense.nameEn}
                    <span className="text-xs font-normal text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      {selectedTense.nameRu}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {selectedTense.shortDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Formulas Box */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Формулы образования:
              </span>
              <div className="grid grid-cols-1 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold w-6">+</span>
                  <span className="text-slate-400 font-medium">Утверждение:</span>
                  <span className="font-mono text-white text-right ml-auto">
                    {selectedTense.formula.affirmative}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-rose-400 font-bold w-6">—</span>
                  <span className="text-slate-400 font-medium">Отрицание:</span>
                  <span className="font-mono text-white text-right ml-auto">
                    {selectedTense.formula.negative}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-sky-400 font-bold w-6">?</span>
                  <span className="text-slate-400 font-medium">Вопрос:</span>
                  <span className="font-mono text-white text-right ml-auto">
                    {selectedTense.formula.question}
                  </span>
                </div>
              </div>
            </div>

            {/* Markers Chips */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Слова-маркеры (Signal Words):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedTense.markers.map((marker: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium"
                  >
                    {marker}
                  </span>
                ))}
              </div>
            </div>

            {/* Rules list */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Ключевые правила:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedTense.rules.map((rule: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Examples with Audio */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Живые примеры с озвучкой:
              </span>
              <div className="space-y-2">
                {selectedTense.examples.map((ex: { en: string; ru: string }, idx: number) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{ex.en}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{ex.ru}</div>
                    </div>
                    <button
                      onClick={() => handleSpeak(ex.en)}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                      title="Прослушать произношение"
                    >
                      <Volume2 className="w-4 h-4 text-indigo-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
