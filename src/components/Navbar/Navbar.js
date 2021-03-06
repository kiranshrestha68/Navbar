import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
          <Bars />
          <NavMenu>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/services' activeStyle>
              Services
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
              Contact Us
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              SignUp
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='Sign-in'> SignIn</NavBtnLink>
          </NavBtn>
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
