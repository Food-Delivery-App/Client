import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import "./login.css";
import axios from "axios";

const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    const userData = {
      email: state.email,
      password: state.password,
    };

    axios
      .post("http://localhost:4000/api/login", userData)
      .then((res) => {
        localStorage.setItem("auth", JSON.stringify(res.data));
        props.history.push("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <Row className="loginBox">
        <Col md="4 offset-md-4">
          <Form>
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
                <Button onClick={onSubmit}>Login</Button>
              </div>
              <div className="float-right mr-3">
                <Button
                  onClick={() => {
                    window.location.href = "register";
                  }}
                >
                  Register
                </Button>
              </div>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
