import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

const CustomerForm = ({ customer }) => {

  //REdirect 
  let history = useHistory(); 
  let location = useLocation();
  

  let { from } = location.state || { from: { pathname: "/" } };

  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const [picture, setPicture] = useState({
    profilePic: "",
    nidPic: "",
    carNumberPlate: "",
    drLCpic: "",
  });
  const handlePictureChange = (e) => {
    const newPic = { ...picture };

    newPic[e.target.name] = e.target.files[0];
    setPicture(newPic);
  };

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

    const formData = new FormData();
    formData.append("profilePic", data.profilePic[0]);
    formData.append("nidPic", data.nidPic[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("age", data.age);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("carType", data.carType);
    formData.append("password", data.password);

    if (match) {
     if(customer){
       
      fetch("https://hero-rider-server0.herokuapp.com/customer/login", {
        method: "POST",
        body: formData,
       
      })
        .then((res) => res.json())
        .then((result) => {
          sessionStorage.setItem('hero', result.token)
          history.replace(from);
        })
        .catch(error=>{
          console.log(error.message);
        })
        
     }else{
      fetch("https://hero-rider-server0.herokuapp.com/customer", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
     }
    }

  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {customer ? (
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
              <Form.Label>How old are you?</Form.Label>
              <Form.Control
                type="number"
                max={30}
                min={18}
                {...register("age", { min: 18, max: 30, required: true })}
                placeholder="Enter Age"
              />
              {errors.age ? (
                <span className="text-danger">Age is required</span>
              ) : (
                <Form.Text className="text-muted">
                  You can type your exact Age
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Address</Form.Label>
              <Form.Control
                type="text"
                {...register("address", { required: true })}
                placeholder="Enter Your Address"
              />
              {errors.address ? (
                <span className="text-danger">Address is required</span>
              ) : (
                <Form.Text className="text-muted">
                  House, Village/Road, Polis Station, District, Country
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                {...register("phone", { required: true })}
                placeholder="Enter Your Mobile Number"
              />
              {errors.phone ? (
                <span className="text-danger">Mobile Number is required</span>
              ) : (
                <Form.Text className="text-muted">
                  The number is that max 14 and min 11
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload your profile picture</Form.Label>
              <Form.Control
                type="file"
                name="profilePic"
                // onChange={handlePictureChange}
                {...register("profilePic", { required: true })}
              />
              {errors.profilePic && (
                <span className="text-danger">Profile Picture is required</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload your NID picture</Form.Label>
              <Form.Control
                type="file"
                name="nidPic"
                {...register("nidPic", { required: true })}
              />
              {errors.nidPc && (
                <span className="text-danger">NID Picture is required</span>
              )}
            </Form.Group>
            
            
            <Form.Group className="mb-3">
              <Form.Label>Vihicles Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register("carType", { required: true })}
              >
                <option>Open this select menu</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
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

export default CustomerForm;
