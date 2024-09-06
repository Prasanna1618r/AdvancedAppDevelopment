import  { useState } from "react";
import { Link } from "react-router-dom";
import "/src/assets/css/SideBar.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiMenuFoldLine } from "react-icons/ri";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar1">
      <div className="navbar-left" onClick={toggleSidebar}>
        <MdOutlineMenuOpen className="nav-menu" />
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* <p>Admission Portal</p> */}
        <button className="close-sidebar" onClick={toggleSidebar}>
          <RiMenuFoldLine className="nav-menu" />
        </button>
        <div className="sidebar-content">
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/adminp">Profile</Link>
          </div>
          <div className="sidebar-items">
            <MdDashboard />
            <Link to="/coursedetails">Add Course</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/userdetails">User Details</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/applicantdetails">Applicant Details</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default SideBar;