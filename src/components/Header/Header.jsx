import React, { useState } from "react";
import "./Header.css";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
import { getMenuStyles } from "../../utils/common.js";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();


  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };
  return (
    <section className="h-wrapper" style={{ background: "var(--brown)" }}> {/*#eeeeff*/}
      <div className="innerWidth paddings h-container">
        {/* logo */}
        <Link to="/" className="header-logo-wrapper">
          <img src="./Yesudoss_Logo.png" alt="logo" width={60} />
          <p className="header-company-name">Yesudoss Builders</p>
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className = "flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#heroSection">Home</a>
            <a href="#servicesSection" >Our Services</a>
            {/* <a >Construction Package</a> */}
            <a href="#projectsSection">Our Projects</a>
            <a href="#contactSection">Contact Us</a>
          </div>
          {/* <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties">Our Projects</NavLink>

            <a href="mailto:zainkeepscode@gmail.com">Services</a>

            <div onClick={handleAddPropertyClick}>About Us</div>
            {/* <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} /> */}
              {/* <button className="button" onClick={loginWithRedirect}>
                Contact Us
              </button>
          </div>  */}
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <MdMenu size={30} />
        </div>  
        {/* <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div> */}
      </div> 
    </section>
  );
};

export default Header;
