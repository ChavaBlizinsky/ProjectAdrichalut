import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSignupCTA.css";

const HomeSignupCTA = () => {
  const navigate = useNavigate();
  return (
    <div className="cta-signup-container">
      <h2 className="cta-signup-title">הצטרפו עכשיו לקהילת הלקוחות שלנו!</h2>
      <p className="cta-signup-desc">הירשמו וקבלו גישה להשראות, שירותים ייחודיים ועדכונים חמים.</p>
      <button className="cta-signup-btn" onClick={() => navigate("/signup")}>להרשמה מהירה</button>
    </div>
  );
};

export default HomeSignupCTA;
