import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm) {
        navigate(`/search?q=${searchTerm}`);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm, navigate]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div id="search">
      <label>Search</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
