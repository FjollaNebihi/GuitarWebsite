// src/components/LanguageSwitcher.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../style/LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: t('language_en'), flag: '🇺🇸' },
    { code: 'sq', name: t('language_sq'), flag: '🇦🇱' },
    { code: 'de', name: t('language_de'), flag: '🇩🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button 
        className={styles.languageButton}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        <span className={styles.flag}>{currentLanguage.flag}</span>
        <span className={styles.languageName}>{currentLanguage.name}</span>
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.dropdownItem} ${lang.code === i18n.language ? styles.active : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.languageName}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
