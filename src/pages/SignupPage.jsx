import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Newspaper, ArrowRight } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const TOPICS = ["Technology", "AI & Robotics", "Clean Energy", "Markets & Economy", "Space Exploration", "Cybersecurity", "Health"];

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState(["Technology", "AI & Robotics"]);
  const { login } = useAuth();
  const navigate = useNavigate();

  const toggleTopic = (t) => {
    setSelectedTopics(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email || 'analyst@newspulse.ai');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 text-left">
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
        
        <div className="text-center mb-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md mb-3">
            <Newspaper className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Create Analyst Account</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Configure your personalized intelligence feed</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Rivera"
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="analyst@domain.com"
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Select Primary Beats</label>
            <div className="flex flex-wrap gap-1.5">
              {TOPICS.map(t => {
                const active = selectedTopics.includes(t);
                return (
                  <button
                    type="button"
                    key={t}
                    onClick={() => toggleTopic(t)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${active ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}
                  >
                    {active ? '✓ ' : '+ '}{t}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            Create & Enter Hub <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          Already have an account? <Link to="/login" className="text-blue-500 font-bold hover:underline">Log in</Link>
        </p>

      </div>
    </div>
  );
}
