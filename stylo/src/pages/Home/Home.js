import React from "react";
import "../../styles/pages/home.scss";
import landingImg from "../../img/landing.svg";
import { ImPriceTag } from "react-icons/im";
import { SiGoogleclassroom } from "react-icons/si";
import { HiThumbUp } from "react-icons/hi";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CompassBoxes } from "../../products/products";

function Home() {
  return (
    <>
      <section id="home-top">
        <div className="container">
          <h1>
            <span className="accent">Quality</span> begins here.
          </h1>
          <img src={landingImg} alt="Stylo Stationery" />
        </div>
        <div className="features">
          <div className="container">
            <div className="grid">
              <div className="feature">
                <SiGoogleclassroom />
                <h3>Classroom friendly</h3>
              </div>
              <div className="feature">
                <HiThumbUp />
                <h3>Quality Guaranteed</h3>
              </div>
              <div className="feature">
                <ImPriceTag />
                <h3>Affordable Pricing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="best-selling">
        <div className="container">
          <h2>Best Selling Products</h2>
          <div className="grid">
            <ProductCard product={CompassBoxes[1]} />
            <ProductCard product={CompassBoxes[2]} />
            <ProductCard product={CompassBoxes[4]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
