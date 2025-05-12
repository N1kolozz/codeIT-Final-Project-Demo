'use client'
import styles from './AddToCart.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { usePathname } from "next/navigation";


function AddToCart({ product }) {

  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const pathname = usePathname();





  const handleAddCart = async () => {
    const results = await JSON.parse(localStorage.getItem('products'));

    if (results === null) {
      localStorage.setItem('products', JSON.stringify([{ product: product, count: 1 }]))

    } else {
      const index = results.findIndex(item => item.product.id === product.id)

      if (index > -1) {
        router.replace("/products", { path: "products" });
        results[index].count++;
      } else {
        results.push({ product: product, count: 1 });
        router.replace("/products", { path: "products" });

      }


      localStorage.setItem('products', JSON.stringify([...results]))

    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);

  }


  return (
    <>
      <button onClick={handleAddCart} className={styles.addToCart}>
        Add to cart
      </button>

      {showAlert && (
        <div className={styles.alert}>
          ✅ Item added to cart!
        </div>
      )}
    </>
  )
}

export default AddToCart
