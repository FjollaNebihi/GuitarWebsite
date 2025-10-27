import React from "react";
import { useQuery } from "@apollo/client";
import { FIND_ALL_BRANDS } from "../queries";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import styles from "../style/BrandsPage.module.css";
import myImage from '../assets/guitar1.jpg';
import screenG1 from '../assets/screenG1.png';
import screenG2 from '../assets/screenG2.png';
import butterfly from "../assets/butterfly1.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import logos from "../assets/logos1.png";
import b2 from "../assets/b2.png";

export default function BrandsPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { loading, error, data } = useQuery(FIND_ALL_BRANDS);

  if (loading) return <p>Loading brands...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.brandsPage} key={i18n.language}>
      {/* Language Switcher */}
      <div className={styles.languageSwitcherContainer}>
        <LanguageSwitcher />
      </div>
      
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoSection}>
            <img src={butterfly} alt="VibeStrings Logo" className={styles.logoIcon} />
            <span className={styles.logoText}>VibeStrings</span>
          </div>
          <h1 className={styles.heroTitle}>
            <Trans i18nKey="hero_title" components={{ 1: <span className={styles.highlight} /> }} />
          </h1>
          <p className={styles.heroSubtitle}>
            {t('hero_subtitle')}
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src={myImage} alt="Premium guitar collection" className={styles.heroImg} />
        </div>
      </div>
      
     
      <div className={styles.brandsSection}>
        <h2 className={styles.sectionTitle}>
          <Trans i18nKey="section_title" components={{ 1: <span className={styles.highlight} /> }} />
        </h2>
        <p className={styles.sectionSubtitle}>
          {t('section_subtitle')}
        </p>
         <div className={styles.brandsGrid}>
           {data.findAllBrands.map((brand) => (
             <div
               key={brand.id}
               className={styles.brandLogoContainer}
               onClick={() => navigate(`/brand/${brand.id}`)}
             >
               <img 
                 src={brand.image} 
                 alt={`${brand.name} logo`}
                 className={styles.brandLogo}
               />
               <span className={styles.brandName}>{brand.name}</span>
             </div>
           ))}
         </div>
      </div>

    
      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>
          <Trans i18nKey="why_try_title" components={{ 1: <span className={styles.highlight} /> }} />
        </h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <i className="fa fa-braille"></i>
            </div>
            <h3>{t('service_smooth_browsing')}</h3>
            <p>
              {t('service_placeholder')}
            </p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <i className="fa fa-shipping-fast"></i>
            </div>
            <h3>{t('service_easy_delivery')}</h3>
            <p>
              {t('service_placeholder')}
            </p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <i className="fa fa-wallet"></i>
            </div>
            <h3>{t('service_swift_payments')}</h3>
            <p>
              {t('service_placeholder')}
            </p>
          </div>
        </div>
      </div>
      

      <div className={styles.mobileAppSection}>
        <div className={styles.mobileAppContent}>
          <h2>
            <Trans i18nKey="mobile_app_title" components={{ 1: <span className={styles.highlight} />, br: <br /> }} />
          </h2>
          
          <div style={{ display: "flex", gap: "12px", marginTop: "35px" , marginLeft:'100px'}}>
            
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                cursor: "pointer",
                fontFamily: "sans-serif",
              }}
            >
              <img
                src={google}
                alt="Google Play"
                style={{ height: "28px", marginRight: "15px" }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1", textAlign: "left" }}>
                <Trans i18nKey="download_google" components={{ br: <br /> }} />
              </div>
            </button>

  
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 19px",
                cursor: "pointer",
                fontFamily: "sans-serif",
                marginLeft:'30px'
                
              }}
            >
              <img
                src={apple}
                alt="App Store"
                style={{ height: "24px", marginRight: "15px" }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1", textAlign: "left" }}>
                <Trans i18nKey="download_apple" components={{ br: <br /> }} />
              </div>
            </button>
          </div>
        </div>

        <div className={styles.mobileAppImage}>
          <img src={screenG1} style={{ marginBottom: '140px', marginRight: '20px', marginTop: '-40px' }} alt="VibeStrings mobile app screenshot" />
          <img src={screenG2} style={{ marginBottom: '110px', marginTop: '-40px' }} alt="VibeStrings mobile app screenshot" />
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer} key={`footer-${i18n.language}`}>
        <div className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <div className={styles.footerLogo}>
              <img style={{height:'50px' ,width:'50px', marginLeft:'-47px'}} src={b2}></img>
              <span style={{fontWeight:'300' , marginLeft:'-10px' , color:'#121212'}}>VibeStrings</span>
            </div>
            <div className={styles.contactInfo}>
              <p><i className="fa fa-envelope"></i> {t('email')}</p>
              <p><i className="fa fa-map-marker"></i> {t('location')}</p>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>{t('pages')}</h4>
              <ul>
                <li><a href="#">{t('store')}</a></li>
                <li><a href="#">{t('collections')}</a></li>
                <li><a href="#">{t('support')}</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>{t('product')}</h4>
              <ul>
                <li><a href="#">{t('terms')}</a></li>
                <li><a href="#">{t('privacy_policy')}</a></li>
                <li><a href="#">{t('copyright')}</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>{t('follow_us')}</h4>
              <div className={styles.socialIcons}>
                <img style={{marginLeft:'-40px' , marginRight:'20px'}} src={logos}></img>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>{t('copyright_text')}</p>
        </div>
      </footer>
    </div>
  );
}
