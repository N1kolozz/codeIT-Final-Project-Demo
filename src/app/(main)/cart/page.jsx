"use client"
import React from 'react'
import { useEffect, useState } from 'react'



function page() {

  const [cartProducts, setCartProducts] = useState([])

  const getProductsFromStorage = async () => {
    const products = await JSON.parse(localStorage.getItem('products'));
  
    if (products === null || products === undefined) {
      setCartProducts([]);
    } else {
      setCartProducts(products);
    }
  };

  useEffect(() => {
    getProductsFromStorage();
  }, []);
  
  return (
    <div>
      
      {cartProducts.map((prod) => (
        <div key={prod.id}>
          <h1>{prod.title}</h1>
          <p>{prod.description}</p>
        </div>
        ))}
    </div>
  );
}

export default page
