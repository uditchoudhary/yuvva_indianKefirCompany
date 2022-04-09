import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "../../static/images/yuuva_logo.png";
import "./NavigationBar.css";

const NavbarWrapper = styled.div`
  width: 80vw;
  border-bottom: 0.2px solid rgba(185, 89, 89, 0.536);
  transition: 0.5s;
`;

const NavBarLogo = styled.img`
  width: 80px;
  height: auto;
`;

const NavigationBar = () => {
  const navBarRef = useRef(null);

  const onScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      console.log("inside if ", navBarRef);
      navBarRef.current.style.background = "#ffffff";
    } else {
      console.log("inside else ", navBarRef);
      navBarRef.current.style.background = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <NavbarWrapper
        className="container-fluid sticky-top"
        id="navbar"
        ref={navBarRef}
      >
        <div className="justify-content-center">
          <nav className="navbar navbar-expand-lg bg-inverse d-flex">
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
              {/* <span className="navbar-toggler-icon"></span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="ms-auto navbar-nav pe-5">
                <Link
                  className="nav-link ms-3"
                  aria-current="page"
                  to="/probiotics"
                >
                  Probiotics
                </Link>
                <Link className="nav-link ms-3" to="/organics">
                  Organics
                </Link>
                <Link className="nav-link ms-3" to="/ourroots">
                  Our Roots
                </Link>
                <Link className="nav-link ms-3" to="/contactus">
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
