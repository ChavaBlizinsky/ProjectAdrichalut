import React from 'react';
import { Link } from 'react-router-dom';
import "../assents/styles/Navbar.css"
import "../assents/styles/styles.css"
import "../App.css"
const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">דף הבית</Link></li>
      <li><Link to="/about">אודות</Link></li>
      <li><Link to="/services">שירותים</Link></li>
      {/* <li><Link to="/blog">בלוג</Link></li> */}
      {/* <li><Link to="/contact">צור קשר</Link></li> */}
      {/* <li><Link to="/inspirations">השראות</Link></li> */}
      <li><Link to="/InspirationsGallery">השראות</Link></li>
    
            <li><Link to="/CustomerLoginCheck">להתחברות</Link></li>
      <li><Link to="/HomeSignupCTA">להרשמה</Link></li>
    </ul>
  </nav>
);

export default Navbar;