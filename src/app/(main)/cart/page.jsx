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

  
  const handleAddOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    products[index].count++;

    setCartProducts(products);
    localStorage.setItem("products", JSON.stringify([...products]));
  };

  const handleRemoveOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    products[index].count--;
    if (products[index].count === 0) {
      products.splice(index, 1);
    }

    setCartProducts(products);
    localStorage.setItem("products", JSON.stringify([...products]));

  }

  return (
    <div className={styles.container}>

      {cartProducts?.map((prod) => (
        <div className={styles.itemContainer} key={prod.product.id}>
          <div>
            <Image src={prod.product.image} width={200} height={200} alt="product-image" />
          </div>

          <div className={styles.infoContainer}>
            <h3>{prod.product.title}</h3>
            <p className={styles.itemDesc}>{prod.product.description}</p>
            <h4>{prod.product.price}$</h4>
            <div className={styles.ratingWrapper}>
              <p>{prod.product.rating.rate}/5</p>
              <p>{prod.product.rating.count} reviews</p>
            </div>
            <div className={styles.btnWrapper}>
            <Image className={styles.imageHoverEffect} width={50} height={50} src={"/assets/images/trash-can-10417.svg"} alt='Remove'  onClick={() => {
              const updatedProducts = cartProducts.filter((item) => item.product.id !== prod.product.id);
              setCartProducts(updatedProducts);
              localStorage.setItem('products', JSON.stringify(updatedProducts));
            }}/>
            <button className={styles.removeOneBtn}  onClick={() => handleRemoveOne(prod.product)}>-</button>
            <h2 className={styles.itemQuantity}>{prod.count}</h2>
            <button className={styles.addOneBtn} onClick={() => handleAddOne(prod.product)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page
