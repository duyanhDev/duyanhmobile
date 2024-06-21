import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeaderAdmin.scss";
const HeaderAdmin = ({ toggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>
        <FaBars className="mr-2" onClick={toggleSidebar} />
        <Link to="/" className="text-decoration-none">
          Admin Dashboard
        </Link>
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/logout">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderAdmin;
