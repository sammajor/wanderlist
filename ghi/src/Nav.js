import { NavLink, useNavigate } from "react-router-dom";
import { useGetTokenQuery, useLogoutMutation } from "./store/apiSlice";

function Nav() {
  const { data: token } = useGetTokenQuery();
  const isAuthed = Boolean(token);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bc">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          WanderList
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink reloadDocument className="nav-link" to="/parks">
                All Parks
              </NavLink>
            </li>
            {isAuthed && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/trips">
                    My Upcoming Trips
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/trips/history">
                    My Trip History
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/createtrip">
                    Create Trip
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/createtripnote">
                    Create Trip Note
                  </NavLink>
                </li>
              </>
            )}
            {!isAuthed && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
            {token && (
              <button
                className="btn btn-logout"
                onClick={() => {
                  logout();
                  navigate("/parks");
                }}
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
