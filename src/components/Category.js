import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../fetcher";
import CategoryProduct from "./CategoryProduct";

const Category = () => {
  const [products, setProducts] = useState({ errorMessage: "", data: [] });
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getProducts(id);
      setProducts(responseData);
    };
    fetchData();
  }, [id]);
  const renderProducts = () => {
    return products.data.map((result) => (
      <CategoryProduct key={result.id} {...result}>
        {result.title}
      </CategoryProduct>
    ));
  };
  return (
    <div>
      {products.errorMessage && <div>{products.errorMessage}</div>}
      {products && renderProducts()}
    </div>
  );
};

export default Category;
