import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { removeToken, hasToken } from "../utils";

const Header = ({ isLogged, setIsLogged }) => {
  const handleLogout = () => {
    removeToken();
    setIsLogged(hasToken());
  };

  return (
    <header className="p-3 mb-2 text-white header">
      <h1 className="d-flex justify-content-center header__title"><span>super</span>hero</h1>

      <div>
        <Nav justified>
          <NavItem>
            <Link to="/">
              <Button color="primary">Home</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={handleLogout} to="/">
              <Button color="primary">{isLogged ? "Logout" : "Login"}</Button>
            </Link>
          </NavItem>
        </Nav>
      </div>
    </header>
  );
};

export default Header;
