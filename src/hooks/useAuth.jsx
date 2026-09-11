import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEMO_USER } from '../data/demoData';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('newspulse_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [savedStories, setSavedStories] = useState(() => {
    const saved = localStorage.getItem('newspulse_saved');
    return saved ? JSON.parse(saved) : ["story-ai-eu-regulations", "story-clean-energy-battery-breakthrough"];
  });

  const [followedStories, setFollowedStories] = useState(() => {
    const saved = localStorage.getItem('newspulse_followed');
    return saved ? JSON.parse(saved) : ["story-ai-eu-regulations", "story-space-commercial-station"];
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('newspulse_theme') || 'dark';
  });

  const [accounts, setAccounts] = useState(() => {
    const saved = localStorage.getItem('newspulse_accounts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('newspulse_theme', theme);
  }, [theme]);

  const login = ({ username, email, password }) => {
    const normalizedUsername = username?.trim() || email?.split('@')[0] || 'analyst';
    const identifier = (username || email || '').trim().toLowerCase();
    const account = accounts.find(item =>
      item.username.toLowerCase() === identifier || item.email.toLowerCase() === identifier
    );

    if (account && account.password !== password) {
      return { error: 'Incorrect password.' };
    }

    const newUser = {
      ...DEMO_USER,
      name: account?.name || normalizedUsername,
      username: account?.username || normalizedUsername,
      email: account?.email || email?.trim() || `${normalizedUsername}@newspulse.local`
    };
    setUser(newUser);
    localStorage.setItem('newspulse_user', JSON.stringify(newUser));
    return { user: newUser };
  };

  const signup = ({ username, email, password }) => {
    const normalizedUsername = username.trim().toLowerCase();
    const normalizedEmail = email.trim().toLowerCase();
    const alreadyExists = accounts.some(account =>
      account.username.toLowerCase() === normalizedUsername || account.email.toLowerCase() === normalizedEmail
    );

    if (alreadyExists) return { error: 'That username or email is already registered.' };

    const account = { username: normalizedUsername, email: normalizedEmail, password, name: username.trim() };
    const updatedAccounts = [...accounts, account];
    setAccounts(updatedAccounts);
    localStorage.setItem('newspulse_accounts', JSON.stringify(updatedAccounts));
    return login({ username: normalizedUsername, email: normalizedEmail, password });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('newspulse_user');
  };

  const updateUser = (updatedFields) => {
    const updated = { ...user, ...updatedFields };
    setUser(updated);
    localStorage.setItem('newspulse_user', JSON.stringify(updated));
  };

  const toggleSaveStory = (storyId) => {
    setSavedStories(prev => {
      const updated = prev.includes(storyId) 
        ? prev.filter(id => id !== storyId)
        : [...prev, storyId];
      localStorage.setItem('newspulse_saved', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleFollowStory = (storyId) => {
    setFollowedStories(prev => {
      const updated = prev.includes(storyId)
        ? prev.filter(id => id !== storyId)
        : [...prev, storyId];
      localStorage.setItem('newspulse_followed', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      updateUser,
      savedStories,
      followedStories,
      toggleSaveStory,
      toggleFollowStory,
      theme,
      toggleTheme
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
