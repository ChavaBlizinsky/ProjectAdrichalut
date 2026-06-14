
// import React, { useEffect, useState } from "react";
// import { getInspirations } from "../services/inspirationsService";
// import "./InspirationsGallery.css";

// const unique = (arr) => Array.from(new Set(arr));

// const InspirationsGallery = () => {
//   const [inspirations, setInspirations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedStyle, setSelectedStyle] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getInspirations();
//         setInspirations(data);
//       } catch (err) {
//         setError("שגיאה בטעינת ההשראות");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // סינון לפי סגנון
//   const styles = unique(inspirations.map((i) => i.style).filter(Boolean));
//   const filteredInspirations = selectedStyle
//     ? inspirations.filter((i) => i.style === selectedStyle)
//     : inspirations;

//   // קיבוץ לפי קטגוריה
//   const groupedByCategory = filteredInspirations.reduce((acc, item) => {
//     const category = item.category || "ללא קטגוריה";
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(item);
//     return acc;
//   }, {});

//   if (loading) return <div className="inspirations-loading">טוען...</div>;
//   if (error) return <div className="inspirations-error">{error}</div>;

//   return (
//     <div className="inspirations-gallery">
       
//       <h1 className="inspirations-title">גלריית השראות</h1>
//       {styles.length > 0 && (
//         <div className="inspirations-filter">
//           <label>סנן לפי סגנון:</label>
//           <select
//             value={selectedStyle}
//             onChange={(e) => setSelectedStyle(e.target.value)}
//           >
//             <option value="">הכל</option>
//             {styles.map((style) => (
//               <option key={style} value={style}>
//                 {style}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       {Object.entries(groupedByCategory).map(([category, items]) => (
//         <div key={category} className="inspirations-category-block">
//           <h2 className="inspirations-category-title">{category}</h2>
//           <div className="inspirations-list">
//             {items.map((insp) => (
//               <div key={insp.id} className="inspiration-card">
//                 <img
//                   src={insp.imageUrl || "/public/pic/default.jpg"}
//                   alt={insp.title}
//                   className="inspiration-image"
//                 />
//                 <div className="inspiration-content">
//                   <h3 className="inspiration-title">{insp.title}</h3>
//                   <p className="inspiration-desc">{insp.description}</p>
//                   <div className="inspiration-details">
//                     <p><b>סגנון:</b> {insp.style || "לא צויין"}</p>
//                     <p><b>מחיר:</b> {insp.price ? `${insp.price} ₪` : "לא צויין"}</p>
//                     <p><b>חומר:</b> {insp.material || "לא צויין"}</p>
//                     <p><b>מידות:</b> {insp.size || "לא צויין"}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InspirationsGallery;
// import React, { useEffect, useMemo, useState } from "react";
// import { getInspirations } from "../services/inspirationsService";
// import "./InspirationsGallery.css";

// const InspirationsGallery = () => {
//   const [inspirations, setInspirations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [selectedStyle, setSelectedStyle] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   // image selected per card
//   const [selectedImages, setSelectedImages] = useState({});

//   // zoom modal
//   const [zoomedImage, setZoomedImage] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getInspirations();

//         setInspirations(data || []);

//         // default selected image = main image
//         const defaults = {};

//         (data || []).forEach((item) => {
//           defaults[item.inspirationId] = item.imageUrl;
//         });

//         setSelectedImages(defaults);
//       } catch (err) {
//         setError("שגיאה בטעינת ההשראות");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const styles = useMemo(() => {
//     return [...new Set(inspirations.map((i) => i.style).filter(Boolean))];
//   }, [inspirations]);

//   const filteredInspirations = useMemo(() => {
//     return inspirations.filter((item) => {
//       const matchesStyle = selectedStyle
//         ? item.style === selectedStyle
//         : true;

//       const term = searchTerm.toLowerCase();

//       const matchesSearch =
//         item.title?.toLowerCase().includes(term) ||
//         item.description?.toLowerCase().includes(term) ||
//         item.style?.toLowerCase().includes(term);

//       return matchesStyle && matchesSearch;
//     });
//   }, [inspirations, selectedStyle, searchTerm]);

//   const handleImageSelect = (id, image) => {
//     setSelectedImages((prev) => ({
//       ...prev,
//       [id]: image,
//     }));
//   };

//   const nextImage = (item) => {
//     const allImages = [item.imageUrl, ...(item.roomImages || [])];

//     const current = selectedImages[item.inspirationId];
//     const currentIndex = allImages.indexOf(current);

//     const nextIndex = (currentIndex + 1) % allImages.length;

//     handleImageSelect(item.inspirationId, allImages[nextIndex]);
//   };

//   const prevImage = (item) => {
//     const allImages = [item.imageUrl, ...(item.roomImages || [])];

//     const current = selectedImages[item.inspirationId];
//     const currentIndex = allImages.indexOf(current);

//     const prevIndex =
//       (currentIndex - 1 + allImages.length) % allImages.length;

//     handleImageSelect(item.inspirationId, allImages[prevIndex]);
//   };

//   if (loading) {
//     return (
//       <div className="inspirations-gallery">
//         <div className="skeleton-grid">
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="skeleton-card">
//               <div className="skeleton-image" />
//               <div className="skeleton-line short" />
//               <div className="skeleton-line" />
//               <div className="skeleton-line small" />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="inspirations-error">{error}</div>;
//   }

//   return (
//     <div className="inspirations-gallery">
//       <h1 className="inspirations-title">גלריית השראות</h1>

//       <div className="gallery-top-bar">
//         {styles.length > 0 && (
//           <div className="inspirations-filter">
//             <select
//               value={selectedStyle}
//               onChange={(e) => setSelectedStyle(e.target.value)}
//             >
//               <option value="">כל הסגנונות</option>

//               {styles.map((style) => (
//                 <option key={style} value={style}>
//                   {style}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="חיפוש השראות..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {filteredInspirations.length === 0 ? (
//         <div className="empty-state">
//           לא נמצאו השראות
//         </div>
//       ) : (
//         <div className="inspirations-list">
//           {filteredInspirations.map((insp) => {
//             const allImages = [
//               insp.imageUrl,
//               ...(insp.roomImages || []),
//             ].filter(Boolean);

//             const currentImage =
//               selectedImages[insp.inspirationId] || insp.imageUrl;

//             return (
//               <div
//                 key={insp.inspirationId}
//                 className="inspiration-card"
//               >
//                 <div className="main-image-wrapper">
//                   <button
//                     className="carousel-btn right"
//                     onClick={() => prevImage(insp)}
//                   >
//                     ❯
//                   </button>

//                   <img
//                     src={currentImage}
//                     alt={insp.title}
//                     className="inspiration-main-image"
//                     loading="lazy"
//                     onClick={() => setZoomedImage(currentImage)}
//                     onError={(e) => {
//                       e.target.src = "/images/fallback.jpg";
//                     }}
//                   />

//                   <button
//                     className="carousel-btn left"
//                     onClick={() => nextImage(insp)}
//                   >
//                     ❮
//                   </button>
//                 </div>

//                 <div className="thumbnail-row">
//                   {allImages.map((img, index) => (
//                     <img
//                       key={index}
//                       src={img}
//                       alt=""
//                       loading="lazy"
//                       className={`thumbnail-image ${
//                         currentImage === img ? "active" : ""
//                       }`}
//                       onClick={() =>
//                         handleImageSelect(
//                           insp.inspirationId,
//                           img
//                         )
//                       }
//                       onError={(e) => {
//                         e.target.src = "/images/fallback.jpg";
//                       }}
//                     />
//                   ))}
//                 </div>

//                 <div className="inspiration-content">
//                   <h2 className="inspiration-title">
//                     {insp.title || "ללא כותרת"}
//                   </h2>

//                   <p className="inspiration-description">
//                     {insp.description || "ללא תיאור"}
//                   </p>

//                   <div className="inspiration-style">
//                     <span>סגנון:</span>
//                     <span>{insp.style || "לא צויין"}</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {zoomedImage && (
//         <div
//           className="zoom-modal"
//           onClick={() => setZoomedImage(null)}
//         >
//           <img
//             src={zoomedImage}
//             alt=""
//             className="zoomed-image"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default InspirationsGallery;
// import React, { useEffect, useState } from "react";
// import { getInspirations } from "../services/inspirationsService";
// import "./InspirationsGallery.css";

// const unique = (arr) => Array.from(new Set(arr));

// const InspirationsGallery = () => {
//   const [inspirations, setInspirations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedStyle, setSelectedStyle] = useState("");
//   const [mainImage, setMainImage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getInspirations();
//         setInspirations(data);
//       } catch (err) {
//         setError("שגיאה בטעינת ההשראות");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const styles = unique(inspirations.map((i) => i.style).filter(Boolean));
//   const filteredInspirations = selectedStyle
//     ? inspirations.filter((i) => i.style === selectedStyle)
//     : inspirations;

//   if (loading) return <div className="inspirations-loading">טוען...</div>;
//   if (error) return <div className="inspirations-error">{error}</div>;

//   return (
//     <div className="inspirations-gallery">
//       <h1 className="inspirations-title">גלריית השראות</h1>
//       {styles.length > 0 && (
//         <div className="inspirations-filter">
//           <label>סנן לפי סגנון:</label>
//           <select
//             value={selectedStyle}
//             onChange={(e) => setSelectedStyle(e.target.value)}
//           >
//             <option value="">הכל</option>
//             {styles.map((style) => (
//               <option key={style} value={style}>
//                 {style}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       <div className="gallery-container">
//         {filteredInspirations.map((insp) => (
//           <div key={insp.inspirationId} className="inspiration-card">
//             <h3 className="card-title">{insp.style}</h3>
//             <div className="main-image-container">
//               <img
//                 src={insp.imageUrl || "/public/pic/default.jpg"}
//                 alt={insp.title}
//                 className="main-image"
//                 onClick={() => setMainImage(insp.imageUrl)}
//               />
//             </div>
//             <div className="thumbnail-container">
//               {(insp.roomImages || []).map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`Thumbnail ${idx}`}
//                   className="thumbnail"
//                   onClick={() => setMainImage(img)}
//                 />
//               ))}
//             </div>
//             <p className="description">{insp.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InspirationsGallery;
// import React, { useEffect, useMemo, useState } from "react";
// import { getInspirations } from "../services/inspirationsService";
// import "./InspirationsGallery.css";

// const BASE_URL = "https://localhost:7110";

// const InspirationsGallery = () => {
//   const [inspirations, setInspirations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedStyle, setSelectedStyle] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getInspirations();
//         setInspirations(data || []);
//       } catch (err) {
//         setError("שגיאה בטעינת ההשראות");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const styles = useMemo(() => {
//     return [
//       ...new Set(
//         inspirations
//           .map((i) => i.style)
//           .filter(Boolean)
//       ),
//     ];
//   }, [inspirations]);

//   const filteredInspirations = useMemo(() => {
//     return selectedStyle
//       ? inspirations.filter(
//           (i) => i.style === selectedStyle
//         )
//       : inspirations;
//   }, [inspirations, selectedStyle]);

//   if (loading) {
//     return (
//       <div className="loading">
//         טוען...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="page">
//       <div className="page-header">
//         <h1>גלריית השראות</h1>

//         {styles.length > 0 && (
//           <select
//             value={selectedStyle}
//             onChange={(e) =>
//               setSelectedStyle(
//                 e.target.value
//               )
//             }
//           >
//             <option value="">
//               כל הסגנונות
//             </option>

//             {styles.map((style) => (
//               <option
//                 key={style}
//                 value={style}
//               >
//                 {style}
//               </option>
//             ))}
//           </select>
//         )}
//       </div>

//       <div className="gallery-container">
//         {filteredInspirations.map(
//           (item) => (
//             <InspirationCard
//               key={
//                 item.inspirationId
//               }
//               item={item}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// function InspirationCard({ item }) {
//   const normalizeImage = (img) => {
//     if (!img) return "";

//     return img.startsWith("http")
//       ? img
//       : `${BASE_URL}${img}`;
//   };

//   const allImages = [
//     normalizeImage(item.imageUrl),
//     ...(item.roomImages || []).map(
//       normalizeImage
//     ),
//   ].filter(Boolean);

//   const [mainImage, setMainImage] =
//     useState(allImages[0]);

//   return (
//     <div className="inspiration-card">
//       <div className="main-image-container">
//         {mainImage && (
//           <img
//             src={mainImage}
//             alt={
//               item.title ||
//               item.style
//             }
//             className="main-image"
//             loading="lazy"
//             onError={(e) => {
//               e.target.src =
//                 "/images/fallback.jpg";
//             }}
//           />
//         )}
//       </div>

//       {allImages.length > 1 && (
//         <div className="thumbnail-container">
//           {allImages.map(
//             (img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`thumb-${idx}`}
//                 className={`thumbnail ${
//                   mainImage === img
//                     ? "active-thumbnail"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   setMainImage(img)
//                 }
//                 loading="lazy"
//                 onError={(e) => {
//                   e.target.src =
//                     "/images/fallback.jpg";
//                 }}
//               />
//             )
//           )}
//         </div>
//       )}

//       <div className="card-content">
//         <h3 className="card-title">
//           {item.title ||
//             "ללא כותרת"}
//         </h3>

//         <p className="description">
//           {item.description ||
//             "ללא תיאור"}
//         </p>

//         <div className="style-badge">
//           {item.style ||
//             "ללא סגנון"}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InspirationsGallery;

// import "./InspirationsGallery.css";
// import React, { useEffect, useState } from "react";
// import { getInspirations } from "../services/inspirationsService";

// const BASE_URL = "https://localhost:7110";

// export default function InspirationsGallery() {
//  const [data, setData] = useState([]);
//    const [filterStyle, setFilterStyle] = useState("");
   
//  const load = async () => setData(await getInspirations());
//   useEffect(() => { load(); }, []);

    
//   if (!Array.isArray(data) || data.length === 0) return <div>לא נמצאו השראות</div>;
  


  
  
//     // יצירת רשימת סגנונות ייחודית מהנתונים
//     const uniqueStyles = Array.from(new Set(data.map(item => item.style))).filter(s => s);
  
//     const filteredData = data.filter(item => !filterStyle || item.style === filterStyle);
  
//     return (
//       <div className="page">
//         <div className="page-header">
//           <h1>השראות</h1>
//           <select value={filterStyle} onChange={e => setFilterStyle(e.target.value)}>
//             <option value="">הכל</option>
//             {uniqueStyles.map((style, idx) => (
//               <option key={idx} value={style}>{style}</option>
//             ))}
//           </select>
        
//         </div>
  
       
//       </div>
//     );

//   return (
//     <div className="gallery-container">
//       {data.map(item => (
//         <InspirationCard key={item.inspirationId} item={item}  />
//       ))}
//     </div>
//   );
// }

// function InspirationCard({ item, onEdit, onDelete }) {
//   const [mainImage, setMainImage] = useState(
//     item.imageUrl?.startsWith("http") ? item.imageUrl : `${BASE_URL}${item.imageUrl}`
//   );

//   const roomImages = (item.roomImages || []).map(img =>
//     img.startsWith("http") ? img : `${BASE_URL}${img}`
//   );

//   return (
//     <div className="inspiration-card">
//       <h3 className="card-title">{item.style}</h3>

//       <div className="main-image-container">
//         {mainImage && <img src={mainImage} alt={item.title || item.style} className="main-image" />}
//       </div>

//       {roomImages.length > 0 && (
//         <div className="thumbnail-container">
//           {roomImages.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`Room ${idx}`}
//               className="thumbnail"
//               onClick={() => setMainImage(img)}
//             />
//           ))}
//         </div>
//       )}

//       <p className="description">{item.description}</p>

    
//     </div>
//   );
// }
import "./InspirationsGallery.css";
import React, { useEffect, useState } from "react";
import { getInspirations } from "../services/inspirationsService";

const BASE_URL = "https://localhost:7110";

export default function InspirationsGallery() {

  const [data, setData] = useState([]);
  const [filterStyle, setFilterStyle] = useState("");

  // טעינת נתונים
  const load = async () => {
    try {
      const result = await getInspirations();
      setData(Array.isArray(result) ? result : []);
    } catch (error) {
      console.error(error);
      setData([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // אם אין נתונים
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="empty-gallery">
        לא נמצאו השראות
      </div>
    );
  }

  // רשימת סגנונות ייחודית
  const uniqueStyles = Array.from(
    new Set(data.map(item => item.style))
  ).filter(Boolean);

  // סינון
  const filteredData = data.filter(
    item => !filterStyle || item.style === filterStyle
  );

  // =========================
  // RETURN יחיד בלבד
  // =========================

  return (
    <div className="page">

      {/* כותרת */}
      <div className="page-header">

        <h1 className="gallery-title">
          השראות
        </h1>

        <select
          className="style-select"
          value={filterStyle}
          onChange={(e) => setFilterStyle(e.target.value)}
        >
          <option value="">הכל</option>

          {uniqueStyles.map((style, idx) => (
            <option key={idx} value={style}>
              {style}
            </option>
          ))}
        </select>

      </div>

      {/* גלריה */}
      <div className="gallery-container">

        {filteredData.map(item => (
          <InspirationCard
            key={item.inspirationId}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}

// =========================
// כרטיס השראה
// =========================

function InspirationCard({ item }) {

  // תמונה ראשית
  const [mainImage, setMainImage] = useState(
    item.imageUrl?.startsWith("http")
      ? item.imageUrl
      : `${BASE_URL}${item.imageUrl}`
  );

  // תמונות קטנות
  const roomImages = (item.roomImages || []).map(img =>
    img.startsWith("http")
      ? img
      : `${BASE_URL}${img}`
  );

  return (
    <div className="inspiration-card">

      {/* כותרת */}
      <h3 className="card-title">
        {item.style}
      </h3>

      {/* תמונה ראשית */}
      <div className="main-image-container">

        {mainImage && (
          <img
            src={mainImage}
            alt={item.title || item.style}
            className="main-image"
          />
        )}

      </div>

      {/* תמונות קטנות */}
      {roomImages.length > 0 && (

        <div className="thumbnail-container">

          {roomImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Room ${idx}`}
              className="thumbnail"
              onClick={() => setMainImage(img)}
            />
          ))}

        </div>

      )}

      {/* תיאור */}
      <p className="description">
        {item.description}
      </p>

    </div>
  );
}
