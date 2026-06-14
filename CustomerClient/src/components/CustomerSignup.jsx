import React, { useState } from "react";
import { addCustomer } from "../services/customersService";
import "./CustomerSignup.css";
import { Link, Navigate } from 'react-router-dom';
const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
   address: "",
//   selectedProfile: "",
//   password: ""
};

// const profileOptions = [
//   "לקוח פרטי",
//   "אדריכל/ית",
//   "מעצב/ת פנים",
//   "קבלן/ית",
//   "אחר"
// ];

const validateEmail = (email) =>
  /^\S+@\S+\.\S+$/.test(email);

const validatePhone = (phone) =>
  /^0[2-9]\d{7,8}$/.test(phone);

const CustomerSignup = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validate = () => {
    const errors = {};
    if (!form.firstName) errors.firstName = "יש להזין שם פרטי";
    if (!form.lastName) errors.lastName = "יש להזין שם משפחה";
    if (!form.email) errors.email = "יש להזין אימייל";
    else if (!validateEmail(form.email)) errors.email = "אימייל לא תקין";
    if (form.phone && !validatePhone(form.phone)) errors.phone = "טלפון לא תקין";
    // הסרנו את בדיקת הסיסמה כי אין שדה כזה
    return errors;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
    //   password: true,
    });
    if (!isValid) return;
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await addCustomer(form);
      setSuccess("נרשמת בהצלחה! ברוך/ה הבא/ה למערכת");
      setForm(initialForm);
      setTouched({});
    } catch (err) {
      setError("אירעה שגיאה בהרשמה. נסה שוב.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
        <h2 className="signup-title">הצטרף אלינו!</h2>
        <p className="signup-subtitle">הירשם עכשיו וקבל גישה להשראות, שירותים ועוד</p>
        <div className="signup-field">
          <input
            type="text"
            name="firstName"
            placeholder="שם פרטי"
            value={form.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            autoFocus
            className={touched.firstName && errors.firstName ? "invalid" : ""}
          />
          {touched.firstName && errors.firstName && (
            <div className="field-error">{errors.firstName}</div>
          )}
        </div>
        <div className="signup-field">
          <input
            type="text"
            name="lastName"
            placeholder="שם משפחה"
            value={form.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={touched.lastName && errors.lastName ? "invalid" : ""}
          />
          {touched.lastName && errors.lastName && (
            <div className="field-error">{errors.lastName}</div>
          )}
        </div>
        <div className="signup-field">
          <input
            type="email"
            name="email"
            placeholder="אימייל"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={touched.email && errors.email ? "invalid" : ""}
          />
          {touched.email && errors.email && (
            <div className="field-error">{errors.email}</div>
          )}
        </div>
        {/* <div className="signup-field">
          <input
            type="password"
            name="password"
            placeholder="סיסמה (לפחות 6 תווים)"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            minLength={6}
            className={touched.password && errors.password ? "invalid" : ""}
          />
          {touched.password && errors.password && (
            <div className="field-error">{errors.password}</div>
          )}
        </div>
            */}
        <div className="signup-field">
          <input
            type="tel"
            name="phone"
            placeholder="טלפון (לא חובה)"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.phone && errors.phone ? "invalid" : ""}
          />
          {touched.phone && errors.phone && (
            <div className="field-error">{errors.phone}</div>
          )}
        </div>
        <div className="signup-field">
          <input
            type="text"
            name="address"
            placeholder="כתובת (לא חובה)"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        {/* <div className="signup-field">
          <select
            name="selectedProfile"
            value={form.selectedProfile}
            onChange={handleChange}
          >
            <option value="">בחר פרופיל</option>
            {profileOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div> */}
        {/* <button className="signup-btn" type="submit" disabled={loading} >
          {loading ? "נרשם..." : "הרשמה"}
        </button> */}
         <Link to="/calculator">
    <button className="signup-btn"> מעבר להסכם התקשרות </button>
  </Link>
        {success && <div className="signup-success">{success}</div>}
        {error && <div className="signup-error">{error}</div>}
      </form>
      <div className="signup-bg-effect"></div> 
    </div>
  );
};

export default CustomerSignup;
