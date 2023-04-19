import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  }

  return (
    <header className="header height-md p-x">
      <Link
        to="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
          <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      </Link>

      <nav className="navegation">
        <ul className="navegation-list">
          <li>
            <NavLink
              className="link"
              to="/marvel"
            >
              Marvel
            </NavLink>
          </li>
          <li>

            <NavLink
              className="link"
              to="/dc"
            >
              DC
            </NavLink>
          </li>
          <li>

            <NavLink
              className="link" // className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              to="/search"
            >
              Search
            </NavLink>
          </li>

          <li>
            <span className='text-primary link'>{user?.name}</span>
          </li>
          <li>

            <button
              onClick={onLogout}
              className='btn btn-primary'>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
