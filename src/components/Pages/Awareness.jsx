import React, { useState } from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";

// Add data for all months
const monthNames = [
  "January 2025",
  "February 2025",
  "March 2025",
  "April 2025",
  "May 2025",
  "June 2025",
  "July 2025",
  "August 2025",
  "September 2025",
  "October 2025",
  "November 2025",
  "December 2025",
];

// Month-specific titles
const monthTitles = {
  "January 2025": "Cervical Cancer Awareness Initiative",
  "February 2025": "Thyroid Awareness Initiative",
  "March 2025": "Diabetes Awareness Initiative",
  "April 2025": "Heart Disease Awareness Initiative",
  "May 2025": "Breast Cancer Awareness Initiative",
  "June 2025": "Prostate Cancer Awareness Initiative",
  "July 2025": "Skin Cancer Awareness Initiative",
  "August 2025": "Mental Health Awareness Initiative",
  "September 2025": "Childhood Cancer Awareness Initiative",
  "October 2025": "Breast Cancer Awareness Month Initiative",
  "November 2025": "Lung Cancer Awareness Initiative",
  "December 2025": "HIV/AIDS Awareness Initiative",
};

// Helper function to shuffle array randomly
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Generate data for all months by reusing 6 images
const generateDataForAllMonths = () => {
  const allData = [];
  const imageUrls = [
    "/images/awarness/3.png",

    "/images/awarness/6.png",
    "/images/awarness/7.png",
    "/images/awarness/8.jpg",
  ];
  const titles = [
    "Cervical Cancer Awareness Initiative",
    "Thyroid Awareness Initiative",
    "Diabetes Awareness Initiative",
    "Heart Disease Awareness Initiative",
    "Breast Cancer Awareness Initiative",
    "Prostate Cancer Awareness Initiative",
  ];
  const layouts = ["large", "medium", "small"];

  // Generate indices array [0, 1, 2, 3, 4, 5]
  const indices = imageUrls.map((_, index) => index);

  monthNames.forEach((month) => {
    // Shuffle the indices randomly for each month to get different order
    const shuffledIndices = shuffleArray(indices);

    // Use all 6 images (one each) for each month
    shuffledIndices.forEach((imgIndex) => {
      const layoutIndex = imgIndex % layouts.length;
      allData.push({
        imgUrl: imageUrls[imgIndex],
        title: titles[imgIndex] || titles[0],
        month: month,
        layout: layouts[layoutIndex],
      });
    });
  });

  return allData;
};

const allAwarenessDataWithAllMonths = generateDataForAllMonths();

const months = monthNames;

export default function Awareness() {
  const [activeMonth, setActiveMonth] = useState(monthNames[0]);
  const [filteredData, setFilteredData] = useState(
    allAwarenessDataWithAllMonths.filter((item) => item.month === monthNames[0])
  );

  pageTitle("Awareness");

  const handleFilter = (month) => {
    setActiveMonth(month);
    const filtered = allAwarenessDataWithAllMonths.filter(
      (item) => item.month === month
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="/images/contact/banner_img.png"
        title="Health Awareness"
        subTitle="Key health awareness initiatives"
      />

      <Section
        topMd={185}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <div className="container">
          <div className="row">
            {/* Filter Buttons - First on Mobile, Right Side on Desktop */}
            <div className="col-12 col-lg-3 order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4">
                <h3 className="cs_fs_24 cs_semibold mb-4">
                  Filter awareness by Month
                </h3>
                <div className="cs_isotop_filter cs_style1">
                  <ul
                    className="cs_mp0 d-flex flex-row flex-wrap flex-lg-column awareness-filter-list"
                    style={{ gap: "12px", listStyle: "none", padding: "0" }}
                  >
                    {months.map((month) => (
                      <li
                        key={month}
                        className={`awareness-filter-item ${
                          activeMonth === month ? "active" : ""
                        }`}
                      >
                        <span
                          className="awareness-filter-button"
                          onClick={() => handleFilter(month)}
                          style={{
                            cursor: "pointer",
                            display: "block",
                            padding: "12px 20px",
                            borderRadius: "8px",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                            backgroundColor:
                              activeMonth === month ? "#34C2D7" : "#f5f5f5",
                            color: activeMonth === month ? "#fff" : "#333",
                            boxShadow:
                              activeMonth === month
                                ? "0 4px 15px rgba(52, 194, 215, 0.3)"
                                : "none",
                          }}
                          onMouseEnter={(e) => {
                            if (activeMonth !== month) {
                              e.target.style.backgroundColor = "#e0f7fa";
                              e.target.style.color = "#34C2D7";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeMonth !== month) {
                              e.target.style.backgroundColor = "#f5f5f5";
                              e.target.style.color = "#333";
                            }
                          }}
                        >
                          {month}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Left Side - Title and Images - Below Filter on Mobile */}
            <div className="col-12 col-lg-9 order-2 order-lg-1">
              {/* Title */}
              <div className="mb-5">
                <h2 className="cs_section_title cs_semibold mb-3 awareness-title">
                  {monthTitles[activeMonth] || "Health Awareness Initiatives"}
                </h2>
                <p className="cs_fs_18" style={{ color: "#666" }}>
                  Showing initiatives for {activeMonth}
                </p>
              </div>

              {/* Image Gallery - Responsive Same Size Boxes */}
              <div className="row gy-4">
                {filteredData.map((item, index) => {
                  return (
                    <div key={index} className="col-12 col-md-6 col-lg-6">
                      <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-2 awareness-image-box">
                        <div
                          className="position-relative"
                          style={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            borderRadius: "12px",
                          }}
                        >
                          <img
                            src={item.imgUrl}
                            alt={item.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <style>{`
                .awareness-image-box {
                  height: 400px;
                }
                @media (min-width: 768px) {
                  .awareness-image-box {
                    height: 500px;
                  }
                }
                @media (min-width: 992px) {
                  .awareness-image-box {
                    height: 600px;
                  }
                }
                .awareness-title {
                  font-size: 28px;
                  line-height: 1.3;
                }
                @media (min-width: 768px) {
                  .awareness-title {
                    font-size: 36px;
                  }
                }
                @media (min-width: 992px) {
                  .awareness-title {
                    font-size: 42px;
                  }
                }
                .awareness-filter-list {
                  flex-direction: row;
                  flex-wrap: wrap;
                }
                .awareness-filter-item {
                  margin: 0;
                  width: calc(50% - 6px);
                  flex: 0 0 calc(50% - 6px);
                }
                .awareness-filter-button {
                  font-size: 12px;
                  padding: 10px 12px !important;
                }
                @media (min-width: 768px) {
                  .awareness-filter-button {
                    font-size: 14px;
                    padding: 12px 16px !important;
                  }
                }
                @media (min-width: 992px) {
                  .awareness-filter-list {
                    flex-direction: column;
                  }
                  .awareness-filter-item {
                    width: 100%;
                    flex: 0 0 100%;
                  }
                  .awareness-filter-button {
                    font-size: 16px;
                    padding: 12px 20px !important;
                  }
                }
              `}</style>

              {filteredData.length === 0 && (
                <div className="text-center py-5">
                  <p className="cs_fs_18" style={{ color: "#666" }}>
                    No initiatives found for this month.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
