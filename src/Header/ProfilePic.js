import React from "react";
// import pic from "../resources/img_avatar.png";
import pic from "../resources/Profile_pic.JPG";
import styles from "./ProfilePic.module.css";
function ProfilePic(props) {
  return (
    <div>
      <div>
        <img src={pic} className={styles.imageContainer} alt="profile pic" />
      </div>
    </div>
  );
}

export default ProfilePic;
