import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/OurRoots";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import OutRoots from "./Components/OurRoots/OurRoots";

function App() {
  return (
    <div className="App">
      <NavigationBar />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ourroots" element={<OutRoots/>}/>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
