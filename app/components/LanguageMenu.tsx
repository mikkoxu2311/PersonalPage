'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageMenu() {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };
  
  return (
    <button 
      onClick={toggleLanguage} 
      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      aria-label={language === 'en' ? "Switch to Chinese" : "切换到英文"}
    >
      <Image src="/images/menu.svg" alt="Menu" width={24} height={24} />
    </button>
  );
} 