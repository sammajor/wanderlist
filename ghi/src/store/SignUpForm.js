import { useState } from "react";
import { useSignupMutation } from "./apiSlice";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
    const [signup] = useSignupMutation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const accountData = {
            name: name,
            email: email,
            password: password
        };
        signup(
            accountData,
            `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts`
        );
        e.target.reset();
        navigate("/parks");
    };

    return (
        <div className="card text-bg-light mb-3">
        <h5 className="card-header">Signup</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                name="name"
                type="text"
                className="form-control"
                onChange={(e) => {
                    setName(e.target.value);
                }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                name="email"
                type="text"
                className="form-control"
                onChange={(e) => {
                    setEmail(e.target.value);
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
