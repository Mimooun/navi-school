import React from "react";
import styles from "../styles/signin.module.css";
import logo from "../public/assets/images/user_app.png";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function signin() {
  return (
    <div className={styles.signin}>
       <Navbar pageTitle="Signin"/>
      <div className={styles.top}>
        <Image
          src={logo}
          alt="My Image"
          width={500}
          height={300}
          className={styles.img}
        />
        <div className={styles.title}>
          {" "}
          <span>School</span> bus
        </div>
      </div>
      <div className={styles.text}>
        Ente 10 digit mobile number register at your children's school.
      </div>
      <div className={styles.container}>
        <TextField
          id="outlined-basic"
          placeholder="Saisir votre num"
          className={styles.textField}
          type="number"
          inputProps={{
            step: "any",
            style: { '-webkit-appearance': 'none', '-moz-appearance': 'textfield' }
          }}
        />
      </div>
      <div className={styles.btn}>
        <Link href="/verification" legacyBehavior>
          <div className={styles.btn}>
            <Button variant="contained" className={styles.button}>
            Sign in
          </Button>
          </div>
          
        </Link>
      </div>
    </div>
  );
}

export default signin;
