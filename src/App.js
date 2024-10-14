import "./App.css";
import React, { useEffect, useState } from "react";
import { getCategories, getProducts } from "./fetcher";
import Category from "./components/Category";
import CategoryProduct from "./components/CategoryProduct";

function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });
  const [products, setProducts] = useState({ errorMessage: "", data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getCategories();
      setCategories(responseData);
    };
    fetchData();
  }, []);

  const handleCategoryClick = (id) => {
    const fetchData = async () => {
      const responseData = await getProducts(id);
      setProducts(responseData);
    };
    fetchData();
  };

  const renderCategory = () => {
    return categories.data.map((result) => (
      <Category
        key={result.id}
        id={result.id}
        title={result.title}
        onCategoryClick={handleCategoryClick}
      />
    ));
  };

  const renderProducts = () => {
    return products.data.map((result) => (
      <CategoryProduct key={result.id} {...result}> {result.title}</CategoryProduct>
    ));
  };
  return (
    <>
      <header>My Store</header>
      <main>
        <nav>
          {categories.errorMessage && <div>{categories.errorMessage}</div>}
          {categories.data && renderCategory()}
        </nav>
        <article>
          <h1>Products </h1>
          {products.errorMessage && <div>{products.errorMessage}</div>}
          {products && renderProducts()}
        </article>
      </main>
      <footer>My Footer</footer>
    </>
  );
}

export default App;
