import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cartContext } from "../contexts/cartContext";

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
`;

const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
`;

const ProductImageContainerImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryProduct = ({
  id,
  title,
  image,
  specs,
  features,
  price,
  stock,
}) => {
  const navigate = useNavigate();
  const cartcontext = useContext(cartContext);
  const { addProduct } = cartcontext;
  return (
    <article>
      <ProductTitle>
        <Link to={`/products/${id}`}>{title}</Link>
      </ProductTitle>

      <figure>
        <ProductImageContainer>
          <ProductImageContainerImg src={`/assets/${image}`} alt="{title}" />
        </ProductImageContainer>
      </figure>

      <aside>
        <ProductInfo>
          <h3>Dimensions</h3>
          <label>{specs.dimensions}</label>
        </ProductInfo>

        {specs.capacity && (
          <ProductInfo>
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
          </ProductInfo>
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
            <button onClick={() => navigate(`/products/${id}`)}>
              View Product
            </button>
            <button
              onClick={() =>
                addProduct({ id, title, image, specs, features, price, stock })
              }
            >
              ADD TO BASKET
            </button>
          </div>
        </aside>
      </aside>
    </article>
  );
};

export default CategoryProduct;
