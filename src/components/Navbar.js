import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-center">
      <Navbar.Brand as={Link} to="/">
        Harish's Blog
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <NavLink as={Link} to="/" eventKey="link-1" className="nav-link">
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/full-stack-development" eventKey="link-2" className="nav-link">
              Full Stack Development
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/data-science" eventKey="link-3" className="nav-link">
              Data Science
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/cyber-security" eventKey="link-4" className="nav-link">
              Cyber Security
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/career" eventKey="link-5" className="nav-link">
              Career
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;