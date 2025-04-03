import { useState, useEffect } from "react";
// useState manages component state
// useEffect reacts to state/prop changes
// Together they enable stateful logic in functional components

function Main() {
  const [products, setProducts] = useState([]);
  // Indicates an array with two elements: products = Current state value, and setProducts = Function to update the state
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
        <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-blue-700">Welcome to Our Store!</h2>
        <p className="mt-4 text-gray-600">Discover our amazing products and enjoy exclusive deals.</p>
      </section>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="cart-count">Cart: {cart.length} items</div>


      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
            <p>${product.price}</p>
            <div className="product-actions">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-section">
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="50" />
              <span>{item.title}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
export default Main;