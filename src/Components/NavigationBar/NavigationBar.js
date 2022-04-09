import { Link } from "react-router-dom";
import logo from "../../static/images/yuuva_logo.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <>
      <div className="container-fluid navbar-wrapper ">
        <div className="justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
            <a className="navbar-brand me-auto ps-5" href="/">
              <img src={logo} alt="Logo" className="yuuva-logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="ms-auto navbar-nav pe-5">
                <Link className="nav-link" aria-current="page" to="/probiotics">
                  Probiotics
                </Link>
                <Link className="nav-link" to="/organics">
                  Organics
                </Link>
                <Link className="nav-link" to="/ourroots">
                  Our Roots
                </Link>
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
                <Link className="nav-link" to="/login">
                  Login / Logout
                </Link>
                <Link className="nav-link" to="/cart">
                  Cart (0)
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
