import React, { useState } from "react";
import { jsPDF } from "jspdf";
import SignatureCanvas from "react-signature-canvas";
import "../assents/styles/AgreementSign.css"
import "../assents/styles/styles.css"

const AgreementSign = () => {
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  let sigPad = React.useRef(null);

  const clear = () => {
    sigPad.current.clear();
  };

//   const save = () => {
//     const pdf = new jsPDF();

//     // כותרת
//     pdf.text("הסכם התקשרות", 10, 10);

//     // פרטים
//     pdf.text(`כתובת: ${address}`, 10, 20);
//     pdf.text(`פרטים נוספים: ${notes}`, 10, 30);

//     // חתימה
//     const signature = sigPad.current.getTrimmedCanvas().toDataURL("image/png");
//     pdf.addImage(signature, "PNG", 10, 50, 80, 40);

//     // שמירה
//     pdf.save("agreement-signed.pdf");

//     // בעתיד: שליחה לשרת לאדריכלית
//   };
const save = () => {
  const pdf = new jsPDF();

  pdf.text("הסכם התקשרות", 10, 10);
  pdf.text(`כתובת: ${address}`, 10, 20);
  pdf.text(`פרטים נוספים: ${notes}`, 10, 30);

  // 🛑 בדיקת בטיחות לפני שימוש בחתימה
  if (sigPad.current && !sigPad.current.isEmpty()) {
    const signature = sigPad.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    pdf.addImage(signature, "PNG", 10, 50, 80, 40);
  }

  pdf.save("agreement-signed.pdf");
};
  return (
    
  <div className="agreement-page">

    <h2 className="agreement-title">הסכם התקשרות</h2>

    <iframe
      src="/jspdf.pdf"
      className="agreement-pdf"
      title="pdf"
    />

    <div className="agreement-form">

      <button
        onClick={save}
        className="agreement-button"
      >
        אישור ושליחה לאדריכלית
      </button>

    </div>

  </div>
);
};

export default AgreementSign;