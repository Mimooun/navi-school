import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "../styles/Profile.module.css";
import mz from "../public/assets/images/mimoun.jpg";
import Navbar from "@/components/Navbar";

function profile() {
  return (
    <div className={styles.profiles}>
      <Navbar pageTitle="Profile"/>
      <div className={styles.profile}>
      <div className={styles.maxwidth}>
        <div className={styles.edite}>
          <div className={styles.left}>
            <div>Smith lorem</div>
            <div className={styles.father}>Father </div>
            <div className= {styles.editsub}>
              <div>
                <BsFillTelephoneFill />
              </div>
              <div className={styles.inf}>
                <div>Contact number</div>
                <div>0615880758</div>
              </div>
            </div>
            <div className= {styles.editsub}>
              <div>
                <AiOutlineMail />
              </div>
              <div>
                <div>Email adresse</div>
                <div>zouhrimimoiun21@gmail.com</div>
              </div>
            </div>
            
          </div>
          <div className={styles.right}>
            <Image
              className={styles.image}
              src={mz}
              alt="My Image"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className={styles.cnt}>Edite</div>
      </div>
    </div>
    </div>
    
  );
}

export default profile;
