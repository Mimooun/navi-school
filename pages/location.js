import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "@/components/Navbar";
import Map from "@/components/Map";
import styles from "../styles/location.module.css";
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    
    <div 
      className={styles.loc}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className={`css-19kzrtu ${styles.myCssClass}`}>
          {children}
          {index === 0 && <Map />}{" "}
          {/* Affiche la carte dans l'onglet "Pick up" */}
          {index === 1 && <Map />}
        </Box>
      )}
      <div className={styles.input}>
        <input
          type="text"
          className={styles.inp}
          placeholder="Search localisation"
        ></input>
      </div>
      <div className={styles.btn}>
      <Button variant="contained" className={styles.button}>Contained</Button>
      </div>
      
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%"}}>
      <Navbar pageTitle="Edite" />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} >
        <div className={styles.tabs}>
          <Tabs 
           className={styles.mycustomtabs}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Pick up" className={styles.myCustomTabs} {...a11yProps(0)} />
            <Tab label="Drop" {...a11yProps(1)} />
          </Tabs>
        </div>
      </Box>
      <TabPanel  value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </Box>
  );
}
