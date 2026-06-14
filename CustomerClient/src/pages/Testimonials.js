import React from 'react';
import TestimonialCard from '../components/Testimonials';
import "../assents/styles/styles.css"
const Testimonials = () => (
  <div className="page">
    <h2>חוות דעת מלקוחות</h2>
    <div className="testimonials">
      {/* הצגת חוות דעת */}
      <TestimonialCard name="רינה כהן" text="העבודה עם האדריכלית הייתה מעולה!" />
      <TestimonialCard name="דני לוי" text="העיצובים מרהיבים והתהליך היה מקצועי!" />
    </div>
  </div>
);

export default Testimonials;