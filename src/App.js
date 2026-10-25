import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>My React Website</h1>
          <Navigation />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
