import { useState } from 'react';
import '../assets/css/form.css'; 
import Footer from './Footer';
import Nav from './NavBar';
import axios from 'axios';

const RegistrationForm1 = () => {
  const [name, setName] = useState('');
  const [aadhar_number, setAadhar_number] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [tenthmark, setTenthmark] = useState('');
  const [twelfthmark, setTwelfthmark] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedArtsCourse, setSelectedArtsCourse] = useState('');

  const handleCourseChange = (event) => {
    const { value } = event.target;
    setSelectedCollege(value);
  }
  const handleArtsCourseChange = (event) => {
    const { value } = event.target;
    setSelectedArtsCourse(value);
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
        college: selectedCollege,
        artscourse: selectedArtsCourse,
      });
      console.log("Applied successful:", response.data);
      alert("Applied successfully");
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
                <select id="course" value={selectedCollege} required onChange={handleCourseChange}>
                  <option value="">Select a College</option>
                  <option value="SKASC">SKASC</option>
                </select>
                  <div>
                    <label htmlFor="artsCourse">Arts Courses</label>
                    <select id="artsCourse" value={selectedArtsCourse} required onChange={handleArtsCourseChange}>
                      <option value="">Select an arts course</option>
                      <option value="B.A English Literature">B.A English Literature</option>
                      <option value="B.Sc Mathematics">B.Sc Mathematics</option>
                      <option value="B.Sc Electronics & Communication Systems">B.Sc Electronics & Communication Systems</option>
                      <option value="B.Sc Costume Design and Fashion">B.Sc Costume Design and Fashion</option>
                      <option value="B.Sc Psychology">B.Sc Psychology</option>
                      <option value="B.Sc Information Technology">B.Sc Information Technology</option>
                      <option value="B.Sc Data Science">B.Sc Data Science</option>
                      <option value="B.Com. Commerce with Computer Application">B.Com. Commerce with Computer Application</option>
                      <option value="M.A. English Literature">M.A. English Literature</option>
                      <option value="M.A Public Administration">M.A Public Administration</option>
                      <option value="M.Sc Biotechnology">M.Sc Biotechnology</option>
                      <option value="M.Sc Information Technology">M.Sc Information Technology</option>
                      <option value="M.Sc Computer Technology">M.Sc Computer Technology</option>
                      <option value="M.Com. International Business">M.Com. International Business</option>
                      <option value="M.Com. Commerce">M.Com. Commerce</option>
                    </select>
                  </div>
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

export default RegistrationForm1;
