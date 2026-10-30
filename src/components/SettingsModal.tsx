import React, { useState } from 'react';
import {
  X,
  Settings as SettingsIcon,
  Cpu,
  Key,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Volume2,
  Sparkles,
  Eye,
  EyeOff,
  Terminal,
  Copy,
  Check,
} from 'lucide-react';
import { AIProvider, UserSettings } from '../types';
import { testAIConnection } from '../services/aiService';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: UserSettings;
  onSave: (newSettings: UserSettings) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
}) => {
  const [current, setCurrent] = useState<UserSettings>({ ...settings });
  const [showKey, setShowKey] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [copiedCmd, setCopiedCmd] = useState(false);

  if (!isOpen) return null;

  const handleProviderSelect = (p: AIProvider) => {
    setCurrent((prev) => ({ ...prev, provider: p }));
    setTestResult(null);
  };

  const handleCopyOllamaCmd = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const handleTestConnection = async () => {
    setTesting(true);
    setTestResult(null);

    let key = '';
    let model = '';
    let endpoint = '';

    if (current.provider === 'ollama') {
      endpoint = current.ollamaEndpoint || 'http://localhost:11434/v1';
      model = current.ollamaModel || 'deepseek-r1';
    } else if (current.provider === 'deepseek') {
      key = current.deepseekApiKey || '';
      model = current.deepseekModel || 'deepseek-chat';
    } else if (current.provider === 'openrouter') {
      key = current.openRouterApiKey;
      model = current.openRouterModel;
    } else if (current.provider === 'groq') {
      key = current.groqApiKey;
      model = current.groqModel;
    } else if (current.provider === 'gemini') {
      key = current.geminiApiKey;
      model = current.geminiModel;
    }

    const res = await testAIConnection(current.provider, key, model, endpoint);
    setTestResult(res);
    setTesting(false);
  };

  const handleSaveAndClose = () => {
    onSave(current);
    onClose();
  };

  const providers: {
    id: AIProvider;
    name: string;
    tag: string;
    tagColor: string;
    desc: string;
  }[] = [
    {
      id: 'builtin',
      name: 'Встроенный Smart AI',
      tag: 'Без ключей (Оффлайн)',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      desc: 'Работает моментально, 12 времен, процедурный генератор, защита от повторов.',
    },
    {
      id: 'ollama',
      name: 'Ollama Local AI (DeepSeek)',
      tag: '100% Оффлайн нейросеть',
      tagColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      desc: 'Локальный запуск DeepSeek R1 прямо на компьютере без интернета и без API ключей.',
    },
    {
      id: 'deepseek',
      name: 'DeepSeek Official API',
      tag: 'DeepSeek V3 / R1',
      tagColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      desc: 'Официальный прямой доступ к мощным моделям deepseek-chat и deepseek-reasoner.',
    },
    {
      id: 'openrouter',
      name: 'OpenRouter Free AI',
      tag: 'Бесплатные модели :free',
      tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      desc: 'DeepSeek R1 Free, Gemini Flash Lite, Llama 3.3 70B, Qwen с тегом :free.',
    },
    {
      id: 'groq',
      name: 'Groq Cloud Free',
      tag: 'Сверхбыстрый (500+ tok/s)',
      tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      desc: 'Мгновенная генерация через Llama 3.3 70B на чипах LPU. Бесплатный аккаунт.',
    },
    {
      id: 'gemini',
      name: 'Google Gemini API',
      tag: 'Google AI Studio',
      tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      desc: 'Официальный бесплатный ключ Google Gemini 2.0 Flash / 1.5 Flash.',
    },
  ];

  const ollamaModels = [
    { id: 'deepseek-r1', name: 'DeepSeek R1 (Рекомендуется — лучшая рассуждающая модель)' },
    { id: 'deepseek-r1:1.5b', name: 'DeepSeek R1 1.5B (Легкая, летает на любом ноутбуке)' },
    { id: 'deepseek-r1:7b', name: 'DeepSeek R1 7B (Сбалансированная мощность)' },
    { id: 'deepseek-r1:8b', name: 'DeepSeek R1 8B (Высокая грамматическая точность)' },
    { id: 'deepseek-coder', name: 'DeepSeek Coder (Логика и грамматика)' },
    { id: 'llama3.2', name: 'Llama 3.2 (Быстрая модель Meta)' },
    { id: 'qwen2.5', name: 'Qwen 2.5 (Отличное знание языков)' },
  ];

  const deepseekOfficialModels = [
    { id: 'deepseek-chat', name: 'DeepSeek-V3 (deepseek-chat) — Сверхбыстрая и точная' },
    { id: 'deepseek-reasoner', name: 'DeepSeek-R1 (deepseek-reasoner) — Максимальные рассуждения' },
  ];

  const openRouterFreeModels = [
    { id: 'deepseek/deepseek-r1:free', name: 'DeepSeek R1 (Рассуждающая нейросеть, бесплатно, топ)' },
    { id: 'google/gemini-2.0-flash-lite:free', name: 'Gemini 2.0 Flash Lite (Бесплатно, быстро)' },
    { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B Instruct (Бесплатно)' },
    { id: 'qwen/qwen-2.5-72b-instruct:free', name: 'Qwen 2.5 72B Instruct (Бесплатно)' },
    { id: 'mistralai/mistral-7b-instruct:free', name: 'Mistral 7B Instruct (Бесплатно)' },
  ];

  const groqFreeModels = [
    { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B Versatile (Рекомендуется)' },
    { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B Instant (Очень быстрая)' },
    { id: 'mixtral-8x7b-32768', name: 'Mixtral 8x7B 32k' },
  ];

  const geminiFreeModels = [
    { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash (Новейшая)' },
    { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <SettingsIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white m-0 p-0 flex items-center gap-2">
                Настройки тренажера и ИИ-моделей
              </h2>
              <p className="text-xs text-slate-400 hidden sm:block">
                Выбери бесплатную оффлайн-нейросеть DeepSeek или облачный ИИ
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

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Section: AI Provider Selection */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              Источник ИИ (AI Provider):
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {providers.map((p) => {
                const isSelected = current.provider === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleProviderSelect(p.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-indigo-600/15 border-indigo-500 shadow-md ring-1 ring-indigo-500/30'
                        : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-white">{p.name}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.tagColor}`}>
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{p.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Configuration for Ollama Local DeepSeek */}
          {current.provider === 'ollama' && (
            <div className="p-4 rounded-xl bg-slate-950/70 border border-teal-500/30 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> Ollama Local AI (100% Оффлайн):
                </span>
                <a
                  href="https://ollama.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 font-medium underline"
                >
                  Скачать Ollama <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Instructions banner */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs space-y-2">
                <p className="text-slate-300">
                  <span className="font-semibold text-teal-300">Как запустить DeepSeek оффлайн:</span> установите Ollama и выполните в терминале команду:
                </p>
                <div className="flex items-center justify-between bg-black/60 rounded px-2.5 py-1.5 border border-slate-800 font-mono text-emerald-400">
                  <span>ollama run {current.ollamaModel || 'deepseek-r1'}</span>
                  <button
                    onClick={() => handleCopyOllamaCmd(`ollama run ${current.ollamaModel || 'deepseek-r1'}`)}
                    className="text-slate-400 hover:text-white p-1 ml-2 transition-colors cursor-pointer"
                    title="Скопировать команду"
                  >
                    {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  Работает полностью локально на вашем компьютере без интернета и без API ключей!
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Оффлайн-модель Ollama:</label>
                <select
                  value={current.ollamaModel || 'deepseek-r1'}
                  onChange={(e) => setCurrent({ ...current, ollamaModel: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500 cursor-pointer"
                >
                  {ollamaModels.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Адрес локального сервера (Endpoint):</label>
                <input
                  type="text"
                  value={current.ollamaEndpoint || 'http://localhost:11434/v1'}
                  onChange={(e) => setCurrent({ ...current, ollamaEndpoint: e.target.value })}
                  placeholder="http://localhost:11434/v1"
                  className="w-full bg-slate-900 border border-slate-700 focus:border-teal-500 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 font-mono focus:outline-none"
                />
                <span className="text-[10px] text-slate-500">
                  Стандартный адрес Ollama: http://localhost:11434/v1 (или LM Studio: http://localhost:1234/v1)
                </span>
              </div>
            </div>
          )}

          {/* Configuration for DeepSeek Official API */}
          {current.provider === 'deepseek' && (
            <div className="p-4 rounded-xl bg-slate-950/70 border border-sky-500/30 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5" /> DeepSeek API Ключ:
                </span>
                <a
                  href="https://platform.deepseek.com/api_keys"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium underline"
                >
                  Получить ключ DeepSeek <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={current.deepseekApiKey || ''}
                  onChange={(e) => setCurrent({ ...current, deepseekApiKey: e.target.value })}
                  placeholder="sk-..."
                  className="w-full bg-slate-900 border border-slate-700 focus:border-sky-500 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 font-mono focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-2 top-2 text-slate-400 hover:text-white p-1"
                >
                  {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Модель DeepSeek:</label>
                <select
                  value={current.deepseekModel || 'deepseek-chat'}
                  onChange={(e) => setCurrent({ ...current, deepseekModel: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  {deepseekOfficialModels.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Configuration for OpenRouter */}
          {current.provider === 'openrouter' && (
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5" /> OpenRouter API Ключ:
                </span>
                <a
                  href="https://openrouter.ai/keys"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium underline"
                >
                  Получить бесплатный ключ <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={current.openRouterApiKey}
                  onChange={(e) => setCurrent({ ...current, openRouterApiKey: e.target.value })}
                  placeholder="sk-or-v1-..."
                  className="w-full bg-slate-900 border border-slate-700 focus:border-purple-500 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 font-mono focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-2 top-2 text-slate-400 hover:text-white p-1"
                >
                  {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Бесплатная модель OpenRouter:</label>
                <select
                  value={current.openRouterModel}
                  onChange={(e) => setCurrent({ ...current, openRouterModel: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 cursor-pointer"
                >
                  {openRouterFreeModels.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Configuration for Groq */}
          {current.provider === 'groq' && (
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5" /> Groq API Ключ:
                </span>
                <a
                  href="https://console.groq.com/keys"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium underline"
                >
                  Создать бесплатный ключ Groq <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={current.groqApiKey}
                  onChange={(e) => setCurrent({ ...current, groqApiKey: e.target.value })}
                  placeholder="gsk_..."
                  className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 font-mono focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-2 top-2 text-slate-400 hover:text-white p-1"
                >
                  {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Модель Groq:</label>
                <select
                  value={current.groqModel}
                  onChange={(e) => setCurrent({ ...current, groqModel: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  {groqFreeModels.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Configuration for Gemini */}
          {current.provider === 'gemini' && (
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5" /> Google AI Studio API Ключ:
                </span>
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium underline"
                >
                  Получить ключ Google AI Studio <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={current.geminiApiKey}
                  onChange={(e) => setCurrent({ ...current, geminiApiKey: e.target.value })}
                  placeholder="AIzaSy..."
                  className="w-full bg-slate-900 border border-slate-700 focus:border-sky-500 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 font-mono focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-2 top-2 text-slate-400 hover:text-white p-1"
                >
                  {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">Модель Gemini:</label>
                <select
                  value={current.geminiModel}
                  onChange={(e) => setCurrent({ ...current, geminiModel: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  {geminiFreeModels.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Test Connection Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            <button
              onClick={handleTestConnection}
              disabled={testing}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
            >
              {testing ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                  <span>Проверяем...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Проверить подключение</span>
                </>
              )}
            </button>

            {testResult && (
              <div
                className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 flex-1 ${
                  testResult.success
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                    : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                }`}
              >
                {testResult.success ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                )}
                <span className="break-words">{testResult.message}</span>
              </div>
            )}
          </div>

          {/* Voice & Speech Settings */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
              Озвучка и речь (Speech Synthesis):
            </span>

            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-300 font-medium">
                Автоматически озвучивать предложения
              </label>
              <input
                type="checkbox"
                checked={current.autoSpeak}
                onChange={(e) => setCurrent({ ...current, autoSpeak: e.target.checked })}
                className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Скорость речи (Rate):</span>
                <span className="font-mono text-indigo-300">{current.voiceRate}x</span>
              </div>
              <input
                type="range"
                min="0.6"
                max="1.3"
                step="0.05"
                value={current.voiceRate}
                onChange={(e) => setCurrent({ ...current, voiceRate: parseFloat(e.target.value) })}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Медленнее (для учебы)</span>
                <span>Стандарт</span>
                <span>Быстрее</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-slate-800 bg-slate-950/90 flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Отмена
          </button>
          <button
            onClick={handleSaveAndClose}
            className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            Сохранить настройки
          </button>
        </div>
      </div>
    </div>
  );
};
