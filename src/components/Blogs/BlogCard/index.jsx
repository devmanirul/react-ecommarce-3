// components/BlogCard.jsx
import React from "react";

const BlogCard = ({ title, date, description }) => {
  return (
      <div className="card bg-base-100 shadow-xl mb-6">
          {/* 1 */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-400">{date}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
          </div>
          {/* 2 */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-400">{date}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
