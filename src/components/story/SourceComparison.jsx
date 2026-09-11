import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export default function SourceComparison({ sources, agreement }) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm text-left">
      
      {/* Header & Agreement Metric */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5 mb-5">
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Multi-Source Cross-Check
            <span className="text-xs font-normal text-slate-500">({sources.length} tracked outlets)</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Transparent comparison of editorial focus and publication angles
          </p>
        </div>

        {agreement && (
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <ShieldCheck className="h-5 w-5 text-blue-500 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Source Agreement: {agreement.score}%</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold">
                  Consensus
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{agreement.ratio}</p>
            </div>
          </div>
        )}
      </div>

      {/* Grid of Source Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4">
        {sources.map(src => (
          <div 
            key={src.id}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-blue-400 dark:hover:border-blue-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-bold text-xs text-slate-900 dark:text-slate-100">{src.name}</span>
                <span className="text-[10px] text-slate-400">{src.time}</span>
              </div>
              <h3 className="text-xs font-medium text-slate-800 dark:text-slate-200 line-clamp-2 mb-2">
                "{src.headline}"
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                <strong className="text-slate-700 dark:text-slate-300">Angle:</strong> {src.focus}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800/60 flex justify-end">
              <a 
                href={src.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Original Article <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer Notice */}
      {agreement?.disclaimer && (
        <p className="text-[11px] text-slate-400 text-center italic border-t border-slate-100 dark:border-slate-800/80 pt-3">
          {agreement.disclaimer}
        </p>
      )}
    </section>
  );
}
