import { NavLink, useNavigate } from 'react-router-dom';
import { useGetTokenQuery, useLogoutMutation } from './store/apiSlice';


function Nav() {
  const {data:token} = useGetTokenQuery();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">WanderList</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link" to="/parks">All Parks</NavLink>
        </li>
        {token &&<li className="nav-item">
            <NavLink className="nav-link" to="/trips">My Upcoming Trips</NavLink>
        </li>}
        {token &&<li className="nav-item">
            <NavLink className="nav-link" to="/createtrip">Create Trip</NavLink>
        </li>}
        {token &&<li className="nav-item">
            <NavLink className="nav-link" to="/createtripnote">Create Trip Note</NavLink>
        </li>}
        {!token &&<li className="nav-item">
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </li>}
        {!token &&<li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>}
        {token &&
        <button
          className="btn btn-warning"
          onClick={() => {
            logout()
            navigate('/parks')
          }}
            >Logout</button>}
          </ul>
        </div>
    </div>
    </nav>
  )
}
export default Nav;
