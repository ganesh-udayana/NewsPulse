import React, { useState } from 'react';
import { Settings, Bell, Moon, Sun, Cpu } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function SettingsPage() {
  const { theme, toggleTheme } = useAuth();
  const [aiBrevity, setAiBrevity] = useState('concise');
  const [notifyOnDiff, setNotifyOnDiff] = useState(true);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6 text-left">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Settings className="h-5 w-5 text-blue-500" />
          Analyst Preferences
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Configure intelligence brief density and notifications</p>
      </div>

      <div className="space-y-4">
        {/* Appearance */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Color Theme</h3>
            <p className="text-xs text-slate-500">Switch between editorial high-contrast light and dark modes</p>
          </div>
          <button onClick={toggleTheme} className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer">
            {theme === 'dark' ? <><Sun className="h-3.5 w-3.5 text-amber-400" /> Dark Mode</> : <><Moon className="h-3.5 w-3.5" /> Light Mode</>}
          </button>
        </div>

        {/* AI Briefing Density */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Cpu className="h-4 w-4 text-blue-500" /> AI Story Brief Density
            </h3>
            <p className="text-xs text-slate-500">Adjust the depth of synthesized intelligence points</p>
          </div>
          <div className="flex gap-2">
            {['concise', 'balanced', 'deep-dive'].map(mode => (
              <button
                key={mode}
                onClick={() => setAiBrevity(mode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize border cursor-pointer ${aiBrevity === mode ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 dark:border-slate-700 text-slate-500'}`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Bell className="h-4 w-4 text-amber-500" /> Real-Time Conflict Alerts
            </h3>
            <p className="text-xs text-slate-500">Receive in-app alerts when sources publish conflicting reports</p>
          </div>
          <input
            type="checkbox"
            checked={notifyOnDiff}
            onChange={(e) => setNotifyOnDiff(e.target.checked)}
            className="h-4 w-4 rounded text-blue-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
