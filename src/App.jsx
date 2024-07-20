import { useState } from "react";
import "./App.css";
import HeroBanner from "./components/hero/HeroBanner";

function App() {
  return (
    <>
      <div className="top-menu">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="menu-items">{/* Add your menu items here */}</div>
      </div>
      <HeroBanner />
    </>
  );
}

export default App;
