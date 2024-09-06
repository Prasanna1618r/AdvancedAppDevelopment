// // import React from 'react';
// import '../assets/css/form.css'; 
// import Footer from './Footer';
// import Nav from './NavBar';

// const RegistrationForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("Applied Successfully");
//   }

//   return (
//     <div>
//       <nav>
//         <Nav />
//       </nav>
//       <form className="registration-form" onSubmit={handleSubmit}>
//         <center><h1 className='for'>ADMISSION FORM</h1></center>
//         <div className='get-done'>
//           <div className="form-container">
//             <div className="personal-details">
//               <h2>Personal Details</h2>
//               <div className="form-group">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input required id="fullName" type="text" placeholder="Enter your full name" />
//                 <label htmlFor="dob">Date of Birth</label>
//                 <input required id="dob" type="date" />
//                 <label htmlFor="email">Email</label>
//                 <input required id="email" type="email" placeholder="Enter your email" />
//                 <label htmlFor="mobile">Mobile Number</label>
//                 <input required id="mobile" type="tel" placeholder="Enter mobile number" />
//                 <label htmlFor="gender">Gender</label>
//                 <select id="course" required>
//                   <option value="">Select Gender</option>
//                   <option value="Engineering">Male</option>
//                   <option value="Arts">Female</option>
//                 </select>
//               </div>
//             </div>
//             <div className="identity-details">
//               <h2>Identity Details</h2>
//               <div className="form-group">
//                 <label htmlFor="idType">Aadhar Number</label>
//                 <input required id="idType" type="text" placeholder="Enter ID type" />
//                 <label htmlFor="idNumber">10th Mark</label>
//                 <input required id="idNumber" type="text" placeholder="Enter ID number" />
//                 <label htmlFor="issueAuthority">12th Mark</label>
//                 <input required id="issueAuthority" type="text" placeholder="Enter issue department" />
//                 <label htmlFor="course">Course</label>
//                 <select id="course" required>
//                   <option value="">Select a course</option>
//                   <option value="Engineering">Engineering</option>
//                   {/* <option value="Medicine"></option> */}
//                   <option value="Arts">Arts</option>
//                   <option value="Science">Science</option>
//                 </select>
//               </div>
//             </div>
//           </div>  
//         </div>
//         <button className='btn-form' type="submit">Apply</button>
//       </form>
//       <footer>
//         <Footer/>
//       </footer>
//     </div>
//   );
// }

// export default RegistrationForm;


import { useState } from 'react';
import '../assets/css/form.css'; 
import Footer from './Footer';
import Nav from './NavBar';

const RegistrationForm = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedEngineeringCourse, setSelectedEngineeringCourse] = useState('');
  const [selectedArtsCourse, setSelectedArtsCourse] = useState('');

  const handleCourseChange = (event) => {
    const { value } = event.target;
    setSelectedCourse(value);
  }

  const handleEngineeringCourseChange = (event) => {
    const { value } = event.target;
    setSelectedEngineeringCourse(value);
  }

  const handleArtsCourseChange = (event) => {
    const { value } = event.target;
    setSelectedArtsCourse(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Applied Successfully");
  }

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
               <input required id="fullName" type="text" placeholder="Enter your full name" />
                 <label htmlFor="dob">Date of Birth</label>
                 <input required id="dob" type="date" />
                 <label htmlFor="email">Email</label>
                 <input required id="email" type="email" placeholder="Enter your email" />
                <label htmlFor="mobile">Mobile Number</label>
                <input required id="mobile" type="tel" placeholder="Enter mobile number" />                
                <label htmlFor="gender">Gender</label>
                <select id="gender" required>
                  <option value="">Select Gender</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="identity-details">
              <h2>Identity Details</h2>
              <div className="form-group">
              <label htmlFor="idType">Aadhar Number</label>
                 <input required id="idType" type="text" placeholder="Enter Aadhar Number" />
                 <label htmlFor="idNumber">10th Mark</label>
                 <input required id="idNumber" type="text" placeholder="Enter 10th Mark" />
                 <label htmlFor="issueAuthority">12th Mark</label>
                 <input required id="issueAuthority" type="text" placeholder="Enter 12th Mark" />
                <label htmlFor="course">Course</label>
                <select id="course" required onChange={handleCourseChange}>
                  <option value="">Select a course</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Arts">Arts & Science</option>
                </select>
                {selectedCourse === 'Engineering' && (
                  <div>
                    <label htmlFor="engineeringCourse">Engineering Courses</label>
                    <select id="engineeringCourse" required onChange={handleEngineeringCourseChange}>
                      <option value="">Select an engineering course</option>
                      <option value="">B.Tech Information Technology</option>
                      <option value="">B.E Computer Science and Engineering</option>
                      <option value="">B.E Mechanical Engineering</option>
                      <option value="">B.Tech Artificial Intelligence</option>
                      <option value="">B.E Mechatronics Engineering</option>
                      <option value="">B.E Civil Engineering</option>
                      <option value="">B.E Computer Science and design</option>
                      <option value="">Science and Humanities</option>
                      <option value="">B.E Computer Science and Engineering(Cyber Security)</option>
                      <option value="">M.E Applied Electronics</option>
                      <option value="">M.E Computer Science and Engineering</option>
                      <option value="">Master of Business Administration</option>
                      <option value="">M.E Engineer Design</option>
                    </select>
                  </div>
                )}
                {selectedCourse === 'Arts' && (
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
                )}
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
