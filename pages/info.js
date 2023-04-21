import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Map from "@/components/Map";
import styles from "../styles/info.module.css";
import mz from "../public/assets/images/mimoun.jpg";
import Image from "next/image";

import Status from "../pages/status"
import Businfo from "../pages/businfo"
import History from "../pages/calendarComponent "
function TabPanel(props) {
    
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className={`css-19kzrtu ${styles.myCssClass}`}>
          {children}
          {index === 0 && <Status />}{" "}
          {/* Affiche la carte dans l'onglet "Pick up" */}
          {index === 1 && <History/>}
          {index === 2 && <Businfo />}
        </Box>
      )}
    </div>
  );
}

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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Map />
        <div className={styles.tabs}>
          <div className={styles.img}>
            <Image
              className={styles.image}
              src={mz}
              alt="My Image"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Status" {...a11yProps(0)} />
              <Tab label="History" {...a11yProps(1)} />
              <Tab label="Bus info" {...a11yProps(2)} />
            </Tabs>
          </div>
        </div>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
    </Box>
  );
}
