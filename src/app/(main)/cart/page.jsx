"use client"


import React from 'react'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'



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
    <div className={styles.container}>

      {cartProducts.map((prod) => (
        <div className={styles.itemContainer} key={prod.id}>
          <div>
            <Image src={prod.image} width={200} height={200} alt="product-image" />
          </div>

          <div className={styles.infoContainer}>
            <h2>{prod.title}</h2>
            <p className={styles.itemDesc}>{prod.description}</p>
            <h4>{prod.price}$</h4>
            <div className={styles.ratingWrapper}>
              <p>{prod.rating.rate}/5</p>
              <p>{prod.rating.count} reviews</p>
            </div>
            <button className={styles.removeBtn} onClick={() => {
              const updatedProducts = cartProducts.filter((product) => product.id !== prod.id);
              setCartProducts(updatedProducts);
              localStorage.setItem('products', JSON.stringify(updatedProducts));
            }}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page
