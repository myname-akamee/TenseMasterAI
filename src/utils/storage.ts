import { UserSettings, UserStats, Exercise } from '../types';
import { DEFAULT_TENSES } from '../data/tenses';

const SETTINGS_KEY = 'eng_trainer_settings_v1';
const STATS_KEY = 'eng_trainer_stats_v1';

export const INITIAL_SETTINGS: UserSettings = {
  provider: 'builtin',
  openRouterApiKey: '',
  openRouterModel: 'deepseek/deepseek-r1:free',
  groqApiKey: '',
  groqModel: 'llama-3.3-70b-versatile',
  geminiApiKey: '',
  geminiModel: 'gemini-2.0-flash',
  ollamaEndpoint: 'http://localhost:11434/v1',
  ollamaModel: 'deepseek-r1',
  deepseekApiKey: '',
  deepseekModel: 'deepseek-chat',
  selectedTenses: DEFAULT_TENSES,
  mode: 'fill_blank',
  difficulty: 'intermediate',
  autoSpeak: true,
  voiceRate: 0.9,
};

export const INITIAL_STATS: UserStats = {
  streak: 1,
  lastTrainedDate: new Date().toISOString().split('T')[0],
  totalAnswered: 0,
  totalCorrect: 0,
  xp: 0,
  mistakeBank: [],
};

export function loadSettings(): UserSettings {
  if (typeof window === 'undefined') return INITIAL_SETTINGS;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return INITIAL_SETTINGS;
    return { ...INITIAL_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return INITIAL_SETTINGS;
  }
}

export function saveSettings(settings: UserSettings): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.error('Failed to save settings to localStorage', err);
  }
}

export function loadStats(): UserStats {
  if (typeof window === 'undefined') return INITIAL_STATS;
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return INITIAL_STATS;
    const stats: UserStats = JSON.parse(raw);

    // Check streak
    const today = new Date().toISOString().split('T')[0];
    const lastDate = stats.lastTrainedDate;
    if (lastDate && lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (lastDate !== yesterday) {
        // Streak broken
        stats.streak = 1;
      }
    }
    return { ...INITIAL_STATS, ...stats };
  } catch {
    return INITIAL_STATS;
  }
}

export function saveStats(stats: UserStats): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Failed to save stats to localStorage', err);
  }
}

export function updateStatsOnAnswer(
  currentStats: UserStats,
  isCorrect: boolean,
  score: number,
  exercise: Exercise
): UserStats {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = currentStats.lastTrainedDate;

  let newStreak = currentStats.streak;
  if (lastDate !== today) {
    newStreak = currentStats.streak + 1;
  }

  const earnedXp = Math.round(score * 10);
  const newXp = currentStats.xp + earnedXp;
  const newTotalAnswered = currentStats.totalAnswered + 1;
  const newTotalCorrect = currentStats.totalCorrect + (isCorrect ? 1 : 0);

  // Manage mistake bank
  let updatedMistakes = [...currentStats.mistakeBank];
  if (!isCorrect || score < 8) {
    // Add to bank if not already present
    if (!updatedMistakes.some((m) => m.sentenceEn === exercise.sentenceEn)) {
      updatedMistakes.unshift(exercise);
      if (updatedMistakes.length > 50) {
        updatedMistakes = updatedMistakes.slice(0, 50);
      }
    }
  } else {
    // If answered correctly, remove from mistake bank if it was there
    updatedMistakes = updatedMistakes.filter((m) => m.sentenceEn !== exercise.sentenceEn);
  }

  const updated: UserStats = {
    streak: newStreak,
    lastTrainedDate: today,
    totalAnswered: newTotalAnswered,
    totalCorrect: newTotalCorrect,
    xp: newXp,
    mistakeBank: updatedMistakes,
  };

  saveStats(updated);
  return updated;
}
