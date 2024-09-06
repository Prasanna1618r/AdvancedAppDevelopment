
import { Link } from 'react-router-dom'; // Import Link from React Router
import './nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item dropdown">
          <Link to="/">Profile &#9662;</Link>
          <ul className="dropdown-menu">
            <li><Link to="/adminp">Admin</Link></li>
            <li><Link to="/profile">Student</Link></li>
          </ul>
        </li>
        <li className="nav-item"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
