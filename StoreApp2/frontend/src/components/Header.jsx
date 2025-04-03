import React from "react";

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center mb-[30px]">
      <h1>RunTown Store</h1>
      <nav>
        <a href="/" className="text-white mr-4 hover:underline">
          Home
        </a>
        <a href="/products" className="text-white hover:underline">
          Products
        </a>
      </nav>
    </header>
  );
}

export default Header;