import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbars() {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="/">
          <NavLink to="/">
            <img
              src="https://www.ttechsolutions.net/wp-content/uploads/2019/11/550wide_ttech_logo.png"
              srcSet="https://www.ttechsolutions.net/wp-content/uploads/2019/11/550wide_ttech_logo.png 1x, https://www.ttechsolutions.net/wp-content/uploads/2019/11/550wide_ttech_logo.png 2x"
              alt="T-Tech Solutions LLC"
              className="logo logoDefault"
              width="70px"
              height="30px"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/services/architect">
                Architect
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/barber">
                Barber
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/cameraman">
                Cameraman
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/carpenter">
                Carpenter
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/chef">Chef</NavDropdown.Item>
              <NavDropdown.Item href="/services/driver">
                Driver
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/electrician">
                Electrician
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/painter">
                Painter
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/plumber">
                Plumber
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link e href="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
