import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
function TestCard() {
  return (
    <Card>
      <Row>
        <Col md="5">
          <CardImg
            style={{ paddingLeft: "20px", paddingTop: "20px" }}
            src="../../img/profile.png"
            height="200"
            width="200"
          ></CardImg>
        </Col>
        <Col md="6">
          <CardBody>
            <CardTitle style={{ color: "black" }}>
              RAHUL JAISWAL
              <br />
              Id: 001
              <br /> Age: 22
              <br />
              Contact: 7992285835
              <br />
              Charges: 200
              <br />
              Availability: Yes
              <br />
            </CardTitle>

            <CardText style={{ color: "black" }}></CardText>
            <Button>Book Now</Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
}

export default TestCard;
