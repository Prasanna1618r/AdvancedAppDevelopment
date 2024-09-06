import { Link, useNavigate } from "react-router-dom";
import "../assets/css/LoginForm.css";
import Footer from "./Footer";
import NavbarLogin from "./NavbarLogin";
import { useState } from "react";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Redux/authSlice";

const Login = () => {
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
      })
      .then(() => {
        const token = sessionStorage.getItem('token');
        const tokenExpiration = sessionStorage.getItem('tokenExpiration');
        if (token && tokenExpiration && new Date(tokenExpiration) > new Date()) {
          const decodedToken = jwtDecode(token);
        const {exp,iat,role,sub} = decodedToken;
        dispatch(loginSuccess({exp,iat,role,sub})); 
        console.log("Stored Redux:",{role,exp,iat,sub});
          
          if (role === 'USER') {
            navigate('/getcol');
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
      <div className="auth-form-container1">
            <h2 className="l1">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label required className="em" htmlFor="email">Email</label>
                <br/>
                <input className="i1" required type="email" value={credentials.email} onChange={handleChange} placeholder="youremail@gmail.com" id="email" name="email" />
                <br/>
                <label className="pa" htmlFor="password">Password</label>
                <br/>
                <input className="i1" required type="password" value={credentials.password} onChange={handleChange} placeholder="********" id="password" name="password" /><br/>
                <button className="button1" type="submit" >Log In</button>
            </form>
            <Link to={"/Register"}><button className="link-btn1">Do not have an account? Register here.</button></Link>
        </div>
      <Footer/>
    </div>
  );
};

export default Login;
