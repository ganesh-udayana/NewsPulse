import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import StoryDetailPage from './pages/StoryDetailPage';
import SavedPage from './pages/SavedPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import LatestPage from './pages/LatestPage';
import TrendingPage from './pages/TrendingPage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';
import { getStoredStories, saveStories } from './services/newsApi';
import { X } from 'lucide-react';

function AppContent() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isAuthView = ['/', '/login', '/signup', '/forgot-password'].includes(location.pathname);

  // Global Demo Simulation trigger from Navbar
  const handleGlobalSimulate = () => {
    const stories = getStoredStories();
    if (!stories.length) return;
    const target = stories[0];
    const newTimestamp = "Just now";
    
    const updatedTarget = {
      ...target,
      lastUpdated: newTimestamp,
      momentum: 99,
      status: "Rapidly Developing",
      whatsNew: {
        ...target.whatsNew,
        lastCompared: "Just now vs 10m ago",
        newlyReported: [
          `Live breaking bulletin confirmed at ${new Date().toLocaleTimeString()} by dispatch desk.`,
          ...target.whatsNew.newlyReported
        ]
      },
      timeline: [
        {
          id: 'sim-' + Date.now(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          headline: "Verified dispatch update received from emergency field correspondents",
          source: "NewsPulse Wire (Simulated)",
          tag: "Live Alert"
        },
        ...target.timeline
      ]
    };

    saveStories(stories.map(s => s.id === updatedTarget.id ? updatedTarget : s));
    navigate(`/story/${updatedTarget.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar onSimulate={handleGlobalSimulate} onToggleMobileNav={() => setMobileNavOpen(!mobileNavOpen)} />

      {mobileNavOpen && user && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileNavOpen(false)}
            className="absolute inset-0 bg-slate-950/60"
          />
          <div className="relative h-full w-[min(84vw,20rem)] bg-white dark:bg-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-4">
              <span className="text-sm font-bold text-slate-900 dark:text-white">NewsPulse Menu</span>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setMobileNavOpen(false)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Sidebar mobile onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}
      
      <div className="flex flex-1">
        {!isAuthView && <Sidebar />}
        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/story/:id" element={<StoryDetailPage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/latest" element={<LatestPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
