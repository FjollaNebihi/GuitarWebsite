import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../style/ModelsPage.module.css";
import butterfly from "../assets/butterfly1.png";
import logos from "../assets/logos1.png";
import b2 from "../assets/b2.png";


export const FIND_UNIQUE_MODEL = gql`
  query FindUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      description
      price
      specs {
        material
      }
      musicians {
        id
        name
      }
    }
  }
`;


export default function GuitarDetailsPage() {

  const { brandId, modelId } = useParams();
  const navigate = useNavigate();

  

  const { loading, error, data } = useQuery(FIND_UNIQUE_MODEL, {
    variables: { brandId: brandId, modelId: modelId },
  });

  if (loading) return <p>Loading model details...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.findUniqueModel) return <p>Could not find model.</p>;

  const model = data.findUniqueModel;

  return (
    <div className={styles.brandsPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Back button to navigate to the previous page in history */}
          <h1
            style={{ cursor: 'pointer', marginTop:'-30px', marginBottom:'70px', fontSize:'14px', fontWeight:'100' }}
            onClick={() => navigate(-1)}
          >
            ⬅ Back To The List
          </h1>
          
          <h1 style={{ fontWeight:'200', marginBottom:'75px', fontSize:'20px', marginTop:'-90px' }} className={styles.butterfly}>
            <img src={butterfly} style={{ marginTop:'20px', marginBottom:'-12px', marginRight:'-4px', height:'45px' }} alt="Butterfly"/>
            VibeStrings
          </h1>
         
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>{model.name}</span>
          </h1>
        </div>
      </div>
     
      <div className={styles.detailsPage}>
        <div className={styles.detailsContainer}>
          <img
            src={model.image}
            alt={model.name}
            className={styles.detailsImage}
          />
          <div className={styles.detailsInfo}>
            <h1 className={styles.detailsTitle}>{model.name}</h1>
            <p className={styles.detailsPrice}>${model.price}</p>
            <p className={styles.detailsDescription}>{model.description}</p>
          </div>
        </div>
      </div>
    
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <div className={styles.footerLogo}>
              <img style={{height:'50px', width:'50px', marginLeft:'-47px'}} src={b2} alt="Logo"/>
              <span style={{fontWeight:'300', marginLeft:'-10px', color:'#121212'}}>VibeStrings</span>
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
                <img style={{marginLeft:'-40px', marginRight:'20px'}} src={logos} alt="Social logos"/>
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
