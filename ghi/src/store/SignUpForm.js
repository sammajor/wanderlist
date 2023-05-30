import { useState } from "react";
import { useSignupMutation } from "./apiSlice";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
    const [signup] = useSignupMutation();
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const accountData = {
            fullName: fullName,
            username: username,
            password: password
        };
        signup(
            accountData,
            `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts`
        );
        e.target.reset();
        navigate("/");
    };

    return (
        <div className="card text-bg-light mb-3">
        <h5 className="card-header">Signup</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                name="fullName"
                type="text"
                className="form-control"
                onChange={(e) => {
                    setFullName(e.target.value);
                }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                name="username"
                type="text"
                className="form-control"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                name="password"
                type="password"
                className="form-control"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                />
            </div>
            <div>
                <input className="btn btn-primary" type="submit" value="Register" />
            </div>
            </form>
        </div>
        </div>
    );
};

export default SignUpForm;
