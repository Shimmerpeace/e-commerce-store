import React, { useState } from "react";
import Header from "./components/header";
import ProductList from "./components/productList";
import Cart from "./components/cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="ecommerce-app">
      <Header />
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
