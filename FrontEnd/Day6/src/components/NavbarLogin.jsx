import { Link } from 'react-router-dom';
import '../assets/css/NavBarLogin.css';
const NavbarLogin = () => {
  return (
    <nav className="navbarrr">
      <ul className="nav-listtt">
        <li className="nav-itemmm"><Link to="/">Home</Link></li>
        <li className="nav-itemmm"><Link to="/college">Colleges</Link></li>
        <li className="nav-item dropdownnn">
          Login &#9662;
          <ul className="dropdown-menuuu">
            <li><Link to="/adminlogin">Admin</Link></li>
            <li><Link to="/login">Student</Link></li>
          </ul> 
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLogin;