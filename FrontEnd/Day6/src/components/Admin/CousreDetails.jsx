import { useState } from 'react';
import '/src/assets/css/CourseDetails.css';
import Sidebar from './SideBar';

const CourseDetails = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Computer Science And Engineering', email: 'B.E'},
    { id: 2, username: 'Information Technology', email: 'B.E'},
    { id: 3, username: 'English Literature', email: 'B.A'},
    { id: 4, username: 'Computer Science And Engineering', email: 'M.E'},
    { id: 5, username: 'English Literature', email: 'M.A'},
  ]);
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: ''
  });
  const [isEdit, setIsEdit] = useState(false);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEdit(true);
  };

  const handleSave = () => {
    if (isEdit) {
      setUsers(users.map(user => (user.id === formData.id ? formData : user)));
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: '', username: '', email: '' });
    setIsEdit(false);
  };

  return (
    <div>
      <Sidebar/>
      <div className="course-details-container">
        <div className="course-details-header">
          <h1>Welcome, Admin</h1>
          {/* <button className="logout-button" onClick={handleLogout}>Logout</button> */}
        </div>
        <div className="course-details-content">
          <div className="course-table">
            <h2>Courses</h2>
            <table>
              <thead>
                <tr>
                  <th>Coursename</th>
                  <th>Degree</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="edit-button1" onClick={() => handleEdit(user)}>Edit</button>
                      <button className="delete-button1" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="course-form">
            <h2>{isEdit ? 'Edit User' : 'Add Course'}</h2>
            <input
              type="text"
              placeholder="CourseName"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
              type="text"
              placeholder="Degree"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button onClick={handleSave} className='save-button1'>{isEdit ? 'Save' : 'Add'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
