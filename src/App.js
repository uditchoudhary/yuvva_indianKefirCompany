import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";
import NavigationBar from "./Components/NavigationBar";
import OurRoots from "./Containers/OurRoots";
import Probiotics from "./Containers/ProductPages/Probiotics";
import Organics from "./Containers/ProductPages/Organics";
import ContactUs from "./Containers/ContactUs";
import Login from "./Containers/Login";
import Cart from "./Containers/CartPage";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import ProductCategoryPage from "./Containers/ProductCategoryPage";
import BrokenLink from "./Containers/BrokenLink";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div>
        <Routes>
          <Route exact path="/ourroots" element={<OurRoots />} />
          <Route exact path="/probiotics" element={<Probiotics />} />
          <Route
            exact
            path="/products/:category/:name"
            element={<ProductCategoryPage />}
          />
          <Route
            exact
            path="/product/:id/details"
            element={<ProductDetails />}
          />
          <Route exact path="/organics" element={<Organics />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<BrokenLink />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
