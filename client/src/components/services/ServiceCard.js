import React from "react";
import TestCard from "./TestCard";
import { Row, Col, Container } from "reactstrap";
function ServiceCard() {
  return (
    <Container>
      <Row>
        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>
        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>
        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>
        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>
        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>
        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>

        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>
        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>
        <Col className="mt-5" md={4}>
          <TestCard />
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceCard;
