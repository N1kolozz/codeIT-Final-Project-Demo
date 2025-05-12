import { AiOutlineCheckCircle } from 'react-icons/ai';
import styles from './Checkout.module.css';


export default function Checkout() {
  return (
    <div className={styles.container}>
        <div className={styles.checkContainer}>
            <h2> Check Out <AiOutlineCheckCircle/></h2>
        </div>
    </div>
  );
}
