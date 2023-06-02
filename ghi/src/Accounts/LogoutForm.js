import { useLogoutMutation } from "../store/apiSlice";
import { useNavigate } from "react-router";

const LogoutForm = () => {
    const[logout] = useLogoutMutation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        logout()
        navigate('/login')
    }

return (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <h1>Logout</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-success">Logout</button>
            </form>
        </div>
    </div>

);
}
export default LogoutForm;
