// import React from 'react';
import '../assets/css/PrivacyPolicy.css'; // Import the CSS file for styling
import Footer from './Footer';
import NavbarHome from './NavBarHome';

const PrivacyPolicy = () => {
  return (
    <div>
        <NavbarHome/>
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        At [Your Admission Portal Name], we take your privacy seriously. This Privacy Policy governs the manner in which we collect, use, maintain, and disclose information collected from users (each, a User) of our website.
      </p>
      <p>
        <strong>Personal identification information:</strong> We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, fill out a form, and in connection with other activities, services, features, or resources we make available on our site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and other details. Users may, however, visit our site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain site-related activities.
      </p>
      <p>
        <strong>Non-personal identification information:</strong> We may collect non-personal identification information about Users whenever they interact with our site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users means of connection to our site, such as the operating system and the Internet service providers utilized and other similar information.
      </p>
      <p>
        <strong>Third-party services:</strong> We may use third-party services, such as Google Analytics, to track and analyze usage of our website. These third-party service providers have their own privacy policies addressing how they use such information.
      </p>
      <p>
        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at .
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
