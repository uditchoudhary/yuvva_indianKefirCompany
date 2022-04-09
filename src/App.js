import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import OurRoots from "./Components/OurRoots";
import Probiotics from "./Components/Probiotics/";
import Organics from "./Components/Organics/";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div>
        <Routes>
          <Route exact path="/ourroots" element={<OurRoots />} />
          <Route exact path="/probiotics" element={<Probiotics />} />
          <Route exact path="/organics" element={<Organics />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
