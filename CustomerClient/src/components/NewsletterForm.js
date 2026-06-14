import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToNewsletter } from '../redux/slices/newsletterSlice';
import "../assents/styles/NewsletterForm.css"
import "../assents/styles/styles.css"
import "../App.css"
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToNewsletter(email));
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="הכנס את הדוא'ל שלך"
      />
      <button type="submit">הירשם לניו זלטר</button>
    </form>
  );
};

export default NewsletterForm;