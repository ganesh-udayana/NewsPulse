import React from 'react';

export default function TimelineView({ timeline }) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm text-left">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Chronological Story Timeline
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Step-by-step narrative evolution as dispatches were verified
          </p>
        </div>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
          {timeline.length} updates logged
        </span>
      </div>

      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        {timeline.map((event, index) => (
          <div key={event.id || index} className="relative">
            {/* Timeline Dot */}
            <span className={`absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 ${index === 0 ? 'bg-blue-600 ring-4 ring-blue-500/20 animate-pulse' : 'bg-slate-400 dark:bg-slate-600'}`} />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{event.time}</span>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span>Via {event.source}</span>
                {event.tag && (
                  <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-semibold">
                    {event.tag}
                  </span>
                )}
              </div>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              {event.headline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
