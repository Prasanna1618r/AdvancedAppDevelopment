import { useState } from 'react';
import '../assets/css/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeSlide, setActiveSlide] = useState('student');

  const handleLogin = () => {
    console.log('Slide:', activeSlide);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <div className="form-slide" style={{ transform: `translateX(${activeSlide === 'student' ? '0' : '-100%'})` }}>
        <form className="form">
          <h1 className="title">Student Login</h1>
          <input
            className="input-field"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
      <div className="form-slide" style={{ transform: `translateX(${activeSlide === 'admin' ? '0' : '100%'})` }}>
        <form className="form">
          <h1 className="title">Admin Login</h1>
          <input
            className="input-field"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="slide-button" onClick={() => setActiveSlide('student')}>Student</button>
        <button className="slide-button" onClick={() => setActiveSlide('admin')}>Admin</button>
      </div>
    </div>
  );
};

export default Login;
