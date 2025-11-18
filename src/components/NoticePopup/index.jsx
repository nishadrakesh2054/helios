import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function NoticePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup on every page load/refresh after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cs_popup_overlay"
        onClick={handleClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 9998,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 0.3s ease",
        }}
      >
        {/* Popup Content */}
        <div
          className="cs_notice_popup"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            maxWidth: "600px",
            width: "90%",
            maxHeight: "90vh",
            backgroundColor: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            animation: "slideUp 0.4s ease",
            zIndex: 9999,
          }}
        >
          {/* Popup Image */}
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="/images/popup.jpg"
              alt="Notice"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />

            {/* Close Button - On top of image */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "#35C2D7",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10001,
                transition: "all 0.3s ease",
                fontSize: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2BA8C0";
                e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#35C2D7";
                e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.2)";
              }}
            >
              <Icon icon="fa6-solid:xmark" />
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
