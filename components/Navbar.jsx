import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import mz from "../public/assets/images/mimoun.jpg";
import { FaUsers ,FaSchool } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";
import {ImLocation2} from "react-icons/im";
import {AiFillSetting} from "react-icons/ai"
import {CgMailOpen} from "react-icons/cg"
function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <div className={styles.subcontent}>
          <div onClick={handleMenuClick}>
            <GiHamburgerMenu />
          </div>
          <p className={styles.title}>{props.pageTitle}</p>
          <div>
            <AiOutlinePlus />
          </div>
        </div>
        {isMenuOpen && (
          <ul className={styles.menu}>
            <div className={styles.img}>
              <Image
                className={styles.image}
                src={mz}
                alt="My Image"
                width={200}
                height={200}
              />
            </div>
            <div className={styles.name}>Name user</div>
            <div className={styles.num}> user</div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.card_left}>
                  <FaUsers />
                </div>
                <div className={styles.card_right}>
                  <div className={styles.title_one}> My Children</div>
                  <div className={styles.title_two}>Liste of children</div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card_left}>
                  <BiUserPlus />
                </div>
                <div className={styles.card_right}>
                  <div className={styles.title_one}> Guardian Profile</div>
                  <div className={styles.title_two}>
                    Add / Edite guardian profile
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card_left}>
                  <ImLocation2 />
                </div>
                <div className={styles.card_right}>
                  <div className={styles.title_one}> Edite Location</div>
                  <div className={styles.title_two}>
                    Set pick / Drop location
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.card_left}>
                  <AiFillSetting />
                </div>
                <div className={styles.card_right}>
                  <div className={styles.title_one}>Setting</div>
                  <div className={styles.title_two}>
                    Reminder & setting
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.card_left}>
                  <FaSchool />
                </div>
                <div className={styles.card_right}>
                  <div className={styles.title_one}>About School</div>
                  <div className={styles.title_two}>
                    Know about school
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.card_left}>
                  <CgMailOpen />
                </div>
                <div className={styles.card_right}>
                  <div className={styles.title_one}>Contact Us</div>
                  <div className={styles.title_two}>
                    Let us know ur query
                  </div>
                </div>
              </div>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
