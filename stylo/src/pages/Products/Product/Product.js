import React, { useEffect, useState } from "react";
import {
  CompassBoxes,
  Compass,
  Dusters,
  Chalk,
  Pencil,
  Erasers,
  Clipboard,
} from "../../../products/products";
import { useHistory } from "react-router-dom";
import img from "../../../img/packing.png";
import "../../../styles/pages/product.scss";

function Product({ match }) {
  const [product, setProduct] = useState(null);
  const History = useHistory();

  useEffect(() => {
    const searchByID = (arr, id) => {
      return arr.find((_) => _.id === id);
    };

    let id = parseInt(match.params.id);

    switch (parseInt(id / 100)) {
      case 1:
        setProduct(searchByID(CompassBoxes, id));
        break;
      case 2:
        setProduct(searchByID(Compass, id));
        break;
      case 3:
        setProduct(searchByID(Dusters, id));
        break;
      case 4:
        setProduct(searchByID(Erasers, id));
        break;
      case 5:
        setProduct(searchByID(Chalk, id));
        break;
      case 6:
        setProduct(searchByID(Pencil, id));
        break;
      case 7:
        setProduct(searchByID(Clipboard, id));
        break;
      default:
        History.push("/products");
        break;
    }
  }, [match.params.id, History]);
  return (
    <section id="product">
      <div className="container">
        <h1>{product?.name}</h1>
        <div className="grid">
          <div>
            <img src={product?.img[0]} alt={product?.name} />
          </div>
          <div>
            <h3 className="accent">{product?.Secondary}</h3>
            <h4>MRP: ₹ {product?.MRP}</h4>
            <h5>₹ {product?.WithGST} (With GST)</h5>
            <p>{product?.Contents}</p>
            <p>Units Per Box: {product?.UnitsPerBox}</p>
            <p>Boxes per Carton: {product?.BoxesPerCarton}</p>
            <p>Total Items: {product?.TotalItems}</p>
          </div>
        </div>
        {product?.img.length > 1 ? (
          <div className="grid">
            {product?.img.map((ss, _) => {
              return _ !== 0 ? (
                <div className="imgContainer">
                  <img src={ss} alt={product.name} />
                </div>
              ) : null;
            })}
          </div>
        ) : null}
        <img
          src={img}
          style={{ width: "100%", margin: "25px 0" }}
          alt="Stylo Stationery - Wholesale Stationery"
        />
      </div>
    </section>
  );
}

export default Product;
