import { useState } from "react";
import styles from "../styles/businfo.module.css";
import { ImUserTie } from "react-icons/im";
import { BsFillTelephoneFill , BsFillBusFrontFill} from "react-icons/bs";
import {AiFillInfoCircle} from "react-icons/ai"
import { FaSchool } from "react-icons/fa";
function businfo(props) {
    const [telephoneNumber, setTelephoneNumber] = useState("0536710581");
    const [telephoneNumbertwo, setTelephoneNumbertwo] = useState("0615880758");
  function handleClick() {
    window.location.href = "tel:" + telephoneNumber;
  }  
  function handleClicktwo() {
    window.location.href = "tel:" + telephoneNumbertwo;
  }  
  return (
    <section className={styles.businfo}>
      <div className={styles.businfo_wrp}>
        <div className={styles.businfo_left}>
          <ImUserTie />
        </div>
        <div className={styles.businfo_center}>
          <div className={styles.name}>Driver Name</div>
          <div className={styles.donnes}>George Williomson</div>
        </div>
        <div className={styles.businfo_right}>
          <div onClick={handleClick}>
            <BsFillTelephoneFill  />{" "}
          </div>
        </div>
      </div>


      <div className={styles.businfo_wrp}>
        <div className={styles.businfo_left}>
          <BsFillBusFrontFill />
        </div>
        <div className={styles.businfo_center}>
          <div className={styles.name}>Bus Number</div>
          <div className={styles.donnes}>47569-BA</div>
        </div>
        
      </div>


      <div className={styles.businfo_wrp}>
        <div className={styles.businfo_left}>
          <AiFillInfoCircle />
        </div>
        <div className={styles.businfo_center}>
          <div className={styles.name}>Licence Number</div>
          <div className={styles.donnes}>BS5698-41</div>
        </div>
        
      </div>

      <div className={styles.businfo_wrp}>
        <div className={styles.businfo_left}>
          <FaSchool />
        </div>
        <div className={styles.businfo_center}>
          <div className={styles.name}>School Contact</div>
          <div className={styles.donnes}>+1 987 654 3210</div>
        </div>
        <div className={styles.businfo_right}>
          <div  onClick={handleClicktwo}>
            <BsFillTelephoneFill />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default businfo;
