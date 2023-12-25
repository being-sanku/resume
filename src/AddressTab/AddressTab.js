import React from "react";
import Tab from "./Tab";
import location from "../resources/location.png";
import gmail from "../resources/gmail.png";
import phone from "../resources/phone.png";
import linkedin from "../resources/linkedin.png";
import styles from "./AddressTab.module.css";
const details = [
  {
    logo: gmail,
    address: "thakaresanket01@gmail.com",
    action: () => {
      window.location = "mailto:thakaresanket01@gmail.com";
    },
  },
  {
    logo: phone,
    address: "+91-8380837852",
    action: () => {
      console.log("mail");
    },
  },
  {
    logo: location,
    address: "Pune",
    action: () => {
      console.log("mail");
    },
  },
  {
    logo: linkedin,
    address: "linkedin.com/in/sanket-thakare01",
    action: () => {
      console.log("mail");
    },
  },
];

function AddressTab(props) {
  return (
    <div>
      <div className={styles.AddressTab}>
        {details.map((item) => {
          return (
            <Tab
              logo={item.logo}
              key={item.address}
              address={item.address}
              action={item.action}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AddressTab;
