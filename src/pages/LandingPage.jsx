import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GitCompare, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      {/* Hero Section */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          The Developing Story Platform for Modern Readers
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          Most news tells you what happened. <br />
          <span className="text-blue-600 dark:text-blue-500">NewsPulse tells you what changed.</span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Stop reading five redundant articles about the same breaking event. NewsPulse clusters coverage into living stories with comparative diffs and multi-source transparency.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
          >
            Launch Live Platform <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all"
          >
            One-Click Judge Demo
          </Link>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <GitCompare className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">What's New? Diffs</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Instantly surfaces newly reported details, revised numbers, and conflicting statements without repetitive reading.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Multi-Source Cross-Check</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Side-by-side consensus indicators across AP, Reuters, Bloomberg, and specialized independent outlets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Living Story Timeline</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Watch developing situations unfold chronologically with verified milestones and zero fabricated content.
            </p>
          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500">
        NewsPulse AI • Hackathon Edition • Frontend-First Architecture
      </footer>
    </div>
  );
}
