import React from "react";
import styles from "../styles/student.module.css";
import logo from "../public/assets/images/enfant.jpg";
import Image from "next/image";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
function student() {
  return (
    <section className={styles.students}>
       <Navbar pageTitle="Student" />
      <div className={styles.student}>
        <div className={styles.left}>
          <Image
            className={styles.image}
            src={logo}
            alt="My Image"
            width={500}
            height={300}
          />{" "}
        </div>{" "}
        <div className={styles.right}>
          <div className={styles.name}> daniel perroni </div>{" "}
          <div className={styles.school}> name of school </div>{" "}
          <div className={styles.class}> class </div>{" "}
          <div className={styles.bottom}>
            <div className={styles.status}> status </div>{" "}
            <Button variant="contained" className={styles.button}>
             Absent{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
}

export default student;
