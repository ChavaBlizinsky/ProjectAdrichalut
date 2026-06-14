
export const getFileType = (name = "") => {
  const ext = name.toLowerCase();

  if (ext.match(/\.(png|jpg|jpeg|gif|webp)$/)) return "image";
  if (ext.match(/\.pdf$/)) return "pdf";
  if (ext.match(/\.mp4|mov|avi$/)) return "video";
  if (ext.match(/\.doc|docx$/)) return "word";
  if (ext.match(/\.xls|xlsx$/)) return "excel";

  return "file";
};