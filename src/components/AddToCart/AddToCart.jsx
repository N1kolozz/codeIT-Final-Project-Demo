'use client'
import styles from './AddToCart.module.css'


function AddToCart() {
    return (
        <button
            onClick={() => {
                console.log('add to cart')
            }}
            className={styles.addToCart}
        >
            Add to cart
        </button>
    )
}

export default AddToCart
