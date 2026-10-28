import React from 'react';
import {
  X,
  AlertCircle,
  Play,
  Trash2,
  CheckCircle,
} from 'lucide-react';
import { Exercise } from '../types';

interface MistakesBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  mistakes: Exercise[];
  onSelectExercise: (exercise: Exercise) => void;
  onClearMistakes: () => void;
  onRemoveMistake: (exerciseId: string) => void;
}

export const MistakesBankModal: React.FC<MistakesBankModalProps> = ({
  isOpen,
  onClose,
  mistakes,
  onSelectExercise,
  onClearMistakes,
  onRemoveMistake,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white m-0 p-0 flex items-center gap-2">
                Банк ошибок ({mistakes.length})
              </h2>
              <p className="text-xs text-slate-400 hidden sm:block">
                Упражнения, вызвавшие затруднения. Повтори их, чтобы закрепить материал!
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {mistakes.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white m-0">
                Твой банк ошибок пуст!
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Все решенные упражнения были выполнены отлично. При допущении ошибок они автоматически появятся здесь для работы над ними.
              </p>
            </div>
          ) : (
            mistakes.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 font-semibold border border-rose-500/30">
                    {item.tenseName}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onRemoveMistake(item.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      title="Удалить из банка"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectExercise(item);
                        onClose();
                      }}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Пройти сейчас</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-medium">
                    {item.promptRu}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {item.sentenceEn}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mt-1 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900/30">
                    Эталон: {item.targetSentence}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {mistakes.length > 0 && (
          <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Всего сохраненных заданий: <strong>{mistakes.length}</strong>
            </span>
            <button
              onClick={onClearMistakes}
              className="text-xs text-rose-400 hover:text-rose-300 font-medium transition-colors cursor-pointer"
            >
              Очистить весь банк
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
