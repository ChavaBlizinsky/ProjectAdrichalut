// import React from "react";
// import "../assents/styles/Hero.css";
// import logo from "../assents/images/image.png";
// const Hero = () => {
//   return (
//     <section className="hero">

//       {/* לוגו */}
//       <div className="hero-logo">
//         <img src={logo} alt="Architect Logo" />
//       </div>

//       {/* רקע */}
//       <div className="hero-bg">
//         <img src="../assents/images/hero-image.jpg" alt="Architecture Background" />
//       </div>

//       {/* שכבת כהות */}
//       <div className="hero-overlay"></div>

//       {/* תוכן */}
//       <div className="hero-content">

//         <h1>חללים שנולדים מתוך חזון</h1>

//         <p>
//           אדריכלות יוקרתית המשלבת דיוק הנדסי, יצירתיות בלתי מתפשרת וחשיבה
//           עמוקה על כל פרט קטן. כל פרויקט הוא סיפור חדש שנבנה עבורך.
//         </p>

//         <div className="hero-buttons">
//           <button className="primary-btn">צפה בפרויקטים</button>
//           <button className="secondary-btn">לקביעת פגישת ייעוץ</button>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default Hero;
import React from "react";
import "../assents/styles/Hero.css";
import { Link, Navigate } from 'react-router-dom';
import logo from "../assents/images/image.png";
import hero1 from "../assents/images/hero1.jpg";
import hero2 from "../assents/images/hero2.jpg";
import hero3 from "../assents/images/hero3.jpg";

const Hero = () => {
  return (
    <section className="hero-lux">

      {/* לוגו */}
      <div className="hero-logo">
        <img src={logo} alt="Architect Logo" />
      </div>

      {/* צד שמאל - טקסט */}
      <div className="hero-left">

        <h1>אדריכלות שמעצבת חוויה</h1>

        <p>
          חללים יוקרתיים הנולדים מתוך מחשבה עמוקה, דיוק הנדסי וראייה עיצובית
          חדשנית. כל פרויקט הוא יצירה ייחודית עם חתימה אישית.
        </p>

        {/* <div className="hero-buttons">
          <button className="primary-btn" >צפה בפרויקטים</button>
          <button className="secondary-btn" >לקביעת פגישת ייעוץ</button>
        </div> */}
        <div className="hero-buttons">
  <Link to="/InspirationsGallery">
    <button className="primary-btn">צפה בפרויקטים</button>
  </Link>

  <Link to="/signup">
    <button className="secondary-btn">  להרשמה </button>
  </Link>
 <Link to="/CustomerLoginCheck">
  <button className="secondary-btn">
   להתחברות
  </button>
</Link>
    {/* <Link to="/calculator">
    <button className="secondary-btn"> מעבר להסכם התקשרות </button>
  </Link> */}
</div>

      </div>

      {/* צד ימין - גלריה מרשימה */}
      <div className="hero-right">

        <div className="img big">
          <img src={hero1} alt="project 1" />
        </div>

        <div className="img">
          <img src={hero2} alt="project 2" />
        </div>

        <div className="img">
          <img src={hero3} alt="project 3" />
        </div>

      </div>

    </section>
  );
};

export default Hero;