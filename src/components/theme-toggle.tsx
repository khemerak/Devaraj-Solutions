'use client';

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('devaraj-theme', theme); } catch { /* Storage may be disabled. */ }
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}>
      <Moon className="theme-light-icon" size={18} aria-hidden="true" />
      <Sun className="theme-dark-icon" size={18} aria-hidden="true" />
      <span className="sr-only theme-light-icon">Switch to dark theme</span>
      <span className="sr-only theme-dark-icon">Switch to light theme</span>
    </button>
  );
}
