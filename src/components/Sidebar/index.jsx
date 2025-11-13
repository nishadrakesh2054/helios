import React from "react";
import SideMenuWidget from "../Widget/SideMenuWidget";
import RecentPostWidget from "../Widget/RecentPostWidget";
import NewsletterStyle5 from "../Widget/NewsletterStyle5";
import Tags from "../Widget/Tags";
const categoryData = [
  {
    title: "Health & Wellness",
    url: "/",
  },
  {
    title: "Medical Insights",
    url: "/",
  },
  {
    title: "Patient Care & Safety",
    url: "/",
  },
  {
    title: "Nutrition & Lifestyle",
    url: "/",
  },
  {
    title: "Mental Health & Psychology",
    url: "/",
  },
  {
    title: "Fitness & Rehabilitation",
    url: "/",
  },
  {
    title: "Women's Health",
    url: "/",
  },
  {
    title: "Pediatric Care",
    url: "/",
  },
];

const recentPostData = [
  {
    title: `A Parent's Guide to Childhood Vaccinations: What You Need to Know`,
    author: "Rakesh Nishad",
    date: "August 10, 2023",
    href: "/blog/blog-details",
  },
  {
    title: `Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle`,
    author: "Ranzeth Sahani",
    date: "August 09, 2022",
    href: "/blog/blog-details",
  },
  {
    title: `Managing Chronic Pain: Treatment Options and Strategies`,
    author: "Alex Brown",
    date: "August 08, 2022",
    href: "/blog/blog-details",
  },
];

const tags = [
  { tag: "Emergency", href: "/blog/blog-details" },
  { tag: "Pediatrics", href: "/blog/blog-details" },
  { tag: "Cardiology", href: "/blog/blog-details" },
  { tag: "Neurology", href: "/blog/blog-details" },
  { tag: "Orthopedics", href: "/blog/blog-details" },
  { tag: "Gynecology", href: "/blog/blog-details" },
  { tag: "Physiotherapy", href: "/blog/blog-details" },
  { tag: "Dermatology", href: "/blog/blog-details" },
  { tag: "ENT", href: "/blog/blog-details" },
  { tag: "General Surgery", href: "/blog/blog-details" },
  { tag: "Psychiatry", href: "/blog/blog-details" },
  { tag: "Radiology", href: "/blog/blog-details" },
  { tag: "Dental", href: "/blog/blog-details" },
  { tag: "Wellness", href: "/blog/blog-details" },
  { tag: "Nutrition", href: "/blog/blog-details" },
  { tag: "Others", href: "/blog/blog-details" },
];

export default function Sidebar() {
  return (
    <div className="cs_sidebar">
      <div className="cs_sidebar_item widget_categories">
        <SideMenuWidget title="Popular Categories" data={categoryData} />
      </div>
      <div className="cs_sidebar_item">
        <RecentPostWidget title="Popular Articles" data={recentPostData} />
      </div>

      <div className="cs_sidebar_item widget_categories">
        <Tags title="Health Tags"  data={tags}/>
      </div>
      <div className="cs_sidebar_item widget_categories">
        <NewsletterStyle5 title="Newsletter Sign Up Form" />
      </div>
    </div>
  );
}
