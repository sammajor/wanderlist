import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Card,
} from "react-bootstrap";

import { useLoginMutation } from "../store/apiSlice";

const LoginForm = () => {
  // SETTING STATE VARIABLES TO HANDLE USER INPUT //
  const [login, { isLoading, isSuccess, error }] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  //  FUNCTION TO HANDLE POSTING USER INPUT DATA TO BACK-END //
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  // AFTER 200 RESPONSE FROM BACK-END FOR SUCCESS DEPENDENCY, AUTHENTICATED USER NAVIGATED TO TRIP LIST PAGE //
  useEffect(() => {
    if (isSuccess === true) {
      navigate("/trips");
    }
  }, [isSuccess, navigate]);

  // RENDERED COMPONENT TO HANDLE USER INPUTS FOR USERNAME, PASSWORD, AND LOGIN REQUEST //
  return (
    <Container fluid>
      <Row
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          backgroundImage:
            "url('https://www.roadscholar.org/imagevault/publishedmedia/7nams06hxnj2csi0ibya/23111-wildlife-yellowstone-grand-tetons-national-park-1c.jpg')",
          backgroundSize: "cover",
        }}
      >
        <Col md={3}>
          <Card style={{ width: "600px", height: "380px", opacity: 0.85 }}>
            <Card.Body>
              <Card.Title className="signup-title-text">Login</Card.Title>
              {error ? (
                <Alert variant="danger">
                  <Alert.Heading>Failed to login</Alert.Heading>
                  {error?.data?.detail || "An unknown error occured."}
                </Alert>
              ) : null}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="Login_username" className="mb-3">
                  <Form.Label className="signup-form-text">Username</Form.Label>
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
                  <Form.Label className="signup-form-text">Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    value={password}
                    disabled={isLoading}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="text-center">
                  <button
                    className="btn dkg-btn-color"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                    )}
                    Submit
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
