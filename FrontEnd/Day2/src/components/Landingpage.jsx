// import React from 'react';
import '../assets/css/landp.css';
import '../assets/css/nav.css';
import '../assets/css/foot.css';

function LandingPage() {
  return (
    <div>
  <nav className="navbar">
    <div className="container">
      <ul className="nav-links">
        <li className='nb'><a href="#features">Features</a></li>
        <li className='nb'><a href="#apply">Apply Now</a></li>
        <li className='nb'><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
    <div className="landing-page">
      <header>
        <h1>Welcome to Student Admission Portal</h1>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>Apply Now for Admission</h2>
          <p>Start your journey towards a bright future!</p>
          <button>Apply Now</button>
        </div>
        <div className="hero-image">
          <img src="" alt="Students studying" />
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Easy Application Process</h3>
          <p>Apply for admission hassle-free with our user-friendly application process.</p>
        </div>
        <div className="feature">
          <h3>Track Application Status</h3>
          <p>Stay updated on your application status throughout the admission process.</p>
        </div>
        <div className="feature">
          <h3>Explore Programs</h3>
          <p>Discover a wide range of programs offered and choose the one that suits you best.</p>
        </div>
      </section>
      <footer className="footer">
  <div className="container">
    <div className="footer-section">
      <h3>About Us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, neque id varius lobortis.</p>
    </div>
    <div className="footer-section">
      <h3>Connect With Us</h3>
      <ul className="social-links">
        <li className='sm'><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
        <li className='sm'><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
        <li className='sm'><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>
</footer>

    </div>
    </div>
  );
}

export default LandingPage;
