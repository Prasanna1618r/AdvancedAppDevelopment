import '../assets/css/profile.css';
import { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {

  const [user, setUser] = useState({
    name: 'Virat Kholi',
    location: 'Coimbatore,TamilNadu,India',
    age: 20,
    contact: 'viratkholi@gmail.com | 6382200671',
    photo: 'https://res.cloudinary.com/dx3051zza/image/upload/v1708877050/kohli-profile-1540274232_vloz9h.jpg',
  });

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    setUser({ ...editedUser });
    setIsUserEditing(false);
  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    console.log('Logged out');
  };

  return (
    <div className='main1'>
      <nav>
        <Navbar/>
      </nav>
      <button className="logout-button1" onClick={handleLogout}>Logout</button>
    <div className="profile-container">
      <img src={user.photo} alt="Profile" className="profile-photo" />
      <div className="profile-header">
        <h1 className="profile-title">{user.name}&apos;s Profile</h1>
      </div>
      <section className="user-details">
        <h2>User Details</h2>
        {isUserEditing ? (
          <>
            <label>Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.location}
              onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
            />
            <br />
            <label>Age: </label>
            <input
              className="input-field"
              type="number"
              value={editedUser.age}
              onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
            />
            <br />
            <label>Contact: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.contact}
              onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
            />
            <br />
            <button className="btn-save" onClick={handleUserSave}>Save</button>
            <button className="btn-cancel" onClick={handleUserCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Location: {user.location}</p>
            <p>Age: {user.age}</p>
            <p>Contact: {user.contact}</p>
            <button className="btn-edit" onClick={handleUserEdit}>Edit</button>
          </>
        )}
      </section>
    </div>
      <Footer/>
    </div>
  );
};

export default UserProfile;