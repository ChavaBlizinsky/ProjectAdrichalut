import React from 'react';
import InspirationCard from '../components/Inspirations';
import "../assents/styles/styles.css"
const Inspirations = () => (
  <div className="page">
    <h2>השראות עיצוביות</h2>
    <div className="inspirations">
      {/* כאן תוכל להציג תמונות השראה */}
      <InspirationCard image="/images/inspirations/design1.jpg" title="עיצוב מודרני" description="תיאור עיצוב הבית המודרני" />
      <InspirationCard image="/images/inspirations/design2.jpg" title="עיצוב כפרי" description="תיאור עיצוב הבית הכפרי" />
    </div>
  </div>
);

export default Inspirations;