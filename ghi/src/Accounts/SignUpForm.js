import { useEffect, useState } from "react";
import { useSignupMutation } from "../store/apiSlice";
import { useNavigate } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";

const SignUpForm = () => {
  // SET STATE VARIABLES FOR SIGN UP FORM //
  const [signup, { isLoading, isSuccess, error }] = useSignupMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //  FUNCTION TO HANDLE SUBMISSION (POST REQUEST) OF NEW ACCOUNT DETAILS BY USER //
  const handleSubmit = (e) => {
    e.preventDefault();
    const accountData = {
      name: name,
      email: email,
      password: password,
    };
    signup(
      accountData,
      `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts`
    );
    e.target.reset();
  };

  // AFTER 200 RESPONSE FROM BACK-END FOR SUCCESS DEPENDENCY, AUTHENTICATED USER NAVIGATED TO PARK LIST PAGE //
  useEffect(() => {
    if (isSuccess === true) {
      navigate("/parks");
    }
  }, [isSuccess]);

  // RENDERED COMPONENT TO HANDLE USER INPUTS FOR NAME, EMAIL, PASSWORD, AND SIGN-UP (POST) REQUEST //
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:
          "url('https://www.travel-experience-live.com/wp-content/uploads/2020/02/Grizzly-bear-in-Denali-National-Park-Alaska-NPS-Emily-Mesner-768x524.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card text-bg-light mb-3"
        style={{ width: "700px", height: "550px" }}
      >
        <h5 className="card-header signup-title-text">Signup</h5>
        {/* IF USER SUBMITS NEW ACCOUNT DATA THAT MATCHES A RECORD IN DATABASE ALREADY, USER RECEIVES WARNING TO USE UNIQUE SIGN-UP CREDENTIALS  */}
        {error ? (
          <Alert variant="danger">
            <Alert.Heading>Failed to signup</Alert.Heading>
            {error?.data?.detail || "An unknown error occured."}
          </Alert>
        ) : null}
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label signup-form-text">Full Name</label>
              <input
                name="name"
                type="text"
                required
                className="form-control"
                disabled={isLoading}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label signup-form-text">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="form-control"
                disabled={isLoading}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label signup-form-text">Password</label>
              <input
                name="password"
                type="password"
                required
                className="form-control"
                disabled={isLoading}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <button className="btn dkg-btn-color" type="submit">
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
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
