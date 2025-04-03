import React from "react";

function Header(onSearch) {
  return (
    <>
      <header>
        <h1>RunTown Store!</h1>
        <nav>
          <a href="/" className="home-link">
            {" "}
            Home
          </a>
          <a href="/products" className="product-link">
            Products
          </a>
        </nav>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </>
  );
}

export default Header;
