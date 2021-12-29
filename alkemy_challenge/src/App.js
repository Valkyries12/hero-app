import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { hasToken } from "./utils";
import HeroDetails from "./components/HeroDetails";

function App() {
  const [isLogged, setIsLogged] = useState(hasToken());
  // hacer un useEffect con el tokenn de localstorage par renderizar si esta logeado o no

  return (
    <div className="App">
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <Routes>
        <Route exact path="/" element={isLogged ? <Home /> : <Login setIsLogged={setIsLogged} />} />
        <Route path="/details/:id" element={<HeroDetails />} />
      </Routes>
    </div>
   
  );
}

export default App;
