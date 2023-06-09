import { useLogoutMutation } from "../store/apiSlice";
import { useNavigate } from "react-router";

const LogoutForm = () => {
  // SET STATE VARIABLES FOR LOGOUT //
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  // UPON LOGOUT (DELETE) REQUEST, USER NAVIGATED TO LOGIN PAGE //
  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  // RENDERED COMPONENT TO DISPLAY LOGOUT BUTTON TO USER AND HANDLE LOGOUT (DELETE) REQUEST //
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1>Logout</h1>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-success">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};
export default LogoutForm;
