import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Inspirations from './pages/Inspirations';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import "../src/assents/styles/styles.css"
import InspirationsGallery from './components/InspirationsGallery';
import CustomerSignup from './components/CustomerSignup';
import ProjectCalculator from './components/ProjectCalculator';
import AgreementSign from './components/AgreementSign';
import ConsultationBooking from './components/ConsultationBooking';
import HomeSignupCTA from './components/HomeSignupCTA';
import CustomerDashboard from './components/CustomerDashboard';
import CustomerLoginCheck from './components/CustomerLoginCheck';

const App = () => {
  return (
    <div style={{ minHeight: '100vh' }}>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/inspirations" element={<Inspirations />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/InspirationsGallery" element={<InspirationsGallery />} />
          <Route path="/signup" element={<CustomerSignup />} />
          <Route path="/agreement" element={<AgreementSign />} />
          <Route path="/calculator" element={<ProjectCalculator />} />
          <Route path="/ConsultationBooking" element={<ConsultationBooking/>} />
           <Route path="/HomeSignupCTA" element={<HomeSignupCTA/>} />
           <Route path="/CustomerDashboard" element={<CustomerDashboard/>} />
           <Route path="/CustomerLoginCheck" element={<CustomerLoginCheck/>} />
          {/* <Route path="/agreement" element={<Agreement/>} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;