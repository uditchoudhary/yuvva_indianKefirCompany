import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <div className="App">
      <Router>
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
            <Route path="/about" element={<AboutPage />}/>
            {/* <Route path="/users">
              <Users />
            </Route> */}
            <Route path="/" element={<LandingPage />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
