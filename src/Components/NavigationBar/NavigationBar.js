import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "../../static/images/yuuva_logo-min.png";

const NavbarWrapper = styled.div`
  width: 80vw;
  border-bottom: 0.2px solid rgba(185, 89, 89, 0.536);
  transition: 0.5s;
`;

const NavBarLogo = styled.img`
  width: 80px;
  height: auto;
`;

const StyledLink = styled(Link)`
  color: var(--custom-primary1);
  text-decoration: none;
  font-weight: 500;
  &:hover {
    border-bottom: 0.2px solid black;
    color: var(--logo-color);
  }
`;

const NavigationBar = () => {
  const navBarRef = useRef(null);

  const onScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navBarRef.current.style.background = "#ffffff";
    } else {
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
          <nav className="navbar navbar-expand-xl d-flex">
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
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              data-bs-target=".navbar-collapse"
              data-bs-toggle="collapse"
            >
              <ul className="ms-auto navbar-nav pe-5">
                <li className="nav-item">
                  <StyledLink
                    className="nav-link ms-3 nav-item"
                    aria-current="page"
                    to="/probiotics"
                  >
                    Probiotics
                  </StyledLink>
                </li>
                <li className="nav-item">
                  <StyledLink className="nav-link nav-item ms-3" to="/organics">
                    Organics
                  </StyledLink>
                </li>
                <li className="nav-item">
                  <StyledLink className="nav-link nav-item ms-3" to="/ourroots">
                    Our Roots
                  </StyledLink>
                </li>
                <li className="nav-item">
                  <StyledLink
                    className="nav-link nav-item ms-3"
                    to="/contactus"
                  >
                    Contact Us
                  </StyledLink>
                </li>
                <li className="nav-item">
                  <StyledLink className="nav-link nav-item ms-3" to="/login">
                    Login / Logout
                  </StyledLink>
                </li>
                <li className="nav-item">
                  <StyledLink className="nav-link nav-item ms-3" to="/cart">
                    Cart (0)
                  </StyledLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </NavbarWrapper>
    </>
  );
};

export default NavigationBar;
