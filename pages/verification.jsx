import React from "react";
import { AiFillStepBackward } from "react-icons/ai";
import styles from "../styles/verification.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
function verification() {
  return (
    <div className="verification">
      <div className={styles.top}>
         <Link href="/signin" legacyBehavior>
          <AiFillStepBackward />
        </Link>
        <div>Verification</div>
      </div>
      <div className={styles.center}>
        <div className={styles.number}>+212 6 15 88 07 58</div>
        <div className={styles.text}>Enter opt we've sent your above given number. </div>
      </div>
      <div className={styles.bottom}>
      <TextField id="outlined-basic" label="" variant="outlined" className={styles.Textfield} placeholder="Saisir votre OPT" type="number" inputProps={{
    step: "any",
    style: { '-webkit-appearance': 'none', '-moz-appearance': 'textfield' }
  }}/>
      <Button variant="contained" className={styles.button}>Contained</Button>
      <div className={styles.opt}>Resend OPT</div>
      </div>
    </div>
  );
}

export default verification;
