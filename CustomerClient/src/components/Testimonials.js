import React from 'react';
import "../assents/styles/Testimonials.css"
import "../assents/styles/styles.css"
import "../App.css"
const Testimonials = ({ name, text }) => (
  <div className="testimonial-card">
    <h3>{name}</h3>
    <p>{text}</p>
  </div>
);

export default Testimonials;