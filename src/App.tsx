import React, { useState, useEffect, useCallback } from 'react';
import { Loader2, RefreshCw, AlertCircle } from 'lucide-react';
import {
  Exercise,
  EvaluationResult,
  UserSettings,
  UserStats,
  TenseId,
  ExerciseMode,
  DifficultyLevel,
} from './types';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { TenseSelector } from './components/TenseSelector';
import { ModeSelector } from './components/ModeSelector';
import { ExerciseCard } from './components/ExerciseCard';
import { EvaluationCard } from './components/EvaluationCard';
import { GrammarHandbookModal } from './components/GrammarHandbookModal';
import { MistakesBankModal } from './components/MistakesBankModal';
import { SettingsModal } from './components/SettingsModal';
import { generateExercise, evaluateAnswer } from './services/aiService';
import {
  loadSettings,
  saveSettings,
  loadStats,
  saveStats,
  updateStatsOnAnswer,
} from './utils/storage';

export function App() {
  // Application State
  const [settings, setSettings] = useState<UserSettings>(() => loadSettings());
  const [stats, setStats] = useState<UserStats>(() => loadStats());

  // Exercise & Evaluation state
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Anti-repetition session memory
  const recentSentencesRef = React.useRef<string[]>([]);

  // Modals state
  const [isHandbookOpen, setIsHandbookOpen] = useState(false);
  const [isMistakesOpen, setIsMistakesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Load new exercise
  const loadNextExercise = useCallback(
    async (customSettings?: UserSettings) => {
      const activeSettings = customSettings || settings;
      setIsLoading(true);
      setErrorMessage(null);
      setEvaluation(null);

      try {
        const nextEx = await generateExercise(
          activeSettings,
          undefined,
          recentSentencesRef.current
        );
        if (nextEx && nextEx.targetSentence) {
          recentSentencesRef.current = [
            ...recentSentencesRef.current.slice(-30),
            nextEx.targetSentence,
          ];
        }
        setCurrentExercise(nextEx);
      } catch (err: any) {
        console.error('Failed to generate exercise:', err);
        setErrorMessage(
          'Не удалось сгенерировать задание. Проверьте настройки или подключение к сети.'
        );
      } finally {
        setIsLoading(false);
      }
    },
    [settings]
  );

  // Initial load
  useEffect(() => {
    loadNextExercise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update Settings
  const handleUpdateSettings = (newSettings: UserSettings) => {
    const hasFilterChanged =
      JSON.stringify(newSettings.selectedTenses) !== JSON.stringify(settings.selectedTenses) ||
      newSettings.mode !== settings.mode ||
      newSettings.difficulty !== settings.difficulty ||
      newSettings.provider !== settings.provider ||
      newSettings.ollamaModel !== settings.ollamaModel ||
      newSettings.ollamaEndpoint !== settings.ollamaEndpoint ||
      newSettings.deepseekModel !== settings.deepseekModel ||
      newSettings.openRouterModel !== settings.openRouterModel;

    setSettings(newSettings);
    saveSettings(newSettings);

    // If modes, tenses, difficulty or model changed, reload exercise
    if (hasFilterChanged) {
      loadNextExercise(newSettings);
    }
  };

  // Change selected tenses
  const handleTensesChange = (tenses: TenseId[]) => {
    const updated = { ...settings, selectedTenses: tenses };
    handleUpdateSettings(updated);
  };

  // Change mode
  const handleModeChange = (mode: ExerciseMode) => {
    const updated = { ...settings, mode };
    handleUpdateSettings(updated);
  };

  // Change difficulty
  const handleDifficultyChange = (difficulty: DifficultyLevel) => {
    const updated = { ...settings, difficulty };
    handleUpdateSettings(updated);
  };

  // Submit answer
  const handleSubmitAnswer = async (userAnswer: string) => {
    if (!currentExercise || isEvaluating) return;
    setIsEvaluating(true);

    try {
      const result = await evaluateAnswer(currentExercise, userAnswer, settings);
      setEvaluation(result);

      // Update user statistics
      const updatedStats = updateStatsOnAnswer(
        stats,
        result.isCorrect,
        result.score,
        currentExercise
      );
      setStats(updatedStats);
    } catch (err) {
      console.error('Failed to evaluate answer:', err);
    } finally {
      setIsEvaluating(false);
    }
  };

  // Retrain on a mistake from the bank
  const handleSelectMistakeExercise = (exercise: Exercise) => {
    setCurrentExercise(exercise);
    setEvaluation(null);
    setIsMistakesOpen(false);
  };

  // Clear all mistakes
  const handleClearMistakes = () => {
    const updated: UserStats = { ...stats, mistakeBank: [] };
    setStats(updated);
    saveStats(updated);
  };

  // Remove single mistake
  const handleRemoveMistake = (exerciseId: string) => {
    const updated: UserStats = {
      ...stats,
      mistakeBank: stats.mistakeBank.filter((m) => m.id !== exerciseId),
    };
    setStats(updated);
    saveStats(updated);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden">
      {/* Subtle modern ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-[15%] w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px]" />
      </div>

      {/* Top Header */}
      <Header
        stats={stats}
        settings={settings}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHandbook={() => setIsHandbookOpen(true)}
        onOpenMistakes={() => setIsMistakesOpen(true)}
      />

      {/* Main Content Workspace */}
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 py-5 sm:py-7 flex flex-col gap-4">
        {/* Compact Level & XP Progress Bar */}
        <StatsBar stats={stats} />

        {/* Tense Selector (12 English tenses filter) */}
        <TenseSelector
          selectedTenses={settings.selectedTenses}
          onTensesChange={handleTensesChange}
        />

        {/* Mode & Difficulty Selector */}
        <ModeSelector
          currentMode={settings.mode}
          currentDifficulty={settings.difficulty}
          onModeChange={handleModeChange}
          onDifficultyChange={handleDifficultyChange}
        />

        {/* Exercise Card or Evaluation Result */}
        <div className="w-full flex-1 flex flex-col justify-center items-center my-1">
          {isLoading ? (
            <div className="w-full min-h-[340px] rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center animate-fadeIn shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
              </div>
              <h3 className="text-base font-semibold text-slate-200 mb-1">
                Генерируем грамматическое упражнение...
              </h3>
              <p className="text-xs text-slate-400 max-w-sm">
                ИИ подбирает контекстное задание под выбранные времена и уровень
              </p>
            </div>
          ) : errorMessage ? (
            <div className="w-full min-h-[260px] rounded-2xl bg-rose-950/20 border border-rose-800/40 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-base font-semibold text-rose-200 mb-1">
                Ошибка загрузки
              </h3>
              <p className="text-xs text-rose-300/80 mb-5 max-w-md">
                {errorMessage}
              </p>
              <button
                onClick={() => loadNextExercise()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-all shadow-md cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Попробовать снова</span>
              </button>
            </div>
          ) : evaluation && currentExercise ? (
            <EvaluationCard
              evaluation={evaluation}
              exercise={currentExercise}
              settings={settings}
              onNext={() => loadNextExercise()}
            />
          ) : currentExercise ? (
            <ExerciseCard
              exercise={currentExercise}
              settings={settings}
              onSubmitAnswer={handleSubmitAnswer}
              isLoading={isEvaluating}
              onSkip={() => loadNextExercise()}
            />
          ) : null}
        </div>
      </main>

      {/* Minimalist Footer with Keyboard shortcuts */}
      <footer className="relative z-10 py-3 px-4 border-t border-slate-900 text-center text-[11px] text-slate-500 flex flex-wrap items-center justify-center gap-4">
        <span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-400 mr-1">
            Enter
          </kbd>
          Отправить / Далее
        </span>
        <span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-400 mr-1">
            Esc
          </kbd>
          Пропустить
        </span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="hidden sm:inline text-slate-400 font-medium">
          TenseMaster AI — умный тренажёр английских времен
        </span>
      </footer>

      {/* Grammar Handbook Modal */}
      <GrammarHandbookModal
        isOpen={isHandbookOpen}
        onClose={() => setIsHandbookOpen(false)}
        voiceRate={settings.voiceRate}
      />

      {/* Mistakes Bank Modal */}
      <MistakesBankModal
        isOpen={isMistakesOpen}
        onClose={() => setIsMistakesOpen(false)}
        mistakes={stats.mistakeBank}
        onSelectExercise={handleSelectMistakeExercise}
        onClearMistakes={handleClearMistakes}
        onRemoveMistake={handleRemoveMistake}
      />

      {/* AI & Voice Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={handleUpdateSettings}
      />
    </div>
  );
}

export default App;
