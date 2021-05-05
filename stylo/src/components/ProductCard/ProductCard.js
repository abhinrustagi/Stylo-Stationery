import React from "react";
import "../../styles/components/productCard.scss";

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <img src="" alt={`${product.name} - Stylo Stationery`} />
      <h4>{product.name}</h4>
    </div>
  );
}

export default ProductCard;
