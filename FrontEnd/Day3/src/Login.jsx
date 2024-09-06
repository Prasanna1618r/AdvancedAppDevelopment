
import { Link } from "react-router-dom";
import "./LoginForm.css";
function Login() {
  return (
    <div>
      <nav>
        <ul className="sidebar">
          {/* <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height={26} viewBox="0 96 960 960" width={26}><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg></a></li> */}
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <ul>
          {/* <li><a href="#">Coding2go</a></li> */}
          <li className="hideOnMobile"><a href="/home">Home</a></li>
          <li className="hideOnMobile"><a href="#">About</a></li>
          <li className="hideOnMobile"><a href="#">Explore</a></li>
          <li className="hideOnMobile"><a href="/">Login</a></li>
          {/* <li className="menu-button" ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height={26} viewBox="0 96 960 960" width={26}><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></a></li> */}
        </ul>
      </nav>

    
    <div className="auth-form-container1">
      <center><div className="l1">Login</div></center>
      <form className="login-form">
        <label required className="em" htmlFor="email">Email</label>
        <br />
        <input className="i1" required type="email" placeholder="Enter your gmail" id="email" name="email" />
        <br />
        <label className="pa" htmlFor="password">Password</label>
        <br />
        <input className="i1" required type="password" placeholder="Enter your password" id="password" name="password" /><br />
        <Link to={"/home"}><button className="button1" type="submit" >Log In</button></Link>
      </form>
      <Link to={"/register"}><button className="link-btn1">Donot have an account? Register here.</button></Link>
      {/* <button className="link-btn1">Donot have an account? Register here.</button> */}
    </div>
    </div>
  )
}

export default Login;