// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Login from './Login';
import Register from './Signup';
import Home from './Home';
import Form from './AdForm';
import ProfilePage from './Profile';
import AdminProfilePage from './AdminProfile';
import Courses from './Course';
import Display from './Card';
import GetCol from './GetCol';
import RegistrationForm from './AdForm';
import FAQPage from './Faq';
function App() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/form" exact element={<Form/>} />
          <Route path="/profile" exact element={<ProfilePage/>} />
          <Route path="/adminp" exact element={<AdminProfilePage/>} />
          <Route path="/course" exact element={<Courses/>} />
          <Route path="/college" exact element={<Display/>} />
          <Route path="/getcol" exact element={<GetCol/>} />
          <Route path="/form" exact element={<RegistrationForm/>} />
          <Route path="/faq" exact element={<FAQPage/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;