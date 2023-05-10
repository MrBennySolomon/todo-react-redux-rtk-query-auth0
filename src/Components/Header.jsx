import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LoginButton from "../Pages/LoginButton";
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "../Pages/LogoutButton";


function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    localStorage.setItem('user', user.name);
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton/>
      </div>
    );
  }
  return (
    <>
      <header>
        <nav>
          <ul className="list">
            <li>
              <Link to="/create">Create TO-DO</Link>
            </li>
            <li>
              <Link to="/read">All TO-DO</Link>
            </li>
            <li>
              <Link to="/delete">Delete TO-DO</Link>
            </li>
            <li>
              <Link to="/update">Update TO-DO</Link>
            </li>
            <LoginButton/>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
