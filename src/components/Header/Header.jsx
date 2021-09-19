import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="project-header">
      <nav className="project-nav">
        <NavLink exact activeClassName="selected" className="nav-link" to="/">
          Home
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
