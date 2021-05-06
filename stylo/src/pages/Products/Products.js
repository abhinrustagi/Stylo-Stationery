import React from "react";
import "../../styles/pages/products.scss";
import Catalogue from "../../products/catalogue.pdf";

import {
  CompassBoxes,
  Compass,
  Chalk,
  Pencil,
  Erasers,
  Dusters,
  Clipboard,
} from "../../products/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
  return (
    <>
      <section id="products-top">
        <div className="container">
          <h1>
            Our <span className="accent">products</span>
          </h1>
          <a href={Catalogue} download>
            <button>Download Complete Catalogue</button>
          </a>
          <h2>Geometry Boxes</h2>
          <div className="grid">
            {CompassBoxes.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          <h2>Compass</h2>
          <div className="grid">
            {Compass.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          <h2>Erasers</h2>
          <div className="grid">
            {Erasers.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          <h2>Dusters</h2>
          <div className="grid">
            {Dusters.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          <h2>Pencil</h2>
          <div className="grid" style={{ maxWidth: "350px" }}>
            {Pencil.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          <h2>Chalk</h2>
          <div className="grid" style={{ maxWidth: "350px" }}>
            {Chalk.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          <h2>Clipboard</h2>
          <div className="grid" style={{ maxWidth: "350px" }}>
            {Clipboard.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
