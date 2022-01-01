import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import RiderForm from "./RiderForm";

const Rider = () => {
  const [ride, setRide] = useState(true);

  const rideHandler = () => {
    setRide(!ride);
  };
  return (
    <div>
      <Row className="justify-content-center align-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                {ride ? "Login Rider Account" : "Join as a Rider"}
              </Card.Title>
              <Card.Text>
                <RiderForm ride={ride} />
              </Card.Text>
            </Card.Body>
            <span onClick={rideHandler}>Create New Account</span>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Rider;
