import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Landing } from "./components/Landing/Landing";
import { Detail } from "./components/views/Detail";
import { CreateGame } from "./components/CreateGame/CreateGame";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      {/* {location.pathname === "/Home" && <Nav />} */}
      <Routes>
        {/* <Route path="/Home" element={<Nav />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/videogames/createGames" element={<CreateGame />} />
      </Routes>
    </div>
  );
}

export default App;
