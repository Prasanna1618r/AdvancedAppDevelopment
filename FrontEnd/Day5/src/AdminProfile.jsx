// AdminProfilePage.jsx
import { useState } from 'react';
import './AdminProfile.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';

const AdminProfilePage = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', role: 'Admin' },
    { id: 2, username: 'user2', email: 'user2@example.com', role: 'User' },
    { id: 3, username: 'user3', email: 'user3@example.com', role: 'User' },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    console.log('Logged out');
  };

  return (
    <div>
        <Navbar/>
    <div className="admin-profile-container">
      <div className="admin-profile-header">
        <h1>Welcome, Admin</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="admin-profile-content">
        <div className="user-table">
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminProfilePage;
