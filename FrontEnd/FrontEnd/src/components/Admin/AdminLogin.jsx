import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '/src/assets/css/AdminLogin.css';
import NavbarLogin from "../NavbarLogin";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/authSlice";

function LogAdmin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8181/api/login/authenticate', credentials)
      .then((res) => {
        console.log('Login successful');
        const details = res.data;
        console.log('Token and Role: ', details);
        const token = details;
        const tokenExpiration = new Date();
        tokenExpiration.setHours(tokenExpiration.getHours() + 1);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('tokenExpiration', tokenExpiration.toString());
        // sessionStorage.setItem('role', details.role);
      })
      .then(() => {
        const token = sessionStorage.getItem('token');
        const tokenExpiration = sessionStorage.getItem('tokenExpiration');
        // const role = sessionStorage.getItem('role');

        if (token && tokenExpiration && new Date(tokenExpiration) > new Date()) {
          const decodedToken = jwtDecode(token);
        // const role = decodedToken.role;
        // console.log(role);
        const {exp,iat,role,sub} = decodedToken;
        dispatch(loginSuccess({exp,iat,role,sub})); 
        console.log("Stored Redux:",{role,exp,iat,sub});
          
          if (role === 'ADMIN') {
            navigate('/adminp');
          }
        } else {
          console.log('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <div>
        <NavbarLogin/>
      <div className="auth-form-container11">
        <center>
          <div className="l11">Login</div>
        </center>
        <form className="login-formm" onSubmit={handleSubmit}>
          <label required className="emm" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="i11"
            required
            type="email"
            placeholder="Enter your gmail"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <br />
          <label className="paa" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="i11"
            required
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <br />
          <button className="button11" type="submit">
            Log In
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default LogAdmin;