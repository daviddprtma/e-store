import "./App.css";
import React, { useEffect, useState } from "react";
import { getCategories } from "./fetcher";

import ProductDetail from "./components/ProductDetail";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import Category from "./components/Category";
import Layout from "./components/Layout";
import Home from "./components/Home";

import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getCategories();
      setCategories(responseData);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories}></Layout>}>
            <Route index element={<Home />} />
            {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="categories/:id" element={<Category />} />
            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
