import React from 'react';
import "../assents/styles/styles.css"
const Contact = () => (
  <div className="page">
    <h2>צור קשר</h2>
    <form>
      <input type="text" placeholder="שם מלא" />
      <input type="email" placeholder="אימייל" />
      <textarea placeholder="הודעה"></textarea>
      <button type="submit">שלח</button>
    </form>
  </div>
);

export default Contact;