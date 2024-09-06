import './nav.css';
import './home.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './NavBar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content">
          <header>
            <h1 className='head'>WELCOME TO STUDENT ADMISSION PORTAL - 2024</h1>
          </header>
          <div className="hero-content">
            <h2 className='top-hero'>APPLY FOR NEW ADMISSION</h2>
            <p className='para'>Start your journey towards a bright future!</p>
            <Link to={'/getcol'}><button className='btn-app'>Get Started</button></Link>
            <a href='/course'><button className='btn-app1'>View Courses</button></a>
          </div>
        </div>
        <div className="image">
          <section className="hero">
            <div className="hero-image">
              <img src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?w=740&t=st=1708442678~exp=1708443278~hmac=d384ea32c456fd1f99cd8d5fbb086bbe497ab45a12bd4c8e411a7016f92d0fc9" alt="Students studying" />
            </div>
          </section>
        </div>
      </div>
      <div>
      </div>
      <footer>
        <Footer/>
      </footer>
      <div>
        <p className='reserve'>Copyright © 2024 EduAdmit_Connect and co. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Home;