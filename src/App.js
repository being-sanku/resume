import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import AddressTab from "./AddressTab/AddressTab";
import MainBody from "./MainBody";
function App() {
  return (
    <div className="App">
      <Header />
      <AddressTab />
      <MainBody />
    </div>
  );
}

export default App;
