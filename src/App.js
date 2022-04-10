import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";
import NavigationBar from "./Components/NavigationBar";
import OurRoots from "./Containers/OurRoots";
import Probiotics from "./Components/ProductPages/Probiotics/";
import Organics from "./Components/ProductPages/Organics";
import ContactUs from "./Containers/ContactUs";
import Login from "./Containers/Login";
import Cart from "./Containers/CartPage";
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
