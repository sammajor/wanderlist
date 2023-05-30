import { useState, useEffect } from "react";
import { useLoginMutation } from "./store/apiSlice";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
    const [login] = useLoginMutation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        login({username, password})
        navigate('/test')
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Login_username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Login_username"
                            value={username}
                            onChange={(e) => {
                                const { value } = e.target;
                                setUsername(value)
                            }}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Login_password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="Login_password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}



export default LoginForm;
