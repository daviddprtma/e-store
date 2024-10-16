import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../fetcher";

const ProductDetail = () => {
  const [product, setProducts] = useState({ errorMessage: "", data: [] });
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getProductsById(id);
      setProducts(responseData);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <article>
        <div className="category-product-title"> {product.data.title}</div>

        <figure>
          <div className="category-product-image-container">
            <img
              src={`/assets/${product.data.image}`}
              alt={product.data.title}
            />
          </div>
        </figure>

        <aside>
          <div className="category-product-info-dimensions">
            <h3>Dimensions</h3>
            <label>{product.data.specs?.dimensions}</label>
          </div>

          {product.data.specs?.capacity && (
            <div className="category-product-info-capacity">
              <h3>Capacity</h3>
              <label>{product.data.specs?.capacity}</label>
            </div>
          )}

          <div className="category-product-info-features">
            <h3>Features</h3>
            <ul>
              {product.data.features?.map((f, i) => {
                return <li key={`feature ${i}`}>{f}</li>;
              })}
            </ul>
          </div>

          <aside className="category-product-finance">
            <div className="category-product-finance-price">
              &pound;{product.data.price}
            </div>
            <div className="category-product-info-stock">
              <label>Stock level : {product.data.stock}</label>
              <br />
              <label>FREE DELIVERY</label>
            </div>

            <div className="category-product-action">
              <button>ADD TO BASKET</button>
            </div>
          </aside>
          <div>{product.data?.description}</div>
        </aside>
      </article>
    </div>
  );
};

export default ProductDetail;
