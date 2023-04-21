import React from "react";
import styles from "../styles/contact.module.css";
import logo from "../public/assets/images/logo.png";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMail, AiOutlinePlus } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
function contacts() {
  return (
    <div className={styles.contacts}>
      <Navbar pageTitle="Contact" />
      <div className={styles.contact}>
        <div className={styles.top}>
          <Image
            className={styles.logo}
            src={logo}
            alt="My Image"
            width={500}
            height={300}
          />
          <div className={styles.content}>
            <div className={styles.title}> Need Help?</div>
            <div className={styles.text}>
              Navi school high school casablanca
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.title}>connect us</div>
          <div className={styles.tel}>
            <BsFillTelephoneFill /> 0536741256
          </div>
          <div className={styles.email}>
            <AiOutlineMail /> navischolol@gmail.com
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.title}>Write us directly</div>
          <div className={styles.input}>
            <div className={styles.icon}>
              <AiOutlineMail />
            </div>
            <TextField
              id="standard-basic"
              variant="standard"
              placeholder="votre message"
              className={styles.Textfield}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <Button variant="contained" className={styles.button}>
            Contained
          </Button>
        </div>
      </div>
    </div>
  );
}

export default contacts;
