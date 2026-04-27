import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">JobPortal</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-dark" to="/">Jobs</Link>
          <Link className="nav-link text-dark" to="/apply">Apply</Link>
          <Link className="nav-link text-dark" to="/contact">Contact</Link>
          <Link className="nav-link text-dark" to="/login">Login</Link>
          <Link className="nav-link text-dark" to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
