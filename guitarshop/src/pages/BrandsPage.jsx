import React from "react";
import { useQuery } from "@apollo/client";
import { FIND_ALL_BRANDS } from "../queries";
import { useNavigate } from "react-router-dom";
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
  const { loading, error, data } = useQuery(FIND_ALL_BRANDS);

  if (loading) return <p>Loading brands...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.brandsPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 style={{fontWeight:'200' ,marginBottom:'75px', fontSize:'20px ',marginTop:'-90px'}}className={styles.butterfly}> <img src={butterfly} style={{marginTop:'20px', marginBottom:'-12px', marginRight:'-4px' , height:'45px'}}></img> VibeStrings</h1>
          <h1 className={styles.heroTitle}>
            Browse top quality <br />
            <span className={styles.highlight}>Guitars</span> online
          </h1>
          <p className={styles.heroSubtitle}>
            Explore 50k+ latest collections of branded guitars online with VibeStrings.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src={myImage} style={{ width: '100%', height: '100%', objectFit: 'cover', borderBottomLeftRadius: '360px', borderBottomRightRadius: '151px', marginLeft:'70px', marginRight:'-60px'}}></img>
        </div>
      </div>
      
     
      <div className={styles.brandsSection}>
        <h2 className={styles.sectionTitle}>
          Featuring the <span className={styles.highlight}>Best Brands</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Select your preferred brand and explore our exquisite collection.
        </p>
        <div 
          className={styles.brandsGrid}
          
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            justifyItems: 'center',
            alignItems: 'center'
          }}
        >
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
                
                style={{ width: '100px', height: '100px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>

    
      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>
          Why try <span className={styles.highlight}>VibeStrings?</span>
        </h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <i className="fa fa-braille"></i>
            </div>
            <h3>SMOOTH BROWSING</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <i className="fa fa-shipping-fast"></i>
            </div>
            <h3>EASY DELIVERY</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <i className="fa fa-wallet"></i>
            </div>
            <h3>SWIFT PAYMENTS</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            </p>
          </div>
        </div>
      </div>
      

      <div className={styles.mobileAppSection}>
        <div className={styles.mobileAppContent}>
          <h2>
            Browse and buy your <br /> 
            <span className={styles.highlight}>favorite guitars</span> with VibeStrings.
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
                <span style={{ fontSize: "10px" }}>GET IT ON</span>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>Google Play</span>
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
                <span style={{ fontSize: "10px" }}>Download on the</span>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>App Store</span>
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
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <div className={styles.footerLogo}>
              <img style={{height:'50px' ,width:'50px', marginLeft:'-47px'}} src={b2}></img>
              <span style={{fontWeight:'300' , marginLeft:'-10px' , color:'#121212'}}>VibeStrings</span>
            </div>
            <div className={styles.contactInfo}>
              <p><i className="fa fa-envelope"></i> Enquiry@VibeStrings.com</p>
              <p><i className="fa fa-map-marker"></i> San Francisco</p>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>PAGES</h4>
              <ul>
                <li><a href="#">Store</a></li>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>PRODUCT</h4>
              <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Copyright</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>FOLLOW US</h4>
              <div className={styles.socialIcons}>
                <img style={{marginLeft:'-40px' , marginRight:'20px'}} src={logos}></img>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2022 Copyright.VibeStrings</p>
        </div>
      </footer>
    </div>
  );
}
