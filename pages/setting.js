import React from "react";
import styles from "../styles/setting.module.css";
import { MdModeEditOutline } from "react-icons/md";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Navbar from "@/components/Navbar";
function setting() {
  return (
    <div className={styles.settings}>
      <Navbar pageTitle="Setting " />
      <div className={styles.setting}>
        <div className={styles.subtitle}>Reminder Setting</div>
        <div className={styles.pik}>
          <div className={styles.left}>
            <div className={styles.title}>Pick up reminder</div>
            <div className={styles.km}>Before 2.0km</div>
          </div>
          <div className={styles.right}>
            <div>
              {" "}
              <MdModeEditOutline />
            </div>
          </div>

          <div className={styles.left}>
            <div className={styles.title}>Drop reminder</div>
            <div className={styles.km}>Before 1.0km</div>
          </div>
          <div className={styles.right}>
            <div>
              {" "}
              <MdModeEditOutline />
            </div>
          </div>
        </div>
        <div className={styles.subtitle}>Set Notification Alert</div>
        <div className={styles.checked}>
          <div className={styles.chekleft}>
            <div className={styles.checkbox}>
              {" "}
              <Checkbox />
            </div>
          </div>
          <div className={styles.chekleft}>
            <label> Pick up Notifications</label>
            <div className={styles.content}>
              {" "}
              notif when your bus at pick in point
            </div>
          </div>
        </div>

        <div className={styles.checked}>
          <div className={styles.chekleft}>
            <div className={styles.checkbox}>
              {" "}
              <Checkbox />
            </div>
          </div>
          <div className={styles.chekleft}>
            <label> Pick up Notifications</label>
            <div className={styles.content}>
              {" "}
              notif when your bus at pick in point
            </div>
          </div>
        </div>

        <div className={styles.checked}>
          <div className={styles.chekleft}>
            <div className={styles.checkbox}>
              {" "}
              <Checkbox />
            </div>
          </div>
          <div className={styles.chekleft}>
            <label> Pick up Notifications</label>
            <div className={styles.content}>
              {" "}
              notif when your bus at pick in point
            </div>
          </div>
        </div>
        <div className={styles.checked}>
          <div className={styles.chekleft}>
            <div className={styles.checkbox}>
              {" "}
              <Checkbox />
            </div>
          </div>
          <div className={styles.chekleft}>
            <label> Pick up Notifications</label>
            <div className={styles.content}>
              {" "}
              notif when your bus at pick in point
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <Button variant="contained" className={styles.Button}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default setting;
