import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import AdminForm from "./AdminForm";

const Admin = () => {
  const [admin, setAdmin] = useState(true);

  const adminHandler = () => {
    setAdmin(!admin);
  };
  return (
    <div>
      <Row className="justify-content-center align-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                {admin ? "Login Admin Account" : "Create Admin Account"}
              </Card.Title>
              <Card.Text>
                <AdminForm admin={admin} />
              </Card.Text>
            </Card.Body>
            <span onClick={adminHandler}>Create New Account</span>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;