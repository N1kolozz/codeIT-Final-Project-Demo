'use client';

import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import SignOut from "@/components/SignOut/SignOut";


function layout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={`
          ${styles.link}
          ${pathname.includes("/products") ? styles.activeLink : styles.inActiveLink}
        `}
           href="/products"
           >
            products
            </Link>
        <Link className={`
          ${styles.link}
          ${pathname.includes('/profile') ? styles.activeLink : styles.inActiveLink}
          `} 
          href="/profile"
          >
            Profile
            </Link>
            <Link className={`
          ${styles.link}
          ${pathname.includes('/cart') ? styles.activeLink : styles.inActiveLink}
          `} 
          href="/cart"
          >
            Cart
            </Link>
            <SignOut/>
        </nav>
      {children}
    </div>
  );
}

export default layout;
