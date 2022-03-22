import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modify from "./pages/Modify";
import Delete from "./pages/Delete";

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path= "/register" element = {<Register/>} />
          <Route path= "/alterar" element = {<Modify/>} />
          <Route path = "/deletar" element = {<Delete/>} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
