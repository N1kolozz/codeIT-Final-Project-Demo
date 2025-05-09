"use client"

import { useRouter } from "next/navigation";
import styles from "./SignOut.module.css";
import { FaSignOutAlt } from 'react-icons/fa';



const SignOut = () => {
    const router = useRouter();
    const handleSignOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userReg");
        router.replace("/");
      };
    return <button className={styles.signOutBtn} onClick={handleSignOut}> <FaSignOutAlt/> Sign Out</button>
};

export default SignOut;