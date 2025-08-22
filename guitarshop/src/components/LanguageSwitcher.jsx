// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <span>{t('language')}: </span>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('sq')}>SQ</button>
      <button onClick={() => changeLanguage('mk')}>MK</button>
    </div>
  );
};

export default LanguageSwitcher;
