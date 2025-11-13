import React from "react";
import { Link } from "react-router-dom";

export default function Tags({ title, data }) {
  return (
    <>
      <h2 className="cs_sidebar_widget_title">{title}</h2>

      <div className="cs_blog_details_info_left">
        <div className="cs_blog_details_tags">
          {data.map((item, index) => (
            <Link key={index} to={item.href}>
              {item.tag}
            </Link>
          ))}
        </div>
    
      </div>
    </>
  );
}
