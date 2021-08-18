import React from "react";
import Card from "./Card";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/architect">
              <Card img="./img/architect.jpg" title="ARCHITECT" />
            </NavLink>
          </Col>
          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/barber">
              <Card img="./img/barber.jpg" title="BARBER" />
            </NavLink>
          </Col>
          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/cameraman">
              <Card img="./img/camera-man.jpg" title="CAMERAMAN" />
            </NavLink>
          </Col>

          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/carpenter">
              <Card img="./img/carpenter.jpg" title="CARPENTER" />
            </NavLink>
          </Col>
          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/chef">
              <Card img="./img/chef.jpg" title="CHEF" />
            </NavLink>
          </Col>
          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/driver">
              <Card img="./img/driver-1.jpg" title="DRIVER" />
            </NavLink>
          </Col>

          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/electrician">
              <Card img="./img/electrician.jpg" title="ELECTRICIAN" />
            </NavLink>
          </Col>
          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/painter">
              <Card img="./img/painting.jpg" title="PAINTER" />
            </NavLink>
          </Col>
          <Col md={4} sm={6} xs={12} className="mt-5">
            <NavLink className="link" to="/services/plumber">
              <Card img="./img/plumber.jpg" title="PLUMBER" />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
