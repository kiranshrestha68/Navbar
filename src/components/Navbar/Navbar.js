import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Button from "./Button";
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav ClassName='navbar'>
        <Link to='/' ClassName='navbar-logo'>
          Epic
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-Links'
              onClick={closeMobileMenu}
            >
              {" "}
              Services
              <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown/> }
          </li>
          <li className='nav-item'>
            <Link to='/aboutus' className='nav-Links' onClick={closeMobileMenu}>
              {" "}
              aboutme{" "}
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-Links-mobile' onClick={closeMobileMenu}>
              {" "}
              signup{" "}
            </Link>
          </li>
        </ul>
        <Button/>
      </nav>
    </>
  );
};

export default Navbar;
