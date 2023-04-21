import React from "react";
import Image from "next/image";
import img from "../public/assets/images/Xavier_high.jpg";
import styles from "../styles/about.module.css";
import Navbar from "@/components/Navbar";

function about() {
  return (
    <div  className={styles.abouts}>
      <Navbar pageTitle="About"/>
      <div className={styles.about}>
        <div className={styles.container}>
            <Image src={img} alt="My Image" width={500} height={300} className={styles.img} />
            <div className={styles.title}>st.Xavier High School</div>
            <div className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      
    </div>
    </div>
    
  );
}

export default about;
