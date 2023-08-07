import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Info from "./pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
