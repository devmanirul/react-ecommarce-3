// pages/Blog.jsx
import React from 'react';
import BlogCard from '../Blogs/BlogCard';

const blogPosts = [
  {
    title: "Understanding React Hooks",
    date: "May 7, 2025",
    description: "A beginner-friendly guide to React Hooks and how they can simplify your code.",
  },
  {
    title: "Getting Started with DaisyUI",
    date: "May 5, 2025",
    description: "Learn how to use DaisyUI components to speed up your UI development.",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">My Blog</h1>
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default Blog;
