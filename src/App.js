import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Us page.</p>
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the Contact Us page.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/rjs-16">
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/aboutus">About Us</Link>{" | "}
        <Link to="/contactus">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
