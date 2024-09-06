import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Signin.css";
import Footer from "./Footer";
import NavbarLogin from "./NavbarLogin";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icon components

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ph_number, setPhnumber] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State variable for password visibility
  const Role = "USER";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhnumber(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\da-zA-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:8181/api/login/addUser", {
        name: name,
        email: email,
        password: password,
        phnumber: ph_number,
        role: Role,
      });
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <NavbarLogin />
      <div className="login">
        <center>
          <div className="h21">Register</div>
        </center>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-container1">
            <label className="lab" htmlFor="name">
              Name
            </label>
            <input
              required
              className="lab1"
              value={name}
              id="name"
              onChange={handleNameChange}
              placeholder="Enter Your Fullname"
            />
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="email">
              E-mail
            </label>
            <input
              className="lab1"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your Email"
              id="email"
              name="email"
            />
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="password">
              Password
            </label>
            <div className="password-input-container">
              <input
                className="lab1 password-input"
                required
                type={showPassword ? "text" : "password"} // Toggle between text and password type
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                id="password"
                name="password"
              />
              <span className="toggle-password-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle eye icon */}
              </span>
            </div>
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="phonenumber">
              Mobile Number
            </label>
            <input
              className="lab1"
              required
              type="phonenumber"
              value={ph_number}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your Moblie Number"
              id="number"
              name="number"
            />
          </div>
          <div className="button-container">
            <button className="button2" type="submit">
              Proceed
            </button>
          </div>
        </form>
        <div className="register">
          <Link to={"/login"}>
            <button className="link-btn2">
              Already have an account? Login here.
            </button>
          </Link>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Register;
