// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import AddressTab from "./AddressTab/AddressTab";
import MainBody from "./MainBody";
// import Projects from "./Projects";
import MiniProjects from "./MiniProjects";

function Main() {
  return (
    <div>
      <Header />
      <AddressTab />
      <MainBody />
      <MiniProjects />
    </div>
  );
}

export default Main;
