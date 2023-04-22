import React from "react";
import styles from "../styles/Nav.module.css";
import logo from "../public/assets/images/user_app.png";
import Image from "next/image";
import Map from "../components/Map.jsx"
import Navbar from "./Navbar";
function Nav() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src={logo}
        alt="My Image"
        width={500}
        height={300}
      />
      <p className={styles.title}><span className={styles.span}> Navi</span> School</p>
    </div>
  );
}

export default Nav;
