// src/pages/GuitarDetailsPage.jsx
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { FIND_UNIQUE_BRAND } from "../queries"; // import query from queries.js
import styles from "../style/GuitarDetailsPage.module.css";
import butterfly from "../assets/butterfly1.png";
import logos from "../assets/logos1.png";
import b2 from "../assets/b2.png";

export default function GuitarDetailsPage() {
  const { brandId, modelId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('specification');

  const { loading, error, data } = useQuery(FIND_UNIQUE_BRAND, {
    variables: { id: parseInt(brandId) },
  });

  if (loading) return <p>Loading model details...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.findUniqueBrand) return <p>Could not find brand.</p>;

  const brand = data.findUniqueBrand;
  const model = brand.models?.find(m => 
    m.id === modelId || 
    m.id === parseInt(modelId) || 
    m.id.toString() === modelId ||
    m.name.toLowerCase() === modelId.toLowerCase()
  );
  
  if (!model) return <p>Could not find model. Available models: {brand.models?.map(m => `${m.id} (${m.name})`).join(', ')}</p>;

  return (
    <div className={styles.pageContainer}>
      {/* Language Switcher and Back Button */}
      <div className={styles.languageSwitcherContainer}>
        <LanguageSwitcher />
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ⬅ {t('back_to_models')}
        </button>
      </div>
      
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logoSection}>
          <img src={butterfly} alt="VibeStrings Logo" className={styles.logoIcon} />
          <span className={styles.logoText}>VibeStrings</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <h1 className={styles.productTitle}>
            {model.name}®
          </h1>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.imageContainer}>
            <img src={model.image} alt={model.name} className={styles.productImage} />
            <div className={styles.imageAccent}>
              <img src={butterfly} alt="Accent" className={styles.accentIcon} />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabLine}></div>
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'specification' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('specification')}
          >
            {t('specification')}
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'musicians' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('musicians')}
          >
            {t('who_plays_it')}
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        {activeTab === 'specification' && (
          <div className={styles.specificationContent}>
            <p className={styles.description}>
              {t('guitar_description', { modelName: model.name })}
            </p>
            
            <div className={styles.specificationsList}>
              <div className={styles.specItem}>
                <span className={styles.specBullet}>•</span>
                <span className={styles.specLabel}>{t('body_wood')}:</span>
                <span className={styles.specValue}>{t('alder')}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specBullet}>•</span>
                <span className={styles.specLabel}>{t('neck_wood')}:</span>
                <span className={styles.specValue}>{t('maple')}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specBullet}>•</span>
                <span className={styles.specLabel}>{t('fingerboard')}:</span>
                <span className={styles.specValue}>{t('rosewood')}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specBullet}>•</span>
                <span className={styles.specLabel}>{t('pickups')}:</span>
                <span className={styles.specValue}>{t('single_coil_strat')}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specBullet}>•</span>
                <span className={styles.specLabel}>{t('tuners')}:</span>
                <span className={styles.specValue}>{t('vintage_style')}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specBullet}>•</span>
                <span className={styles.specLabel}>{t('scale_length')}:</span>
                <span className={styles.specValue}>{t('scale_length_value')}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specBullet}>•</span>
                <span className={styles.specLabel}>{t('bridge')}:</span>
                <span className={styles.specValue}>{t('bridge_type')}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specBullet}>•</span>
                <span className={styles.specLabel}>{t('price')}:</span>
                <span className={styles.specValue}>${model.price}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'musicians' && (
          <div className={styles.musiciansContent}>
            <p className={styles.description}>
              {t('musicians_description', { modelName: model.name })}
            </p>
            
            <div className={styles.musiciansList}>
              <div className={styles.musicianItem}>
                <span className={styles.musicianBullet}>•</span>
                <span className={styles.musicianName}>{t('professional_musicians')}</span>
              </div>
              <div className={styles.musicianItem}>
                <span className={styles.musicianBullet}>•</span>
                <span className={styles.musicianName}>{t('studio_artists')}</span>
              </div>
              <div className={styles.musicianItem}>
                <span className={styles.musicianBullet}>•</span>
                <span className={styles.musicianName}>{t('live_performers')}</span>
              </div>
              <div className={styles.musicianItem}>
                <span className={styles.musicianBullet}>•</span>
                <span className={styles.musicianName}>{t('recording_artists')}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
