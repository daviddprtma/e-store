import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProductsByQuery } from "../fetcher";
import CategoryProduct from "./CategoryProduct";

const SearchResults = () => {
  const [products, setProducts] = useState({ errorMessage: "", data: [] });
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductsByQuery(query);
      if (response.errorMessage) {
        setProducts({ errorMessage: response.errorMessage, data: [] });
      } else {
        setProducts({ errorMessage: "", data: response.data });
      }
      
    };
    fetchData();
  }, [query]);

  const renderProducts = () => {
    if (products.errorMessage) {
      return <p>{products.errorMessage}</p>;
    }
    return products.data.map((product) => (
      // check if there's null data
      <CategoryProduct key={product.id} {...product} />
    ));
  };
  return (
    <div>
      <h2>Search Results</h2>
      {renderProducts()}
    </div>
  );
};

export default SearchResults;
