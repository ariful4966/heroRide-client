import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCustomerData, getRiderData } from "../../redux/actions";
import AllCustomer from "./AllCustomer";
import AllRider from "./AllRider";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(true);
  const userToken = sessionStorage.getItem("hero");
  useEffect(() => {
    fetch("https://hero-rider-server0.herokuapp.com/rider?token=" + userToken)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getRiderData(data.result));
      });
  }, [dispatch, userToken]);

  useEffect(() => {
    fetch("https://hero-rider-server0.herokuapp.com/customer?token=" + userToken)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getCustomerData(data.result));
      });
  }, [dispatch, userToken]);
  return (
    <div>
      <Container fluid>
        <Row>
          <h1>Admin Dashboard</h1>
        </Row>

        <Row>
          <Col md={3}>
            <div className="siderMenu">
              <Button className="m-5  d-block" onClick={() => setUser(true)}>
                Customer
              </Button>
              <br />
              <Button className="m-5  d-block" onClick={() => setUser(false)}>
                Rider
              </Button>
            </div>
          </Col>
          <Col>{user ? <AllCustomer /> : <AllRider />}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
