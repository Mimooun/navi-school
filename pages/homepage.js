import React from "react";
import styles from "../styles/homapage.module.css";
import Navbar from "@/components/Navbar";
function homapage() {
  return (
    <div className={styles.hpages}>
      <Navbar pageTitle="Home" />
      <div className={styles.hpage}>
        <div className={styles.notif}>
          <div className={styles.notifleft}>
            <div className={styles.dropped}>Dropped</div>
            <div className={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className={styles.notifright}>
            <div className={styles.time}>12:20</div>
          </div>
        </div>
        <div className={styles.ligne}></div>

        <div className={styles.notif}>
          <div className={styles.notifleft}>
            <div className={styles.dropped}>Dropped</div>
            <div className={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className={styles.notifright}>
            <div className={styles.time}>12:20</div>
          </div>
        </div>
        <div className={styles.ligne}></div>

        <div className={styles.notif}>
          <div className={styles.notifleft}>
            <div className={styles.dropped}>Dropped</div>
            <div className={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className={styles.notifright}>
            <div className={styles.time}>12:20</div>
          </div>
        </div>
        <div className={styles.ligne}></div>

        <div className={styles.notif}>
          <div className={styles.notifleft}>
            <div className={styles.dropped}>Dropped</div>
            <div className={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className={styles.notifright}>
            <div className={styles.time}>12:20</div>
          </div>
        </div>
        <div className={styles.ligne}></div>

        <div className={styles.notif}>
          <div className={styles.notifleft}>
            <div className={styles.dropped}>Dropped</div>
            <div className={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className={styles.notifright}>
            <div className={styles.time}>12:20</div>
          </div>
        </div>
        <div className={styles.ligne}></div>
      </div>
    </div>
  );
}

export default homapage;
