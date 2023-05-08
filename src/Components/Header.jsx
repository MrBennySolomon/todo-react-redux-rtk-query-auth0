import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LoginButton from "../Pages/LoginButton";

function Header() {
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
