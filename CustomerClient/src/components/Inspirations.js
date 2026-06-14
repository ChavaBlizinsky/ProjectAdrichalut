import React from 'react';
import "../assents/styles/Inspirations.css"
import "../assents/styles/styles.css"
import "../App.css"
const Inspirations = ({ image, title, description }) => (
  <div className="inspiration-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Inspirations;