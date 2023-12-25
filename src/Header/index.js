import ProfilePic from "./ProfilePic";
import NameDetails from "./NameDetails";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <ProfilePic />
      <NameDetails />
    </div>
  );
};
export default Header;
