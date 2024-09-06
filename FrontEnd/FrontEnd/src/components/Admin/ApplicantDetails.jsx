import { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/assets/css/ApplicantDetails.css';
import Sidebar from './SideBar';

const ApplicantDetails = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedCollege, setEditedCollege] = useState('');
  const [editedEngcourse, setEditedEngcourse] = useState('');
  const [editedArtscourse, setEditedArtscourse] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/forms/alll');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8181/api/forms/deletee/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
    setEditedCollege(user.college);
    setEditedEngcourse(user.engcourse);
    setEditedArtscourse(user.artscourse);
  };

  const cancelEdit = () => {
    setEditingUser(null);
    setEditedName('');
    setEditedEmail('');
    setEditedCollege('');
    setEditedEngcourse('');
    setEditedArtscourse('');
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:8181/api/forms/updatee/${editingUser.id}`, {
        name: editedName,
        email: editedEmail,
        college: editedCollege,
        engcourse: editedEngcourse,
        artscourse: editedArtscourse,
      });
      fetchUsers(); 
      cancelEdit();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="applicant-details-container">
        <div className="applicant-details-header">
          <h1>Welcome, Admin</h1>
        </div>
        <div className="applicant-details-content">
          <div className="applicant-table">
            <h2>Applied Users</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>College</th>
                  <th>Eng Course</th>
                  <th>Arts Course</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{editingUser === user ? <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} /> : user.name}</td>
                    <td>{editingUser === user ? <input type="text" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} /> : user.email}</td>
                    <td>{editingUser === user ? <input type="text" value={editedCollege} onChange={(e) => setEditedCollege(e.target.value)} /> : user.college}</td>
                    <td>{editingUser === user ? <input type="text" value={editedEngcourse} onChange={(e) => setEditedEngcourse(e.target.value)} /> : user.engcourse}</td>
                    <td>{editingUser === user ? <input type="text" value={editedArtscourse} onChange={(e) => setEditedArtscourse(e.target.value)} /> : user.artscourse}</td>
                    <td>
                      {editingUser === user ? (
                        <>
                          <button className="update-button" onClick={updateUser}>Update</button>
                          <button className="cancel-button" onClick={cancelEdit}>Cancel</button>
                        </>
                      ) : (
                        <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                      )}
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

export default ApplicantDetails;

