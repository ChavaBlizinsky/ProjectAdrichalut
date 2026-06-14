import React, { useState } from "react";
import "../assents/styles/Consultation.css";

const ConsultationBooking = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("הפגישה נקבעה בהצלחה — נחזור אליך בהקדם");

    setName("");
    setPhone("");
    setType("");
    setDate("");
  };

  return (
  <div className="consult-page">

    <div className="consult-card">

      <h1 className="consult-title">קביעת פגישת ייעוץ</h1>
      <p className="consult-sub">
        השאירו פרטים ונחזור אליכם לתיאום פגישה אדריכלית מותאמת אישית
      </p>

      <form onSubmit={handleSubmit} className="consult-form">

        <input
          type="text"
          placeholder="שם מלא"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="טלפון"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">סוג פרויקט</option>
          <option value="דירה">דירה</option>
          <option value="בית פרטי">בית פרטי</option>
          <option value="מסחרי">מסחרי</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit" className="consult-btn">
          שליחת בקשה
        </button>

      </form>

    </div>

  </div>
);
};

export default ConsultationBooking