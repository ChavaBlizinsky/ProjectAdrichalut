// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "./ProjectCalculator.css";
// import "../assents/styles/ProjectCalculator.css"
// const ProjectCalculator = () => {
//   const navigate = useNavigate();

//   const [type, setType] = useState("דירה");
//   const [size, setSize] = useState(100);
//   const [finish, setFinish] = useState("סטנדרט");
//   const [service, setService] = useState("תכנון בלבד");

//   // חישוב מחיר בסיסי למ"ר לפי סוג פרויקט
//   const basePriceMap = {
//     "דירה": 120,
//     "בית פרטי": 180,
//     "מסחרי": 220
//   };

//   // מקדם רמת גימור
//   const finishMultiplier = {
//     "בסיסי": 0.85,
//     "סטנדרט": 1,
//     "יוקרתי": 1.35,
//     "יוקרה גבוהה": 1.7
//   };

//   // מקדם שירות
//   const serviceMultiplier = {
//     "תכנון בלבד": 0.6,
//     "ליווי מלא": 1,
//     "עיצוב פנים": 1.25
//   };

//   const basePrice = basePriceMap[type] || 120;

//   const totalPrice =
//     size *
//     basePrice *
//     finishMultiplier[finish] *
//     serviceMultiplier[service];

//   // זמן (חודשים)
//   const baseTimeMap = {
//     "דירה": 4,
//     "בית פרטי": 8,
//     "מסחרי": 10
//   };

//   const timeMultiplier =
//     finish === "יוקרה גבוהה" ? 1.4 :
//     finish === "יוקרתי" ? 1.2 :
//     1;

//   const totalTime = Math.round(baseTimeMap[type] * timeMultiplier);

//   return (
//     <div className="calculator">

//       <h2>מחשבון פרויקט אדריכלי</h2>

//       <div className="form">

//         <label>סוג פרויקט</label>
//         <select onChange={(e) => setType(e.target.value)}>
//           <option>דירה</option>
//           <option>בית פרטי</option>
//           <option>מסחרי</option>
//         </select>

//         <label>גודל (מ״ר)</label>
//         <input
//           type="number"
//           value={size}
//           onChange={(e) => setSize(Number(e.target.value))}
//         />

//         <label>רמת גימור</label>
//         <select onChange={(e) => setFinish(e.target.value)}>
//           <option>בסיסי</option>
//           <option>סטנדרט</option>
//           <option>יוקרתי</option>
//           <option>יוקרה גבוהה</option>
//         </select>

//         <label>סוג שירות</label>
//         <select onChange={(e) => setService(e.target.value)}>
//           <option>תכנון בלבד</option>
//           <option>ליווי מלא</option>
//           <option>עיצוב פנים</option>
//         </select>

//       </div>

//       <div className="results">
//         <h3>תוצאה משוערת</h3>

//         <p>💰 עלות: ₪{Math.round(totalPrice).toLocaleString()}</p>
//         <p>⏳ זמן ביצוע: {totalTime} חודשים</p>
//       </div>

//       <button
//         className="cta"
//         onClick={() => navigate("/agreement")}
        
//       >
//         מעבר להסכם התקשרות
//       </button>
// {/* <button onClick={() => navigate("/agreement")}>
//   מעבר להסכם התקשרות
// </button> */}
//     </div>
//   );
// };

// export default ProjectCalculator;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 import "../assents/styles/ProjectCalculator.css"

const ArchitectureCalculator = () => {
  const navigate = useNavigate();

  // 📌 קלטים בסיסיים
  const [houseSize, setHouseSize] = useState(100); // מ"ר
  const [rooms, setRooms] = useState(1);

  // 📌 שירותים
  const [globalUnit, setGlobalUnit] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [decor, setDecor] = useState(false);
  const [contract, setContract] = useState(false);
  const [procurement, setProcurement] = useState(false);
  const [fullRooms, setFullRooms] = useState(false);

  // =========================
  // 📊 מחירון אמיתי
  // =========================

  const ROOM_PRICE = 1200;        // לכל חלל
  const GLOBAL_UNIT_PRICE = 5000;  // יחידת דיור
  const KITCHEN_PRICE = 5000;     // מטבח
  const DECOR_PRICE = 2500;       // דקורציה
  const CONTRACT_PRICE = 4500;    // חוזה
  const PROCUREMENT_PRICE = 1500; // רכש
  const FULL_ROOM_PRICE = 3500;   // חדרים קומפלט

  // =========================
  // 🧠 חישוב חללים לפי גודל בית
  // =========================

  // כל 25 מ"ר = חלל אחד (היגיון ריאלי לאדריכלות בסיסית)
  const autoRoomsFromSize = Math.max(1, Math.floor(houseSize / 25));

  // לוקחים את הגדול מבין מה שהמשתמש שם לבין חישוב אוטומטי
  const finalRooms = Math.max(rooms, autoRoomsFromSize);

  // =========================
  // 💰 חישוב מחיר
  // =========================

  let total =
    finalRooms * ROOM_PRICE +
    (globalUnit ? GLOBAL_UNIT_PRICE : 0) +
    (kitchen ? KITCHEN_PRICE : 0) +
    (decor ? DECOR_PRICE : 0) +
    (contract ? CONTRACT_PRICE : 0) +
    (procurement ? PROCUREMENT_PRICE : 0) +
    (fullRooms ? FULL_ROOM_PRICE : 0);

 return (
  <div className="calc-page">

    <h1 className="calc-title">מחשבון תכנון אדריכלי</h1>

    <div className="calc-card">

      <label>גודל הבית (מ״ר)</label>
      <input
        type="number"
        value={houseSize}
        onChange={(e) => setHouseSize(Number(e.target.value))}
      />

      <label>מספר חללים ידני (אופציונלי)</label>
      <input
        type="number"
        value={rooms}
        min="1"
        onChange={(e) => setRooms(Number(e.target.value))}
      />

      <div className="divider" />

      <label><input type="checkbox" onChange={(e) => setGlobalUnit(e.target.checked)} /> יחידת דיור</label>
      <label><input type="checkbox" onChange={(e) => setKitchen(e.target.checked)} /> מטבח קומפלט</label>
      <label><input type="checkbox" onChange={(e) => setDecor(e.target.checked)} /> דקורציה</label>
      <label><input type="checkbox" onChange={(e) => setContract(e.target.checked)} /> חוזה התקשרות</label>
      <label><input type="checkbox" onChange={(e) => setProcurement(e.target.checked)} /> רכש</label>
      <label><input type="checkbox" onChange={(e) => setFullRooms(e.target.checked)} /> חדרים קומפלט</label>

    </div>

    <div className="calc-result">
      <h2>סה״כ מחיר משוער</h2>
      <div className="calc-price">₪ {total.toLocaleString()}</div>
      <div className="calc-sub">חללים מחושבים: {finalRooms}</div>
    </div>

    <button className="calc-button" onClick={() => navigate("/agreement")}>
      מעבר להסכם התקשרות
    </button>

  </div>
);
};




export default ArchitectureCalculator;