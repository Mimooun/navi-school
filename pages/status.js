import React from "react";
import styles from "../styles/status.module.css";
import bus from "../public/assets/images/autobus.png";
import Image from "next/image";
function status() {
  return (
    <section className="">
      <div className={styles.tabfirst}>
        <Image
          className={styles.bus}
          src={bus}
          alt="My Image"
          width={200}
          height={200}
        />
         <p className={styles.title}>No Route to show</p> 
      </div>
    </section>
  );
}

export default status;
