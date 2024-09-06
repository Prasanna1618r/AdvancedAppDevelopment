import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '/src/assets/css/AdminLogin.css';
import NavbarLogin from "../NavbarLogin";

function LogAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password match the admin credentials
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/adminp");
    } else {
      setErrorMessage("Wrong email or password");
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="button11" type="submit">
            Log In
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        
      </div>
    </div>
  );
}

export default LogAdmin;