import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="basket" element={<Basket />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
