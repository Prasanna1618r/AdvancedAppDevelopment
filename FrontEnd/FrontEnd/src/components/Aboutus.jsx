// import React from 'react';
import '../assets/css/Aboutus.css'; // Import the CSS file for styling
import Footer from './Footer';
// import NavbarHome from './NavBarHome';
import NavbarLogin from './NavbarLogin';

const AboutUsPage = () => {
  return (
    <div>
        <NavbarLogin/>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to our online admission portal! We are dedicated to providing a seamless and efficient platform for students to apply for admission to various courses and programs.</p>
      <p>Our mission is to simplify the admission process, making it accessible to students from all backgrounds. Whether you are a high school graduate, a working professional, or someone looking to further your education, we are here to help you achieve your academic goals.</p>
      <p>With our user-friendly interface, comprehensive information about courses and programs, and dedicated support team, we strive to make the admission process as smooth as possible.</p>
      <h2>Our Vision</h2>
      <p>To be the leading online admission platform, empowering students to pursue their dreams through seamless access to quality education.</p>
      <h2>Our Values</h2>
      <ul>
        <li>Accessibility: Ensuring equal opportunities for all students, regardless of their background or circumstances.</li>
        <li>Transparency: Providing clear and accurate information about admission processes, requirements, and policies.</li>
        <li>Innovation: Embracing technology to enhance the admission experience and improve efficiency.</li>
        <li>Support: Offering dedicated assistance and guidance to students at every step of the admission journey.</li>
        <li>Excellence: Striving for excellence in everything we do, from customer service to platform development.</li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUsPage;
