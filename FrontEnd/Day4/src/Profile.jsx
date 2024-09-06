import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const ProfilePage = () => {
const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
        <Navbar/>
      <div style={styles.profileContainer}>
      <div style={styles.profileHeader}>
        <h1>Profile Page</h1>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
      <div style={styles.profileContent}>
        <div style={styles.profilePicture}>
          <img src="https://res.cloudinary.com/dx3051zza/image/upload/v1708583952/sk6dtxkwwrjwaysqdsco.webp" alt="Profile" style={styles.profileImage} />
        </div>
        <div style={styles.profileDetails}>
          <h2 style={styles.name}>John Doe</h2>
          <p style={styles.info}><strong>Email:</strong> john.doe@example.com</p>
          <p style={styles.info}><strong>Location:</strong> New York City</p>
          <p style={styles.info}><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p style={styles.info}><strong>Interests:</strong> Reading, Traveling, Photography</p>
          <p style={styles.info}><strong>Languages:</strong> English, Spanish</p>
          <p style={styles.info}><strong>Social Media:</strong> <a href="https://example.com">Twitter</a>, <a href="https://example.com">LinkedIn</a></p>
        </div>
      </div>
    </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '10%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  },
  profileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logoutButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#FF5733',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  profileContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profilePicture: {
    flex: 1,
    textAlign: 'center',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '5px solid #ffffff',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
  },
  profileDetails: {
    flex: 2,
    padding: '0 40px',
  },
  name: {
    fontSize: '30px',
    marginBottom: '10px',
    color: '#333',
  },
  info: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#555',
  },
};

export default ProfilePage;
