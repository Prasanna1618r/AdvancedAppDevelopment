import { useState } from 'react';
import '/src/assets/css/ApplicantDetails.css';
import Sidebar from './SideBar';

const ApplicantDetails = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Dinesh', email: 'user1@example.com', role: '9025317201' },
    { id: 2, username: 'Deepak', email: 'user2@example.com', role: '8754988838' },
    { id: 3, username: 'Keerthana', email: 'user3@example.com', role: '8668132973' },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  
  return (
    <div>
      <Sidebar/>
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
                  <th>Phone Number</th>
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
                      <button className="delete-button2" onClick={() => deleteUser(user.id)}>Delete</button>
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
