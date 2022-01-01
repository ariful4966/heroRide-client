import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Admin from "../Admin/Admin";
import Customer from "../Customer/Customer";
import Rider from "../Rider/Rider";

const Login = () => {
  const [tab, setTab] = useState("customer");
  const handleTab = () => {};
  return (
    <div>
      <div className="tabSection m-3 d-flex justify-content-center">
        <div>
          <Button onClick={() => setTab("customer")}>
            Join as a Driving Lesson Learner
          </Button>
          <Button onClick={() => setTab("rider")}>Join as a rider</Button>
          <Button onClick={() => setTab("admin")}>Admin</Button>
        </div>
      </div>

      {tab === "customer" && <Customer />}
      {tab === "rider" && <Rider />}
      {tab === "admin" && <Admin />}
    </div>
  );
};

export default Login;
