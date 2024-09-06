import { Link } from 'react-router-dom';
import '../assets/css/NavBarHome.css';
const NavbarHome = () => {
  return (
    <nav className="navbarr">
      <ul className="nav-listt">
        <li className="nav-itemm"><Link to="/college">Colleges</Link></li>
        <li className="nav-item dropdownn">
          Login &#9662;
          <ul className="dropdown-menuu">
            <li><Link to="/adminlogin">Admin</Link></li>
            <li><Link to="/login">Student</Link></li>
          </ul> 
        </li>
      </ul>
    </nav>
  );
};

export default NavbarHome;
