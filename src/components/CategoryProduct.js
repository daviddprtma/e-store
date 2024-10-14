import React from "react";

const CategoryProduct = ({ title, image, specs, features, price, stock }) => {
  return (
    <article>
      <div className="category-product-title">
        <h1>{title}</h1>
      </div>

      <figure>
        <div className="category-product-image-container">
          <img src={`./assets/${image}`} alt="{title}" />
        </div>
      </figure>

      <aside>
        <div className="category-product-info-dimensions">
          <h3>Dimensions</h3>
          <label>{specs.dimensions}</label>
        </div>

        {specs.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
          </div>
        )}

        <div className="category-product-info-features">
          <h3>Features</h3>
          <ul>
            {features?.map((f) => {
              return <li key={f}>{f}</li>;
            })}
          </ul>
        </div>

        <aside className="category-product-finance">
          <div className="category-product-finance-price">&pound;{price}</div>
          <div className="category-product-info-stock">
            <label>Stock level: {stock}</label>
            <label>FREE DELIVERY</label>
          </div>

          <div className="category-product-action">
            <button>View Product</button>
            <button>ADD TO BASKET</button>
          </div>
        </aside>
      </aside>
    </article>
  );
};

export default CategoryProduct;
