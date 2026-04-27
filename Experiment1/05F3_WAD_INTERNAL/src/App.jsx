import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Login from './components/Login';
import Registration from './components/Registration';
import JobListings from './components/JobListings';
import ApplyJob from './components/ApplyJob';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<JobListings/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/apply" element={<ApplyJob/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <footer className="text-center mt-5 mb-3">
        <h3>Copyright @24071A05F3</h3>
      </footer>
    </Router>
  );
}

export default App;
