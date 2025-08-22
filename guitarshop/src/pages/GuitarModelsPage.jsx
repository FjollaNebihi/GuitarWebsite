import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../style/ModelsPage.module.css";
import butterfly from "../assets/butterfly1.png";
import logos from "../assets/logos1.png";
import b2 from "../assets/b2.png";
import linear from "../assets/linear.png";

export const FIND_UNIQUE_BRAND = gql`
  query FindUniqueBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
      categories
      models {
        id
        name
        image
        price
      }
    }
  }
`;

export default function GuitarModelsPage() {
  const navigate = useNavigate();
  const { brandId } = useParams();
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const { loading, error, data } = useQuery(FIND_UNIQUE_BRAND, {
    variables: { id: brandId },
  });

  if (loading) return <p>Loading models...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.findUniqueBrand) return <p>Could not find brand.</p>;

  const brand = data.findUniqueBrand;
  const models = brand.models || [];

  const displayModels = models
    .filter((model) =>
      model.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "price-asc") {
        return a.price - b.price;
      }
      if (sortOrder === "price-desc") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className={styles.brandsPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1
            style={{
              cursor: "pointer",
              marginTop: "-30px",
              marginBottom: "70px",
              fontSize: "14px",
              fontWeight: "100",
            }}
            onClick={() => navigate("/")}
          >
            ⬅ Back To Brands
          </h1>
          <h1
            style={{
              fontWeight: "200",
              marginBottom: "75px",
              fontSize: "20px",
              marginTop: "-90px",
            }}
            className={styles.butterfly}
          >
            <img
              src={butterfly}
              style={{
                marginTop: "20px",
                marginBottom: "-12px",
                marginRight: "-4px",
                height: "45px",
              }}
              alt="Butterfly"
            />
            VibeStrings
          </h1>
          <h1 className={styles.heroTitle}>
            Play like a <span className={styles.highlight}>Rock star</span>
          </h1>
          <p className={styles.heroSubtitle}>
            With a legacy dating back to the 1950s, {brand.name} blends expert
            craftsmanship with cutting-edge innovation to deliver guitars that
            inspire creativity and elevate your performance.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src={linear} style={{ width: "600px" }} alt="Hero guitar" />
        </div>
      </div>

      <div className={styles.brandsSection}>
        <h2 className={styles.sectionTitle}>
          Check out the <span className={styles.highlight}>selection</span>
        </h2>

        <div className={styles.controlsContainer}>
          <input
            type="text"
            placeholder="🔎︎ Search by name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.searchBar}
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={styles.sortDropdown}
          >
            <option value="default">Sort by Price</option>
            <option value="price-asc">Low to High</option>
            <option value="price-desc">High to Low</option>
          </select>
        </div>

        <div className={styles.brandsGrid}>
          {displayModels.map((model) => (
            <div
              key={model.id}
              className={styles.modelCard}
              onClick={() => navigate(`/brand/${brandId}/model/${model.id}`)}
            >
              <img
                src={model.image}
                alt={model.name}
                className={styles.modelImage}
              />
              <div className={styles.modelInfo}>
                <h3 className={styles.modelName}>{model.name}</h3>
                <p className={styles.modelPrice}>${model.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <span className={styles.paginationText}>
            SHOWING <b>{displayModels.length}</b> RESULTS FROM{" "}
            <b>{models.length}</b>
          </span>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <div className={styles.footerLogo}>
              <img
                style={{ height: "50px", width: "50px", marginLeft: "-47px" }}
                src={b2}
                alt="Logo"
              />
              <span
                style={{
                  fontWeight: "300",
                  marginLeft: "-10px",
                  color: "#121212",
                }}
              >
                VibeStrings
              </span>
            </div>
            <div className={styles.contactInfo}>
              <p>
                <i className="fa fa-envelope"></i> Enquiry@VibeStrings.com
              </p>
              <p>
                <i className="fa fa-map-marker"></i> San Francisco
              </p>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>PAGES</h4>
              <ul>
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>PRODUCT</h4>
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Copyright</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>FOLLOW US</h4>
              <div className={styles.socialIcons}>
                <img
                  style={{ marginLeft: "-40px", marginRight: "20px" }}
                  src={logos}
                  alt="Social logos"
                />
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