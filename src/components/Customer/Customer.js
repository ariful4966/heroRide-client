import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import CustomerForm from "./CustomerForm";

const Customer = () => {
  const [customer, setCustomer] = useState(true);

  const customerHandler = () => {
    setCustomer(!customer);
  };
  return (
    <div>
      <Row className="justify-content-center align-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                {customer ? "Login Learner Account" : "Join as a Driving Lesson Learner"}
              </Card.Title>
              <Card.Text>
                <CustomerForm customer={customer} />
              </Card.Text>
            </Card.Body>
            <span onClick={customerHandler}>Create New Account</span>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Customer;