import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
         </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
