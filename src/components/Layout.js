import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ({ categories }) => {
  const renderCategories = () => {
    return categories.data.map((c) => {
      return (
        <li key={c.id}>
          <Link to={`/categories/${c.id}`}>{c.title}</Link>
        </li>
      );
    });
  };
  return (
    <>
      <header>My Store</header>
      <section>
        <nav>
          {categories.errorMessage && <div>{categories.errorMessage}</div>}
          <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>
      <footer><Link to="/">Home</Link> | <Link to="/basket">Basket</Link></footer>
    </>
  );
};

export default Layout;
