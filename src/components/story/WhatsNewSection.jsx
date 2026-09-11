import React from 'react';
import { Sparkles, PlusCircle, RefreshCw, AlertTriangle, HelpCircle } from 'lucide-react';

export default function WhatsNewSection({ whatsNew }) {
  if (!whatsNew) return null;

  const renderItems = (items = [], dotClass, emptyMessage) => {
    if (items.length === 0) {
      return <li className="text-xs italic text-slate-400 dark:text-slate-500">{emptyMessage}</li>;
    }

    return items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${dotClass} mt-1.5 shrink-0`} />
        <span>{item}</span>
      </li>
    ));
  };

  return (
    <section className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-b from-blue-50/70 to-white dark:from-blue-950/30 dark:to-slate-900 p-5 sm:p-6 shadow-sm text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-100 dark:border-blue-900/40 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              What's New in this Story?
              <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-blue-600 text-white uppercase tracking-wider">
                Primary USP
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Delta diff between recent intelligence snapshots ({whatsNew.lastCompared})
            </p>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 dark:text-slate-400 italic bg-white/70 dark:bg-slate-900/70 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
          Reflects available reporting • Not independent verification
        </div>
      </div>

      {/* Grid of 4 Intelligence Change Quadrants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* 1. Newly Reported */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-950/60 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            <PlusCircle className="h-4 w-4" />
            <span>Newly Reported Information</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {renderItems(whatsNew.newlyReported, 'bg-emerald-500', 'No new details reported yet.')}
          </ul>
        </div>

        {/* 2. Changed Details */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-950/60 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400 font-bold text-xs">
            <RefreshCw className="h-4 w-4" />
            <span>Changed / Revised Details</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {renderItems(whatsNew.changedDetails, 'bg-amber-500', 'No revisions reported yet.')}
          </ul>
        </div>

        {/* 3. Conflicting Reports */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-950/60 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-red-600 dark:text-red-400 font-bold text-xs">
            <AlertTriangle className="h-4 w-4" />
            <span>Conflicting Reports (Unresolved)</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {renderItems(whatsNew.conflictingReports, 'bg-red-500', 'No conflicting reports found.')}
          </ul>
        </div>

        {/* 4. Still Unknown */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400 font-bold text-xs">
            <HelpCircle className="h-4 w-4" />
            <span>Critical Details Still Unknown</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {renderItems(whatsNew.stillUnknown, 'bg-slate-400', 'No unknown details recorded yet.')}
          </ul>
        </div>

      </div>
    </section>
  );
}
