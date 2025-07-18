import React, { useEffect, useState } from 'react';

function Products() {

  const [products, setProducts] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

  return (
    <div>
      <h1>Products</h1>
        <ul>
          {products.map((p) => (
            <li key={p.id}>{p.name}-{p.price}</li>
          ))}
        </ul>
    </div>
  )
}
export default Products