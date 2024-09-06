import '/src/assets/css/AdminProfile.css';
import { useState } from 'react';
// import Navbar from './NavBar';
// import Footer from '../Footer';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
const AdminProfile = () => {

    const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/adminlogin');
    console.log('Logged out');
  };

  const [user, setUser] = useState({
    name: 'Prasannakumar',
    location: 'Coimbatore,TamilNadu,India',
    age: 20,
    contact: 'prasannakumar@gmail.com | 6382200671',
    photo: 'https://res.cloudinary.com/dx3051zza/image/upload/v1708583952/sk6dtxkwwrjwaysqdsco.webp',
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

  return (
    <div className='main1'>
      <nav>
        <SideBar/>
      </nav>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    <div className="admin-profile-container">
      <img src={user.photo} alt="Profile" className="admin-profile-photo" />
      <div className="admin-profile-header">
        <h1 className="admin-profile-title">{user.name}&apos;s Profile</h1>
      </div>
      <section className="admin-details">
        <h2>Admin Details</h2>
        {isUserEditing ? (
          <>
            <label>Name: </label>
            <input
              className="input-field1"
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field1"
              type="text"
              value={editedUser.location}
              onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
            />
            <br />
            <label>Age: </label>
            <input
              className="input-field1"
              type="number"
              value={editedUser.age}
              onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
            />
            <br />
            <label>Contact: </label>
            <input
              className="input-field1"
              type="text"
              value={editedUser.contact}
              onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
            />
            <br />
            <button className="btn-save1" onClick={handleUserSave}>Save</button>
            <button className="btn-cancel1" onClick={handleUserCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Location: {user.location}</p>
            <p>Age: {user.age}</p>
            <p>Contact: {user.contact}</p>
            <button className="btn-edit1" onClick={handleUserEdit}>Edit</button>
          </>
        )}
      </section>
    </div>
    </div>
  );
};

export default AdminProfile;