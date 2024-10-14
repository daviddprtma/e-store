import "./App.css";
import React, { useEffect, useState } from "react";
import { fetcher } from "./fetcher";
import Category from "./components/Category";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("/categories");
      setCategories(data);
    }
    fetchData();
  }, []);

  const handleCategoryClick = (id) => {
    fetch("http://localhost:3001/products?=" + id)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const renderCategory = () => {
    return categories.map((result) => (
      <Category
        key={result.id}
        id={result.id}
        title={result.title}
        onCategoryClick={() => handleCategoryClick(result.id)}
      />
    ));
  };

  const renderProducts = () => {
    return products.map((result) => (
      <div key={result.id}>
        <p>{result.title}</p>
      </div>
    ));
  }
  return (
    <>
      <header>My Store</header>
      <section>
        <nav>{categories && renderCategory()}</nav>
        <article>
          <h1>Products </h1>
          {products && renderProducts()}
        </article>
      </section>
      <footer>My Footer</footer>
    </>
  );
}

export default App;
