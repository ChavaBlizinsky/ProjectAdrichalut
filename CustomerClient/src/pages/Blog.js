import React from 'react';
import BlogCard from '../components/BlogCard';
import "../assents/styles/styles.css"

const Blog = () => (
  <div className="page">
    <h2>הבלוג שלנו</h2>
    <div className="blog-posts">
      <BlogCard
        title="איך לעצב את חדר השינה"
        excerpt="עיצוב חדר השינה יכול להיות אתגר, הנה כמה טיפים שיעזרו לך..."
        image="/images/blog/bedroom-design.jpg"
        slug="how-to-design-bedroom"
      />
      <BlogCard
        title="הטרנדים החדשים בעיצוב פנים"
        excerpt="העיצוב הפנימי משתנה כל הזמן, הנה מה שחדש בתחום..."
        image="/images/blog/interior-trends.jpg"
        slug="new-interior-trends"
      />
    </div>
  </div>
);

export default Blog;