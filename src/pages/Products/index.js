import React from "react";
import "styles/pages/products.scss";

import { Products, catalogue } from "products";
import { ProductCard } from "components";
import { HelmetConfig } from "utils";

function ProductsPage() {
  return (
    <>
      <HelmetConfig title="Our Products" path="/products" />
      <section id="products-top">
        <div className="container">
          <h1>
            Our <span className="accent">products</span>
          </h1>
          <a href={catalogue} download>
            <button>Download Complete Catalogue</button>
          </a>
          <h2>Geometry Boxes</h2>
          <div className="grid">
            {Products.map((prod) =>
              prod.type === "compass_box" ? (
                <ProductCard key={prod.id} product={prod} />
              ) : null
            )}
          </div>
          <h2>Compass</h2>
          <div className="grid">
            {Products.map((prod) =>
              prod.type === "compass" ? (
                <ProductCard key={prod.id} product={prod} />
              ) : null
            )}
          </div>
          <h2>Erasers</h2>
          <div className="grid">
            {Products.map((prod) =>
              prod.type === "eraser" ? (
                <ProductCard key={prod.id} product={prod} />
              ) : null
            )}
          </div>
          <h2>Dusters</h2>
          <div className="grid">
            {Products.map((prod) =>
              prod.type === "duster" ? (
                <ProductCard key={prod.id} product={prod} />
              ) : null
            )}
          </div>
          <h2>Pencil</h2>
          <div className="grid" style={{ maxWidth: "350px" }}>
            {Products.map((prod) =>
              prod.type === "pencil" ? (
                <ProductCard key={prod.id} product={prod} />
              ) : null
            )}
          </div>
          <h2>Chalk</h2>
          <div className="grid" style={{ maxWidth: "350px" }}>
            {Products.map((prod) =>
              prod.type === "chalk" ? (
                <ProductCard key={prod.id} product={prod} />
              ) : null
            )}
          </div>
          <h2>Clipboard</h2>
          <div className="grid" style={{ maxWidth: "350px" }}>
            {Products.map((prod) =>
              prod.type === "clipboard" ? (
                <ProductCard key={prod.id} product={prod} />
              ) : null
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export { ProductsPage };
export { Product } from "./Product";
