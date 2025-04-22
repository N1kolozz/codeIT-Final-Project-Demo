import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";


const ProductDetails = async ({ params }) => {

  const {id} = await params;
  
  let response;

  try {
    response = await fetch(`https://fakestoreapi.com/products/${id}`);
  } catch (error) {
    throw Error("Error fetching product data", error);
  }
 
  const product = await response.json();



  return (
    <section className={styles.container}>
      <div className={styles.itemContainer}>
      <div>
        <div className={styles.imageContainer}>
          <Image src={product.image} width={200} height={200} alt="product-image"/>
        </div>
        <h3 className={styles.title}>{product.title}</h3>
      </div>
      <div>
        <p className={styles.desc}>{product.description}</p>
      </div>
      <div className={styles.priceContainer}>
        <h4 className={styles.price}>{product.price}$</h4>
        <div className={styles.ratingWrapper}>
            <p className={styles.rating}>{product.rating.rate}/5</p>
            <p className={styles.ratingCount}>{product.rating.count} reviews</p>
        </div>
      </div>
      <button className={styles.addToCart}>Add to cart</button>
    </div>
    <Link href="/products">
      <button className={styles.goBack}>Go back</button>
      </Link>
    </section>
    
    
  );
};

export default ProductDetails;
