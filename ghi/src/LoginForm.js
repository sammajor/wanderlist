import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

import { useLoginMutation } from "./store/apiSlice";

const LoginForm = () => {
  const [login, { isLoading, isSuccess, error }] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ username, password });
  };

  useEffect(() => {
    if (isSuccess === true) {
      navigate("/test");
    }
  }, [isSuccess]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Login</h1>
          {error ? (
            <Alert variant="danger">
              <Alert.Heading>Failed to login</Alert.Heading>
              {error?.data?.detail || "An unknown error occured."}
            </Alert>
          ) : null}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Login_username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="your@email.com"
                value={username}
                disabled={isLoading}
                onChange={(e) => {
                  const { value } = e.target;
                  setUsername(value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="Login_password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                disabled={isLoading}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="success" disabled={isLoading}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
