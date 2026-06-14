import React from 'react';
import { Link } from 'react-router-dom';
import "../assents/styles/BlogCard.css"
import "../assents/styles/styles.css"
import "../App.css"
const BlogCard = ({ title, excerpt, image, slug }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link to={`/blog/${slug}`} className="read-more">קרא עוד</Link>
    </div>
  );
};

export default BlogCard;