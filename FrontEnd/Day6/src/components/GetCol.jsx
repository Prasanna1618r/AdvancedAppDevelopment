import '../assets/css/getcol.css';
import Footer from './Footer';
import Navbar from './NavBar';
import { Link } from 'react-router-dom';

const GetCol = () => {
    return (
        <>
            <Navbar />
            <div className="card3">
                <div className="card3-image">
                    <img src="https://www.srikrishna.ac.in/images/Slider/Slide1.jpg" alt="Placeholder" />
                </div>
                <div className="card3-content">
                    <br />
                    <center><h2>SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</h2></center><br />
                    <p>Striding on into its Silver Jubilee year, the Sri Krishna College of Engineering and Technology continues to leave behind its indelible footprints on young lives that pass through its portals every year. With over 4500+ students, SKCET is a premier Autonomous Institution that offers experiential education through learning, discovery, and innovation for all scholars, ever since inception.</p><br />
                    <p>SKCET has been identified to mentor 10 non – accredited Institutions in our geographic vicinity to support its goal of accrediting all colleges in India by 2022. The Institution has secured 73rd position in MoE- NIRF Ranking 2022 . SKCET has been chosen as the nodal centre by IIT Bombay for spoken tutorial project of MoE and one among 8 partner Institutions of AICTE across the Nation for FDP programs.</p>
                    <Link to = '/form'><button className="apply-now-button">Apply Now</button></Link>
                </div>
            </div>
            <div className="card3">
                <div className="card3-image">
                    <img src="https://images.collegedunia.com/public/college_data/images/campusimage/14795614881479553285sri1.jpg" alt="Placeholder" />
                </div>
                <div className="card3-content">
                    <br />
                    <center><h2>SRI KRISHNA COLLEGE OF TECHNOLOGY</h2></center><br />
                    <p>Striding on into its Silver Jubilee year, the Sri Krishna College of Engineering and Technology continues to leave behind its indelible footprints on young lives that pass through its portals every year. With over 4500+ students, SKCET is a premier Autonomous Institution that offers experiential education through learning, discovery, and innovation for all scholars, ever since inception.</p><br />
                    <p>SKCET has been identified to mentor 10 non – accredited Institutions in our geographic vicinity to support its goal of accrediting all colleges in India by 2022. The Institution has secured 73rd position in MoE- NIRF Ranking 2022 . SKCET has been chosen as the nodal centre by IIT Bombay for spoken tutorial project of MoE and one among 8 partner Institutions of AICTE across the Nation for FDP programs.</p>
                    <Link to ='/form'><button className="apply-now-button">Apply Now</button></Link>
                </div>
            </div>
            <div className="card3">
                <div className="card3-image">
                    <img src="https://www.srikrishna.ac.in/images/gallery/18_img.jpg" alt="Placeholder" />
                </div>
                <div className="card3-content">
                    <br />
                    <center><h2>SRI KRISHNA COLLEGE OF ARTS AND SCIENCE</h2></center><br />
                    <p>Striding on into its Silver Jubilee year, the Sri Krishna College of Engineering and Technology continues to leave behind its indelible footprints on young lives that pass through its portals every year. With over 4500+ students, SKCET is a premier Autonomous Institution that offers experiential education through learning, discovery, and innovation for all scholars, ever since inception.</p><br />
                    <p>SKCET has been identified to mentor 10 non – accredited Institutions in our geographic vicinity to support its goal of accrediting all colleges in India by 2022. The Institution has secured 73rd position in MoE- NIRF Ranking 2022 . SKCET has been chosen as the nodal centre by IIT Bombay for spoken tutorial project of MoE and one among 8 partner Institutions of AICTE across the Nation for FDP programs.</p>
                    <Link to ='/form'><button className="apply-now-button">Apply Now</button></Link>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default GetCol;
