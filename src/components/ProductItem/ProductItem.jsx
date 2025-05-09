import Image from "next/image";
import styles from "./ProductItem.module.css";
import AddToCart from "../AddToCart/AddToCart";


function ProductItem({ item }) {
  return (
    <section className={styles.itemContainer}>
      <div>
        <div className={styles.imageContainer}>
          <Image src={item.image} width={120} height={140} alt="item-image" />
        </div>
        <h3 className={styles.title}>{item.title}</h3>
      </div>
      <div>
        <p className={styles.desc}>{item.description}</p>
      </div>
      <div className={styles.priceContainer}>
        <h4 className={styles.price}>{item.price}$</h4>
        <div className={styles.ratingWrapper}>
          <p className={styles.rating}>{item.rating.rate}/5</p>
          <p className={styles.ratingCount}>{item.rating.count} reviews</p>
          <Image src={"/assets/images/stars-rating.svg"} width={84} height={10} alt="rating-stars" />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <AddToCart product={item} />
      </div>
    </section>
  );
}

export default ProductItem;
