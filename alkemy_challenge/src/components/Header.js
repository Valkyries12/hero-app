import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import {removeToken, hasToken } from "../utils";

const Header = ({ isLogged, setIsLogged }) => {
  const handleLogout = () => {
    removeToken();
    setIsLogged(hasToken());
  }

  return (
    <header className="p-3 mb-2 bg-dark bg-gradient text-white">
      <h1 className="d-flex justify-content-center">superhero</h1>

      <div>
        <Nav justified>
          <NavItem>
            <Link to="/">
              Home
            </Link>
          </NavItem>
          { isLogged ?
            <NavItem>
              <Link onClick={handleLogout} to="/">Logout</Link>
            </NavItem> :
            <NavItem>
              <NavLink href="#">Login</NavLink>
            </NavItem>
          }
        </Nav>
      </div>
    </header>
  );
};

export default Header;
