import React, { useEffect, useState } from "react";
import { getInspirations } from "../services/inspirationsService";
import "./InspirationsGallery.css";

const unique = (arr) => Array.from(new Set(arr));

const InspirationsGallery = () => {
  const [inspirations, setInspirations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInspirations();
        setInspirations(data);
      } catch (err) {
        setError("שגיאה בטעינת ההשראות");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // סינון לפי סגנון
  const styles = unique(inspirations.map((i) => i.style).filter(Boolean));
  const filteredInspirations = selectedStyle
    ? inspirations.filter((i) => i.style === selectedStyle)
    : inspirations;

  // קיבוץ לפי קטגוריה
  const groupedByCategory = filteredInspirations.reduce((acc, item) => {
    const category = item.category || "ללא קטגוריה";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  if (loading) return <div className="inspirations-loading">טוען...</div>;
  if (error) return <div className="inspirations-error">{error}</div>;

  return (
    <div className="inspirations-gallery">
        <p>jkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
      <h1 className="inspirations-title">גלריית השראות</h1>
      {styles.length > 0 && (
        <div className="inspirations-filter">
          <label>סנן לפי סגנון:</label>
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
          >
            <option value="">הכל</option>
            {styles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>
      )}
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="inspirations-category-block">
          <h2 className="inspirations-category-title">{category}</h2>
          <div className="inspirations-list">
            {items.map((insp) => (
              <div key={insp.id} className="inspiration-card">
                <img
                  src={insp.imageUrl || "/public/pic/default.jpg"}
                  alt={insp.title}
                  className="inspiration-image"
                />
                <div className="inspiration-content">
                  <h3 className="inspiration-title">{insp.title}</h3>
                  <p className="inspiration-desc">{insp.description}</p>
                  <div className="inspiration-details">
                    <p><b>סגנון:</b> {insp.style || "לא צויין"}</p>
                    <p><b>מחיר:</b> {insp.price ? `${insp.price} ₪` : "לא צויין"}</p>
                    <p><b>חומר:</b> {insp.material || "לא צויין"}</p>
                    <p><b>מידות:</b> {insp.size || "לא צויין"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InspirationsGallery;
