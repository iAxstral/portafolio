import { useState, useEffect } from 'react';

export default function LanguagePicker({ currentLang }: { currentLang: string }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  const toggleLang = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    if (newLang === 'en') {
      window.location.href = '/en';
    } else {
      window.location.href = '/';
    }
  };

  if (!mounted) return <div className="w-16 h-8" />;

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1.5 rounded-full glass-panel hover:bg-white/40 dark:hover:bg-black/40 transition-colors font-medium text-sm flex items-center gap-2"
      aria-label="Toggle language"
    >
      <span className={currentLang === 'es' ? 'font-bold text-cyan-600 dark:text-cyan-400' : 'opacity-70'}>ES</span>
      <span className="opacity-30">|</span>
      <span className={currentLang === 'en' ? 'font-bold text-cyan-600 dark:text-cyan-400' : 'opacity-70'}>EN</span>
    </button>
  );
}
