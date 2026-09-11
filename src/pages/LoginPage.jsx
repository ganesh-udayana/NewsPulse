import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Newspaper, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('demo@newspulse.ai');
  const [password, setPassword] = useState('password123');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate('/dashboard');
  };

  const handleQuickDemo = () => {
    login('demo@newspulse.ai');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 text-left">
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
        
        <div className="text-center mb-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md mb-3">
            <Newspaper className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Welcome to NewsPulse AI</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sign in to access real-time story intelligence</p>
        </div>

        {/* Quick Demo Button */}
        <button
          onClick={handleQuickDemo}
          className="w-full mb-5 py-2.5 px-4 rounded-xl text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950 transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="h-4 w-4 text-blue-500" />
          One-Click Demo Login (Pre-Configured)
        </button>

        <div className="relative flex py-2 items-center mb-5">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          <span className="flex-shrink mx-4 text-[11px] text-slate-400 uppercase font-semibold">Or sign in with email</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Password</label>
              <Link to="/forgot-password" className="text-[11px] text-blue-500 hover:underline">Forgot?</Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            Enter Dashboard <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          Need an account? <Link to="/signup" className="text-blue-500 font-bold hover:underline">Sign up</Link>
        </p>

      </div>
    </div>
  );
}
