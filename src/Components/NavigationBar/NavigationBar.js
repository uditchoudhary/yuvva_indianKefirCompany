import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../static/images/yuuva_logo.png";
import "./NavigationBar.css";

const NavbarWrapper = styled.div`
  width: 80vw;
  border-bottom: 1px solid black;
  transition: 1s;
`;

const NavBarLogo = styled.img`
  width: 80px;
  height: auto;
`;

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#ffffff";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
};
const NavigationBar = () => {
  return (
    <>
      <NavbarWrapper className="container-fluid sticky-top" id="navbar">
        <div className="justify-content-center">
          <nav className="navbar navbar-expand-lg d-flex">
            <a className="navbar-brand me-auto ps-5" href="/">
              <NavBarLogo src={logo} alt="Logo" className="yuuva-logo" />
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
                <Link className="nav-link ms-3" to="/organics">
                  Organics
                </Link>
                <Link className="nav-link ms-3" to="/ourroots">
                  Our Roots
                </Link>
                <Link className="nav-link ms-5" to="/contactus">
                  Contact Us
                </Link>
                <Link className="nav-link ms-3" to="/login">
                  Login / Logout
                </Link>
                <Link className="nav-link ms-3" to="/cart">
                  Cart (0)
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </NavbarWrapper>
    </>
  );
};

export default NavigationBar;
