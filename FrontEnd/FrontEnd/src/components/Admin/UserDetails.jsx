import { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/assets/css/UserDetails.css';
import Sidebar from './SideBar';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phnumber: ''
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    // Fetch users from the API when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8181/api/login'); // Replace with your actual API endpoint
        // Filter users based on roles containing "USER"
        const filteredUsers = response.data.filter(user => user.role.includes('USER'));
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8181/api/login/${id}`); // Replace with your actual API endpoint
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEdit(true);
  };

  const handleSave = async () => {
    if (isEdit) {
      try {
        await axios.put(`http://localhost:8181/api/login/update/${formData.id}`, formData); // Replace with your actual API endpoint
        setUsers(users.map(user => (user.id === formData.id ? formData : user)));
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }

    setFormData({ id: '', name: '', email: '', phnumber: '' });
    setIsEdit(false);
  };

  return (
    <div>
      <nav>
        <Sidebar/>
      </nav>
      <div className="user-details-container">
        <div className="user-details-header">
          <strong>Welcome, Admin</strong>
        </div>
        <br/>
        <div className="user-details-content">
          <div className="user-table">
            <h2>Users</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phnumber}</td>
                    <td>
                      <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button> 
                      <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isEdit && (
            <div className="user-form">
              <h2>Edit User</h2>
              <input
                type="text"
                placeholder="Username"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phnumber}
                onChange={(e) => setFormData({ ...formData, phnumber: e.target.value })}
              />
              <button onClick={handleSave} className='save-button'>Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
