import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import { Icon } from "@iconify/react";

export default function WhyChooseUsSection({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />
      <div className="row g-4">
        {data?.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="cs_infographic_item"
              style={{
                position: "relative",
                padding: "30px 20px",
                textAlign: "center",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".cs_infographic_icon"
                );
                if (iconWrapper) {
                  iconWrapper.style.transform = "scale(1.1) rotate(5deg)";
                  iconWrapper.style.background =
                    "linear-gradient(134deg, #35C2D7 0%, #2BA8C0 100%)";
                }
                const icon = e.currentTarget.querySelector(
                  ".cs_infographic_icon svg"
                );
                if (icon) {
                  icon.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".cs_infographic_icon"
                );
                if (iconWrapper) {
                  iconWrapper.style.transform = "scale(1) rotate(0deg)";
                  iconWrapper.style.background =
                    "linear-gradient(134deg, rgba(53, 194, 215, 0.1) 0%, rgba(43, 168, 192, 0.15) 100%)";
                }
                const icon = e.currentTarget.querySelector(
                  ".cs_infographic_icon svg"
                );
                if (icon) {
                  icon.style.color = "#35C2D7";
                }
              }}
            >
              {/* Number Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(134deg, #35C2D7 0%, #2BA8C0 100%)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className="cs_infographic_icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(134deg, rgba(53, 194, 215, 0.1) 0%, rgba(43, 168, 192, 0.15) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 25px",
                  transition: "all 0.4s ease",
                  position: "relative",
                }}
              >
                <Icon
                  icon={item.icon}
                  style={{
                    fontSize: "48px",
                    color: "#35C2D7",
                    transition: "all 0.4s ease",
                  }}
                />
                {/* Decorative Circle */}
                <div
                  style={{
                    position: "absolute",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    border: "2px dashed rgba(53, 194, 215, 0.2)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className="cs_heading_color cs_semibold m-0"
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>

              {/* Connecting Line (only for items that aren't last in row) */}
              {index < data.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-20px",
                    width: "40px",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, rgba(53, 194, 215, 0.3) 0%, transparent 100%)",
                    transform: "translateY(-50%)",
                    display: "none",
                  }}
                  className="d-none d-lg-block"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
