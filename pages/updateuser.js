import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/updateuser.module.css";
import { FaUser, FaUsers } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillCamera } from "react-icons/ai";
import Dropzone from "react-dropzone";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "@/components/Navbar";
function updateuser() {
  const [image, setImage] = useState("");
  function handleImageUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  }
  
  return (
    
    <div className={styles.updateuser}>
      <Navbar pageTitle="User "/>
      <div className={styles.img}>
        <div className={styles.icon} onClick={() => document.getElementById("myInput").click()}>
          <AiFillCamera /* style={{ marginLeft: '100px' , marginTop: "-200px" }} */ className={styles.AiFillCamera} />
          <input
            type="file"
            id="myInput"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
        {image && (
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              width: "130px",
              height: "130px",
              borderRadius: "100%",
            }}
          />
        )}
      </div>
      <div className={styles.infouser}>
        <div className="avatar">
          <FaUser />
        </div>
        <div className={styles.wrp}>
          <div className={styles.title}> Full name</div>
          <TextField
            id="standard-basic"
            variant="standard"
            className={styles.Textfield}
          />
        </div>
      </div>

      <div className={styles.infouser}>
        <div className="avatar">
          <FaUsers />
        </div>
        <div className={styles.wrp}>
          <div className={styles.title}>Relation with student</div>
          <TextField
            id="standard-basic"
            variant="standard"
            className={styles.Textfield}
          />
        </div>
      </div>

      <div className={styles.infouser}>
        <div className="avatar">
          <BsFillTelephoneFill />
        </div>
        <div className={styles.wrp}>
          <div className={styles.title}>Contact number</div>
          <TextField
            id="standard-basic"
            variant="standard"
            className={styles.Textfield}
          />
        </div>
      </div>

      <div className={styles.infouser}>
        <div className="avatar">
          <MdEmail />
        </div>
        <div className={styles.wrp}>
          <div className={styles.title}>Email address</div>
          <TextField
            id="standard-basic"
            variant="standard"
            className={styles.Textfield}
          />
        </div>
      </div>
      <Button variant="contained" className={styles.Button}>
        Save
      </Button>
    </div>
  );
}

export default updateuser;
