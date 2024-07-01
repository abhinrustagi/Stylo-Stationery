import img from "img/packing.png";
import { useLoaderData } from "react-router-dom";
import "styles/pages/product.scss";
import { HelmetConfig } from "utils";

function Product() {
  const { product } = useLoaderData();

  console.log(product);
  return (
    <>
      <HelmetConfig title={product?.name} path={"/products/" + product?.slug} />
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
    </>
  );
}

export { Product };
