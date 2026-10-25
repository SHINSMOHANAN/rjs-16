import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page-card">
      <h2>Home</h2>
      <p>Welcome to the Home Page.</p>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="page-card">
      <h2>About Us</h2>
      <p>Welcome to the About Us Page.</p>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="page-card">
      <h2>Contact Us</h2>
      <p>Welcome to the Contact Us Page.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>My React Website</h1>

          <nav>
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/aboutus">About Us</Link>
            <span>|</span>
            <Link to="/contactus">Contact Us</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
