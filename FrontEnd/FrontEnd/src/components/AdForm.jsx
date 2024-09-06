import { useState } from 'react';
import '../assets/css/form.css'; 
import Footer from './Footer';
import Nav from './NavBar';
import axios from 'axios';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [aadhar_number, setAadhar_number] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [tenthmark, setTenthmark] = useState('');
  const [twelfthmark, setTwelfthmark] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedEngineeringCourse, setSelectedEngineeringCourse] = useState('');

  const handleCourseChange = (event) => {
    const { value } = event.target;
    setSelectedCourse(value);
  }

  const handleEngineeringCourseChange = (event) => {
    const { value } = event.target;
    setSelectedEngineeringCourse(value);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8181/api/forms/addd", {
        name: name,
        dob: dob,
        email: email,
        mobile: mobile,
        gender: gender,
        address: address,
        aadharNumber: aadhar_number,
        tenthMark: tenthmark,
        twelfthMark: twelfthmark,
        college: selectedCourse,
        engcourse: selectedEngineeringCourse,
      });
      console.log("Applied successful:", response.data);
      alert("Applied successfully");
      const amountx= 250
      var options = {
      key: "rzp_test_i1tLowNKXmrrLX",
      key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
      amount: amountx*100,
      currency: "INR",
      name: "D-Portal",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id)
      },
      prefill: {
        name: "Prasanna",
        email: "prasannarithi1618@gmail.com",
        contact: "6382200671"
      },
      notes: {
        address: "Sri krishna college of Engineering and Technology"
      },
      theme: {
        color: "#3399cc"
      }
    }

    var pay = new window.Razorpay(options)
    pay.open()
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <form className="registration-form" onSubmit={handleSubmit}>
        <center><h1 className='for'>ADMISSION FORM</h1></center>
        <div className='get-done'>
          <div className="form-container">
          <div className="personal-details">
              <h2>Personal Details</h2>
              <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
               <input required id="fullName" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                 <label htmlFor="dob">Date of Birth</label>
                 <input required id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                 <label htmlFor="email">Email</label>
                 <input required id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="mobile">Mobile Number</label>
                <input required id="mobile" type="tel" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />                
                <label htmlFor="gender">Gender</label>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="">Select Gender</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                </select>
                <label htmlFor="Address">Address</label>
                <input required id="address" type="text" placeholder="Enter your Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
            </div>
            <div className="identity-details">
              <h2>Identity Details</h2>
              <div className="form-group">
              <label htmlFor="idType">Aadhar Number</label>
                 <input required id="idType" type="text" placeholder="Enter Aadhar Number" value={aadhar_number} onChange={(e) => setAadhar_number(e.target.value)}/>
                 <label htmlFor="idNumber">10th Mark</label>
                 <input required id="idNumber" type="text" placeholder="Enter 10th Mark" value={tenthmark} onChange={(e) => setTenthmark(e.target.value)}/>
                 <label htmlFor="issueAuthority">12th Mark</label>
                 <input required id="issueAuthority" type="text" placeholder="Enter 12th Mark" value={twelfthmark} onChange={(e) => setTwelfthmark(e.target.value)}/>
                <label htmlFor="course">Course</label>
                <select id="course" value={selectedCourse} required onChange={handleCourseChange}>
                  <option value="">Select a course</option>
                  <option value="SKCET">SKCET</option>
                  <option value="SKCT">SKCT</option>
                </select>
                  <div>
                    <label htmlFor="engineeringCourse">Engineering Courses</label>
                    <select id="engineeringCourse" value={selectedEngineeringCourse} required onChange={handleEngineeringCourseChange}>
                      <option value="">Select an engineering course</option>
                      <option value="B.Tech Information Technology">B.Tech Information Technology</option>
                      <option value="B.E Computer Science and Engineering">B.E Computer Science and Engineering</option>
                      <option value="B.E Mechanical Engineering">B.E Mechanical Engineering</option>
                      <option value="B.Tech Artificial Intelligence">B.Tech Artificial Intelligence</option>
                      <option value="B.E Mechatronics Engineering">B.E Mechatronics Engineering</option>
                      <option value="B.E Civil Engineering">B.E Civil Engineering</option>
                      <option value="B.E Computer Science and design">B.E Computer Science and design</option>
                      <option value="Science and Humanities">Science and Humanities</option>
                      <option value="B.E Computer Science and Engineering(Cyber Security)">B.E Computer Science and Engineering(Cyber Security)</option>
                      <option value="M.E Applied Electronics">M.E Applied Electronics</option>
                      <option value="M.E Computer Science and Engineering">M.E Computer Science and Engineering</option>
                      <option value="Master of Business Administration">Master of Business Administration</option>
                      <option value="M.E Engineer Design">M.E Engineer Design</option>
                    </select>
                  </div>
                {/* {selectedCourse === 'Arts' && (
                  <div>
                    <label htmlFor="artsCourse">Arts Courses</label>
                    <select id="artsCourse" required onChange={handleArtsCourseChange}>
                      <option value="">Select an arts course</option>
                      <option value="">B.A English Literature</option>
                      <option value="">B.Sc Mathematics</option>
                      <option value="">B.Sc Electronics & Communication Systems</option>
                      <option value="">B.Sc Costume Design and Fashion</option>
                      <option value="">B.Sc Psychology</option>
                      <option value="">B.Sc Information Technology</option>
                      <option value="">B.Sc Data Science</option>
                      <option value="">B.Com. Commerce with Computer Application</option>
                      <option value="">M.A. English Literature</option>
                      <option value="">M.A Public Administration</option>
                      <option value="">M.Sc Biotechnology</option>
                      <option value="">M.Sc Information Technology</option>
                      <option value="">M.Sc Computer Technology</option>
                      <option value="">M.Com. International Business</option>
                      <option value="">M.Com. Commerce</option>
                    </select>
                  </div>
                )} */}
              </div>
            </div>
          </div>  
        </div>
        <button className='btn-form' type="submit">Apply</button>
      </form>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default RegistrationForm;
