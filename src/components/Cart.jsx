import React, { useState } from 'react';

function Product({ name, price, addToCart }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

function Cart({ items }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    const newItem = { id: Math.random(), name: "Product 1", price: 10 };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      <Product name="Product 1" price={10} addToCart={addToCart} />
      <Cart items={cartItems} />
    </div>
  );
}

export default App;