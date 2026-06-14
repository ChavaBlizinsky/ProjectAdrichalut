// // import React from 'react';
// // import "../assents/styles/About.css"
// // import "../assents/styles/styles.css"
// // import "../App.css"
// // const About = () => (
// //   <div className="about-us">
// //     <h2>אודות האדריכלית</h2>
// //     <p>תיאור מקצועי של האדריכלית עם ניסיון והמלצות.</p>
// //   </div>
// // );

// // export default About;
// import React from 'react';
// import "../assents/styles/About.css";
// import "../assents/styles/styles.css";
// import "../App.css";

// const About = () => (
//   <div className="about-page">

//     <section className="about-hero">
//       <div className="overlay">
//         <h1>אודות האדריכלית</h1>
//         <p>
//           תכנון אדריכלי מדויק, חדשני ומלא השראה — עם שילוב מושלם בין
//           פונקציונליות, אסתטיקה וחשיבה יצירתית.
//         </p>
//       </div>
//     </section>

//     <section className="about-content container">

//       <div className="about-section">
//         <h2>חזון אדריכלי</h2>
//         <p>
//           כל פרויקט מתחיל בהקשבה אמיתית לצרכים, לחלומות ולסגנון החיים של
//           הלקוחות. המטרה היא ליצור חללים מעוצבים, מדויקים ונעימים אשר
//           משלבים חדשנות אדריכלית יחד עם חוויית מגורים ייחודית.
//         </p>

//         <p>
//           תהליך העבודה מבוסס על ירידה לפרטים הקטנים ביותר — החל מתכנון
//           החלל, התאמת התאורה והחומרים ועד יצירת זרימה הרמונית בין כל חלקי
//           הבית או המבנה.
//         </p>
//       </div>

//       <div className="about-grid">

//         <div className="info-card">
//           <h3>תכנון יוקרתי</h3>
//           <p>
//             יצירת חללים מודרניים ואלגנטיים בהתאמה אישית מלאה לכל לקוח,
//             תוך דגש על איכות, פרקטיקה ועיצוב עכשווי.
//           </p>
//         </div>

//         <div className="info-card">
//           <h3>ליווי מלא</h3>
//           <p>
//             ליווי מקצועי משלב הרעיון הראשוני ועד הביצוע הסופי, כולל עבודה
//             מול בעלי מקצוע, ספקים וקבלנים.
//           </p>
//         </div>

//         <div className="info-card">
//           <h3>חשיבה יצירתית</h3>
//           <p>
//             שילוב פתרונות תכנון מתקדמים לניצול חכם של חללים תוך שמירה על
//             קו עיצובי נקי, מרשים ומזמין.
//           </p>
//         </div>

//       </div>

//       <div className="about-section">
//         <h2>ניסיון ומקצועיות</h2>

//         <p>
//           במהלך השנים תוכננו מגוון רחב של פרויקטים — בתים פרטיים, דירות
//           יוקרה, משרדים וחללים מסחריים — תוך התאמה מדויקת לצורכי הלקוח
//           ושמירה על סטנדרטים גבוהים במיוחד.
//         </p>

//         <p>
//           השילוב בין ניסיון מקצועי, ראייה עיצובית רחבה וחשיבה פרקטית מאפשר
//           ליצור פרויקטים בעלי נוכחות ייחודית וחוויית שימוש יוצאת דופן.
//         </p>
//       </div>

//       <section className="stats-section">

//         <div className="stat-box">
//           <h2>10+</h2>
//           <span>שנות ניסיון</span>
//         </div>

//         <div className="stat-box">
//           <h2>250+</h2>
//           <span>פרויקטים</span>
//         </div>

//         <div className="stat-box">
//           <h2>100%</h2>
//           <span>התאמה אישית</span>
//         </div>

//       </section>

//       <div className="quote-section">
//         <blockquote>
//           "אדריכלות איכותית אינה רק עיצוב — היא יצירת חוויה, תחושה ואורח חיים."
//         </blockquote>
//       </div>

//     </section>
//   </div>
// );

// export default About;
import React from "react";
import "../assents/styles/About.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeUp} custom={1}>
            אודות האדריכלית
          </motion.h1>

          <motion.p variants={fadeUp} custom={2}>
            תכנון אדריכלי מדויק, חדשני ומלא השראה — שילוב בין פונקציונליות, אסתטיקה וחשיבה יצירתית.
          </motion.p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="about-container">

        <motion.div className="text-block" initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp}>חזון אדריכלי</motion.h2>
          <motion.p variants={fadeUp}>
            כל פרויקט מתחיל בהקשבה אמיתית לצרכים ולסגנון החיים של הלקוח.
          </motion.p>
          <motion.p variants={fadeUp}>
            תכנון מדויק עד הפרטים הקטנים — תאורה, חומרים וזרימה מרחבית.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <div className="grid">

          {[
            {
              title: "תכנון יוקרתי",
              text: "חללים מודרניים בהתאמה אישית מלאה עם דגש על איכות ועיצוב."
            },
            {
              title: "ליווי מלא",
              text: "מהרעיון ועד הביצוע מול קבלנים וספקים."
            },
            {
              title: "חשיבה יצירתית",
              text: "פתרונות חכמים לניצול חלל ועיצוב נקי ומרשים."
            }
          ].map((item, i) => (
            <motion.div
              className="card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}

        </div>

        {/* STATS */}
        <div className="stats">

          {[
            { num: "10+", label: "שנות ניסיון" },
            { num: "250+", label: "פרויקטים" },
            { num: "100%", label: "התאמה אישית" }
          ].map((s, i) => (
            <motion.div
              className="stat"
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h2>{s.num}</h2>
              <span>{s.label}</span>
            </motion.div>
          ))}

        </div>

        {/* QUOTE */}
        <motion.div
          className="quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <blockquote>
            “אדריכלות היא לא עיצוב — היא חוויה מרחבית של חיים.”
          </blockquote>
        </motion.div>

      </section>
    </div>
  );
};

export default About;