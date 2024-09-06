import { Link } from 'react-router-dom';
import './nav.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item dropdown">
          Profile &#9662;
          <ul className="dropdown-menu">
            <li><Link to="/adminp">Admin</Link></li>
            <li><Link to="/profile">Student</Link></li>
          </ul>
        </li>
        <li className="nav-item"><Link to="/college">Colleges</Link></li>
        <li className="nav-item"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
