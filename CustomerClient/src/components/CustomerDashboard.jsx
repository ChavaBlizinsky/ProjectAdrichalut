import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assents/styles/customerDashboard.css";

const CustomerDashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="dashboard-empty">
        אין נתוני לקוח
      </div>
    );
  }

  const customer = state;

  return (
    <div className="dashboard-page">

      <div className="dashboard-card">

        <h1>
          ברוך הבא {customer.firstName} {customer.lastName}
        </h1>

        <div className="info">
          <p><b>אימייל:</b> {customer.email}</p>
          <p><b>טלפון:</b> {customer.phone}</p>
          <p><b>כתובת:</b> {customer.address}</p>
        </div>

        <div className="stats">
          <p>סה״כ פגישות: {customer.totalMeetings}</p>
          <p>פגישות שנותרו: {customer.remainingMeetings}</p>
          <p>שולם: {customer.paidAmount} ₪</p>
          <p>יתרה: {customer.remainingAmount} ₪</p>
        </div>

        <button onClick={() => navigate("/ConsultationBooking")} className="dashboard-btn">
          קביעת פגישה חדשה
        </button>

      </div>

    </div>
  );
};

export default CustomerDashboard;