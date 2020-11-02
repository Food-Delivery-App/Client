import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";
import "./register.css";
import axios from "axios";

const Register = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    const userData = {
      name: state.name,
      email: state.email,
      password: state.password,
    };

    axios
      .post("http://localhost:4000/api/register", userData)
      .then((res) => {
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <Row className="registerBox">
        <Col md="4 offset-md-4">
          <Form>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="text "
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <div className="float-right mr-3">
                <Button onClick={onSubmit}>Register</Button>
              </div>
              <div className="float-right mr-3">
                <Button
                  onClick={() => {
                    window.location.href = "login";
                  }}
                >
                  Login
                </Button>
              </div>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
