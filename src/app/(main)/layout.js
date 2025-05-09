'use client';

import '../globals.css';
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import SignOut from "@/components/SignOut/SignOut";
import Footer from "@/components/Footer/Footer";


function layout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.pageWrapper}>
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
        <SignOut />
      </nav>

      <main className={styles.mainContent}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default layout;
