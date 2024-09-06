// import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../assets/css/Contactus.css'; // Import the CSS file for styling
// import Navbar from './NavBar';
import Footer from './Footer';
import NavbarLogin from './NavbarLogin';
// import NavbarHome from './NavBarHome';

const ContactUsPage = () => {
  return (
    <div>
        <NavbarLogin/>
    <div className="contact-us-container">
      <center><h1>Contact Us</h1></center>
      <center><p>If you have any questions or concerns, please feel free to contact us using the information below:</p></center>
      <br/>
      <br/>
      <div className="contact-info">
        <div>
          <FaEnvelope className="icon" />
          <h2>Email</h2>
          <p>admissions@example.com</p>
        </div>
        <div>
          <FaPhone className="icon" />
          <h2>Phone</h2>
          <p>+1 (123) 456-7890</p>
        </div>
        <div>
          <FaMapMarkerAlt className="icon" />
          <h2>Address</h2>
          <p>1234 Elm Street</p>
          <p>Springfield, USA</p>
        </div>
        <div>
          <FaClock className="icon" />
          <h2>Hours of Operation</h2>
          <p>Monday - Friday: 9am - 5pm</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUsPage;
