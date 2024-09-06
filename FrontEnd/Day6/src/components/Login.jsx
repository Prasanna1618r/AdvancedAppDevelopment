
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/LoginForm.css";
import Footer from "./Footer";
import NavbarLogin from "./NavbarLogin";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/getcol');
  };
  return (
    <div>
      <NavbarLogin/>
      <div className="auth-form-container1">
            <h2 className="l1">Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <label required className="em" htmlFor="email">Email</label>
                <br/>
                <input className="i1" required type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <br/>
                <label className="pa" htmlFor="password">Password</label>
                <br/>
                <input className="i1" required type="password" placeholder="********" id="password" name="password" /><br/>
                <button className="button1" type="submit" >Log In</button>
            </form>
            <Link to={"/Register"}><button className="link-btn1">Do not have an account? Register here.</button></Link>
        </div>
      <Footer/>
    </div>
  )
}

export default Login;