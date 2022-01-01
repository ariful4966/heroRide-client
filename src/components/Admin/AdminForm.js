import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

const AdminForm = ({ admin }) => {

  //Redirect
  let history = useHistory(); 
  let location = useLocation();
  

  let { from } = location.state || { from: { pathname: "/" } };
 
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

 


  const [match, setMatch] = useState(true);
  const passwordChange = (e) => {
    const newPass = { ...password };

    newPass[e.target.name] = e.target.value;
    setPassword(newPass);
  };
  const passBlur = () => {
    if (password.password === password.confirmPassword) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.password = password.confirmPassword;

    if (match) {
     if(admin){

      const forLogin = {
        email: data.email,
        password: data.password
      }

      fetch("https://hero-rider-server0.herokuapp.com/admin/login", {
        method: "POST",
        body: JSON.stringify(forLogin),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((result) => {
          sessionStorage.setItem('hero', result.token)
          history.replace(from);
        });
     }else{

      const forSignUp = {
        name: data.name,
        email: data.email,
        adminType: data.adminType,
        password: data.password
      }
      fetch("https://hero-rider-server0.herokuapp.com/admin", {
        method: "POST",
        body: JSON.stringify(forSignUp),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
     }
    }

  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {admin ? (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter email"
              />
              {errors.email ? (
                <span className="text-danger">Email is required</span>
              ) : (
                <Form.Text className="text-muted">
                  You can type you valid email
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={passwordChange}
              />
            </Form.Group>
          </>
        ) : (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Your Full Name"
              />
              {errors.name ? (
                <span className="text-danger">Name is required</span>
              ) : (
                <Form.Text className="text-muted">
                  Your Name is maximum 50 Charecters
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter email"
              />
              {errors.email ? (
                <span className="text-danger">Email is required</span>
              ) : (
                <Form.Text className="text-muted">
                  You can type you valid email
                </Form.Text>
              )}
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Admin Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register("adminType", { required: true })}
              >
                <option>Open this select menu</option>
                <option value="admin">Admin</option>
                <option value="developer">Developer</option>
              </Form.Select>
              {errors.carType && (
                <span className="text-danger">Car Type is required</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={passwordChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                placeholder="Confirm your password"
                name="confirmPassword"
                type="password"
                onChange={passwordChange}
                onBlur={passBlur}
              />
              {match === false && (
                <span className="text-danger">Password Not Match</span>
              )}
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdminForm;
