import { NavLink, Outlet } from "react-router-dom";
import './styles/Layout.css';

function Layout() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/chest" activeClassName="active-link">Chest</NavLink>
          </li>
          <li>
            <NavLink to="/back" activeClassName="active-link">Back</NavLink>
          </li>
          <li>
            <NavLink to="/abs" activeClassName="active-link">Abs</NavLink>
          </li>
          <li>
            <NavLink to="/legs" activeClassName="active-link">Legs</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
