// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Login from './Login';
import Register from './Signup';
import Home from './Home';
import Form from './AdForm';
function App() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/form" exact element={<Form/>} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App;
