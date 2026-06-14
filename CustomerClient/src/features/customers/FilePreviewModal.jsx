import React, { useEffect } from "react";
import { getFileType } from "../../utils/fileUtils";

export default function FilePreviewModal({ file, onClose, allFiles }) {

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const type = getFileType(file.storedName);

  const index = allFiles.findIndex(f => f.storedName === file.storedName);

  const next = () => {
    const n = (index + 1) % allFiles.length;
    onClose(allFiles[n]);
  };

  const prev = () => {
    const p = (index - 1 + allFiles.length) % allFiles.length;
    onClose(allFiles[p]);
  };

  return (
    <div className="preview-overlay" onClick={() => onClose(null)}>

      <div className="preview-box" onClick={(e) => e.stopPropagation()}>

        <div className="preview-header">
          <span>{file.originalName}</span>

          <div>
            <button onClick={prev}>⬅</button>
            <button onClick={next}>➡</button>
            <button onClick={() => onClose(null)}>✖</button>
          </div>
        </div>

        {type === "image" && (
          <img src={file.url} className="preview-full zoomable" />
        )}

        {type === "pdf" && (
          <iframe src={file.url} className="preview-frame" />
        )}

        {type === "video" && (
          <video controls src={file.url} className="preview-full" />
        )}

        {type === "word" && (
          <iframe
            className="preview-frame"
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin + file.url}`}
          />
        )}

      </div>
    </div>
  );
}