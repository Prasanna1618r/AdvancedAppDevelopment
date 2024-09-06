import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './assets/css/App.css';
import LandingPage from './components/Landingpage';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" exact element={<Login/>} />
          <Route path="/homepage" exact element={<LandingPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App