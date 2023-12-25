// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
// import MiniProjects from "./MiniProjects";
import TicTacToe from "./MiniProjects/TicTacToe/TicTacToe";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {" "}
          <Route exact path="/" element={<Main />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          {/* <Route path="/contact" component={Main} /> */}
          {/* <Main /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
