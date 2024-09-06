import { Link } from 'react-router-dom';
import '../assets/css/nav.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item dropdown"><Link to="/profile">Profile</Link></li>
        <li className="nav-item"><Link to="/college">Colleges</Link></li>
        <li className="nav-item dropdown">
          Login &#9662;
          <ul className="dropdown-menu">
            <li><Link to="/adminlogin">Admin</Link></li>
            <li><Link to="/login">Student</Link></li>
          </ul> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
