import '../assets/css/foot.css';
function Footer() {
    return (
<div className='main-foot'>
<footer className="footer">
        <div className="background">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/privacy">PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/fd">FEEDBACK</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
}
export default Footer;