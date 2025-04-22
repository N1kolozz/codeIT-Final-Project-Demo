'use client';

import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";


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
        </nav>
      {children}
    </div>
  );
}

export default layout;
