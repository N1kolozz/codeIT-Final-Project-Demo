'use client'
import styles from './AddToCart.module.css'


function AddToCart({product}) {

   

    const handleAddCart = async () => {
        const results = await JSON.parse(localStorage.getItem('products'));

        if (results === null) {
            localStorage.setItem('products', JSON.stringify([product]))
        } else {
            localStorage.setItem('products', JSON.stringify([...results, product]))
        }

    }


    return (
        <button
            onClick={handleAddCart}
            className={styles.addToCart}
        >
            Add to cart
        </button>
    )
}

export default AddToCart
