import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCustomers } from "../services/customersService";
import "../assents/styles/login.css";

const CustomerLoginCheck = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheck = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const customers = await getCustomers();

      const customer = customers.find((c) =>
        c.email?.toLowerCase() === email.toLowerCase().trim()
      );

      if (customer) {
        // קיים → מעבר לדשבורד
        navigate("/CustomerDashboard", { state: customer });
      } else {
        // לא קיים → הרשמה קיימת אצלך
        navigate("/signup", {
          state: { firstName, lastName, email }
        });
      }

    } catch (err) {
      setError("שגיאה בבדיקת לקוח");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <form className="login-card" onSubmit={handleCheck}>

        <h2>כניסת לקוח</h2>

        <input
          type="text"
          placeholder="שם פרטי"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="שם משפחה"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "בודק..." : "כניסה"}
        </button>

        {error && <p className="error">{error}</p>}

      </form>

    </div>
  );
};

export default CustomerLoginCheck;