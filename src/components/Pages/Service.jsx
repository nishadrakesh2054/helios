import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";

// Services data with icons - exported for use in ServiceDetails
export const servicesData = [
  {
    id: 1,
    name: "Out-patient Services",
    icon: "mdi:stethoscope",
    description:
      "Comprehensive outpatient services for diagnosis, consultation, and treatment of various medical conditions.",
    services: [
      "General Consultation",
      "Specialist Consultation",
      "Health Checkups",
      "Follow-up Visits",
    ],
  },
  {
    id: 2,
    name: "Day Care Services",
    icon: "mdi:hospital-building",
    description:
      "Same-day medical procedures and treatments that don't require overnight hospital stay.",
    services: [
      "Minor Surgeries",
      "Day Procedures",
      "Outpatient Surgeries",
      "Same-day Discharge",
    ],
  },
  {
    id: 3,
    name: "Wellness Packages",
    icon: "mdi:heart-pulse",
    description:
      "Comprehensive health checkup packages designed to assess and monitor your overall health.",
    services: [
      "Executive Health Packages",
      "Basic Health Packages",
      "Senior Citizen Packages",
      "Corporate Packages",
    ],
  },
  {
    id: 4,
    name: "Immunization Services",
    icon: "mdi:needle",
    description:
      "Complete vaccination services for children and adults to protect against various diseases.",
    services: [
      "Childhood Vaccines",
      "Adult Vaccines",
      "Travel Vaccines",
      "Flu Shots",
    ],
  },
  {
    id: 5,
    name: "Intensive Care Unit (ICUs)",
    icon: "mdi:bed",
    description:
      "State-of-the-art intensive care units with round-the-clock monitoring for critically ill patients.",
    services: ["Medical ICU", "Surgical ICU", "Cardiac ICU", "Neonatal ICU"],
  },
  {
    id: 6,
    name: "24x7 Emergency & Trauma Care",
    icon: "mdi:ambulance",
    description:
      "Round-the-clock emergency medical services with immediate response and expert trauma care.",
    services: [
      "Emergency Services",
      "Trauma Care",
      "Ambulance Service",
      "Emergency Surgery",
    ],
  },
  {
    id: 7,
    name: "Pharmacy",
    icon: "mdi:pill",
    description:
      "Fully stocked pharmacy with prescription and over-the-counter medications available 24/7.",
    services: [
      "Prescription Medicines",
      "OTC Medications",
      "Health Supplements",
      "Medical Equipment",
    ],
  },
  {
    id: 8,
    name: "Cardiology – ECHO, TMT, ECG, Holter",
    icon: "mdi:heart",
    description:
      "Comprehensive cardiac care with advanced diagnostic and treatment facilities for heart conditions.",
    services: [
      "ECG",
      "Echocardiography",
      "Treadmill Test",
      "Holter Monitoring",
    ],
  },
  {
    id: 9,
    name: "Nephrology & Dialysis Unit",
    icon: "mdi:drop",
    description:
      "Expert kidney care services including dialysis and treatment for kidney-related disorders.",
    services: [
      "Hemodialysis",
      "Peritoneal Dialysis",
      "Kidney Transplantation",
      "Nephrology Consultation",
    ],
  },
  {
    id: 10,
    name: "Neuro Psychiatry",
    icon: "mdi:brain",
    description:
      "Specialized care for mental health and neurological disorders with expert psychiatrists.",
    services: [
      "Mental Health Consultation",
      "Neurological Disorders",
      "Counseling Services",
      "Psychiatric Treatment",
    ],
  },
  {
    id: 11,
    name: "General & GI Surgery",
    icon: "mdi:medical-bag",
    description:
      "Advanced surgical procedures for general and gastrointestinal conditions using minimally invasive techniques.",
    services: [
      "Laparoscopic Surgery",
      "GI Surgery",
      "General Surgery",
      "Minimally Invasive Procedures",
    ],
  },
  {
    id: 12,
    name: "Orthopedics & Trauma Care",
    icon: "mdi:bone",
    description:
      "Expert orthopedic care for bone, joint, and muscle disorders with advanced surgical techniques.",
    services: [
      "Joint Replacement",
      "Fracture Treatment",
      "Sports Medicine",
      "Spine Surgery",
    ],
  },
  {
    id: 13,
    name: "Urology & Uro Surgery",
    icon: "mdi:water",
    description:
      "Comprehensive urological services for treatment of urinary tract and male reproductive system disorders.",
    services: [
      "Urological Surgery",
      "Prostate Treatment",
      "Kidney Stone Treatment",
      "Urology Consultation",
    ],
  },
  {
    id: 14,
    name: "Neurology & Neuro Surgery (EEG, EMG)",
    icon: "mdi:brain",
    description:
      "Advanced neurological care with state-of-the-art diagnostic and surgical capabilities for brain and nerve disorders.",
    services: ["EEG", "EMG", "Neurosurgery", "Neurology Consultation"],
  },
  {
    id: 15,
    name: "Oncology",
    icon: "mdi:medical-bag",
    description:
      "Comprehensive cancer care with multidisciplinary approach including diagnosis, treatment, and support services.",
    services: [
      "Medical Oncology",
      "Radiation Oncology",
      "Surgical Oncology",
      "Cancer Screening",
    ],
  },
  {
    id: 16,
    name: "Gastroenterology & Hepatology",
    icon: "mdi:stomach",
    description:
      "Expert care for digestive system and liver disorders with advanced diagnostic and treatment options.",
    services: [
      "Endoscopy",
      "Colonoscopy",
      "Liver Disease Treatment",
      "GI Consultation",
    ],
  },
  {
    id: 17,
    name: "Endocrinology",
    icon: "mdi:pulse",
    description:
      "Specialized care for hormonal disorders and metabolic conditions affecting the endocrine system.",
    services: [
      "Diabetes Management",
      "Thyroid Disorders",
      "Hormone Therapy",
      "Endocrine Consultation",
    ],
  },
  {
    id: 18,
    name: "Pediatrics & Special Newborn Care Unit (SNCU)",
    icon: "mdi:baby-carriage",
    description:
      "Comprehensive pediatric care and specialized neonatal intensive care for newborns and children.",
    services: [
      "Pediatric Consultation",
      "Neonatal Care",
      "Child Health Services",
      "Vaccination",
    ],
  },
  {
    id: 19,
    name: "ENT (Ear, Nose & Throat)",
    icon: "mdi:ear-hearing",
    description:
      "Expert ENT services for diagnosis and treatment of ear, nose, and throat disorders.",
    services: [
      "ENT Surgery",
      "Hearing Tests",
      "Sinus Treatment",
      "ENT Consultation",
    ],
  },
  {
    id: 20,
    name: "Obstetrics & Gynecology",
    icon: "mdi:gender-female",
    description:
      "Complete women's health services including pregnancy care, delivery, and gynecological treatments.",
    services: [
      "Prenatal Care",
      "Delivery Services",
      "Gynecological Surgery",
      "Women's Health",
    ],
  },
  {
    id: 21,
    name: "Clinical Nutrition & Dietetics",
    icon: "mdi:food",
    description:
      "Expert nutritional counseling and diet planning for various health conditions and wellness goals.",
    services: [
      "Nutrition Counseling",
      "Diet Planning",
      "Weight Management",
      "Therapeutic Diets",
    ],
  },
  {
    id: 22,
    name: "Physiotherapy",
    icon: "mdi:arm-flex",
    description:
      "Comprehensive physical therapy and rehabilitation services for recovery and pain management.",
    services: [
      "Physical Therapy",
      "Rehabilitation",
      "Sports Injury Treatment",
      "Pain Management",
    ],
  },
  {
    id: 23,
    name: "Pulmonology & Sleep Medicine",
    icon: "mdi:weather-windy",
    description:
      "Specialized care for respiratory disorders and sleep-related breathing problems.",
    services: [
      "Pulmonary Consultation",
      "Sleep Studies",
      "Asthma Treatment",
      "COPD Management",
    ],
  },
  {
    id: 24,
    name: "Dental Services",
    icon: "mdi:tooth",
    description:
      "Complete dental care services including preventive, restorative, and cosmetic dentistry.",
    services: [
      "General Dentistry",
      "Oral Surgery",
      "Orthodontics",
      "Cosmetic Dentistry",
    ],
  },
  {
    id: 25,
    name: "Ophthalmology",
    icon: "mdi:eye",
    description:
      "Expert eye care services including diagnosis, treatment, and surgical procedures for eye disorders.",
    services: [
      "Eye Examination",
      "Cataract Surgery",
      "Retinal Treatment",
      "Glaucoma Management",
    ],
  },
  {
    id: 26,
    name: "Internal Medicine",
    icon: "mdi:clipboard-pulse",
    description:
      "Comprehensive internal medicine services for adult patients with complex medical conditions.",
    services: [
      "General Medicine",
      "Chronic Disease Management",
      "Preventive Care",
      "Health Consultations",
    ],
  },
  {
    id: 27,
    name: "Dermatology",
    icon: "mdi:face-woman",
    description:
      "Expert dermatological care for skin, hair, and nail disorders with advanced treatment options.",
    services: [
      "Skin Treatment",
      "Dermatological Surgery",
      "Cosmetic Procedures",
      "Hair Treatment",
    ],
  },
  {
    id: 28,
    name: "Diagnostics & Support Services",
    icon: "mdi:test-tube",
    description:
      "Comprehensive diagnostic services including laboratory tests, imaging, and pathology services.",
    services: [
      "Laboratory Tests",
      "Imaging Services",
      "Pathology",
      "Health Screenings",
    ],
  },
  {
    id: 29,
    name: "Ambulance Services",
    icon: "mdi:ambulance",
    description:
      "24/7 ambulance services with trained paramedics and life support equipment for emergency transfers.",
    services: [
      "Emergency Ambulance",
      "ICU Ambulance",
      "Air Ambulance",
      "Patient Transfer",
    ],
  },
  {
    id: 30,
    name: "High Dependency Unit (HDU)",
    icon: "mdi:hospital",
    description:
      "Specialized high dependency unit providing intensive monitoring and care for patients requiring close observation.",
    services: [
      "Continuous Monitoring",
      "Post-operative Care",
      "Critical Care Support",
      "Ventilator Support",
    ],
  },
];

export default function Service() {
  pageTitle("Services");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="/images/contact/banner_img.png"
        title="Our Specialized Services"
        subTitle="Helios offers a comprehensive range of hospital services, including outpatient care, daycare treatment, preventive health packages, immunization services and diagnostic services"
      />

      <Section
        topMd={100}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <div className="container">
          {/* Services Grid - Modern Side-by-Side Layout */}
          <div className="row gy-4">
            {servicesData.map((service, index) => (
              <div key={service.id} className="col-lg-6">
                <Link
                  to={`/service/${service.id}`}
                  className="text-decoration-none"
                  style={{ display: "block", height: "100%" }}
                >
                  <div
                    className="service-item-modern cs_radius_20 h-100 position-relative overflow-visible"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      border: "1px solid rgba(52, 194, 215, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      minHeight: "140px",
                      transform:
                        "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "perspective(1000px) translateX(4px) rotateX(-2deg) rotateY(2deg)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 8px rgba(0, 0, 0, 0.08)";
                    }}
                  >
                    {/* Numbered Circular Button - Top Right */}
                    <div
                      className="service-number-badge position-absolute"
                      style={{
                        top: "-12px",
                        right: "-12px",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #34C2D7 0%, #274760 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "700",
                        boxShadow:
                          "0 4px 15px rgba(52, 194, 215, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: 10,
                        border: "3px solid #fff",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "scale(1.1) rotate(5deg)";
                        e.currentTarget.style.boxShadow =
                          "0 6px 20px rgba(52, 194, 215, 0.5), 0 3px 10px rgba(0, 0, 0, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "scale(1) rotate(0deg)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 15px rgba(52, 194, 215, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)";
                      }}
                    >
                      {index + 1}
                    </div>
                    {/* Icon Section */}
                    <div
                      className="service-icon-wrapper flex-shrink-0"
                      style={{
                        width: "140px",
                        height: "140px",
                        background:
                          "linear-gradient(135deg, rgba(52, 194, 215, 0.1) 0%, rgba(39, 71, 96, 0.1) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div
                        className="position-absolute"
                        style={{
                          width: "100px",
                          height: "100px",
                          background:
                            "linear-gradient(135deg, rgba(52, 194, 215, 0.15) 0%, rgba(39, 71, 96, 0.15) 100%)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon
                          icon={service.icon}
                          style={{
                            fontSize: "48px",
                            color: "#34C2D7",
                            transition: "transform 0.3s ease",
                            position: "relative",
                            zIndex: 1,
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className="service-content-wrapper flex-grow-1 p-4"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "left",
                        alignItems: "flex-start",
                      }}
                    >
                      <h3
                        className="service-title cs_fs_20 cs_semibold mb-2"
                        style={{
                          color: "#333",
                          transition: "color 0.3s ease",
                          lineHeight: "1.3",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        {service.name}
                      </h3>
                      <p
                        className="service-description mb-0 cs_fs_14"
                        style={{
                          color: "#666",
                          lineHeight: "1.6",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        {service.description}
                      </p>
                      <div
                        className="service-arrow mt-3 text-end"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          gap: "8px",
                          color: "#34C2D7",
                          fontSize: "14px",
                          fontWeight: "600",
                          opacity: 1,
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        <span>Learn More</span>
                        <Icon
                          icon="mdi:arrow-right"
                          style={{ fontSize: "18px" }}
                        />
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div
                      className="service-decorative"
                      style={{
                        position: "absolute",
                        right: "-20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "80px",
                        height: "80px",
                        background:
                          "linear-gradient(135deg, rgba(52, 194, 215, 0.05) 0%, rgba(39, 71, 96, 0.05) 100%)",
                        borderRadius: "50%",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <style>{`
            .service-item-modern {
              transform-style: preserve-3d;
            }
            .service-item-modern:hover .service-title {
              color: #34C2D7 !important;
            }
            .service-item-modern:hover .service-icon-wrapper {
              background: linear-gradient(135deg, rgba(52, 194, 215, 0.2) 0%, rgba(39, 71, 96, 0.2) 100%) !important;
            }
            .service-item-modern:hover .service-icon-wrapper > div {
              background: linear-gradient(135deg, rgba(52, 194, 215, 0.25) 0%, rgba(39, 71, 96, 0.25) 100%) !important;
              transform: scale(1.1);
            }
            .service-item-modern:hover .service-arrow {
              opacity: 1 !important;
              transform: translateX(5px);
            }
            .service-arrow {
              opacity: 1 !important;
            }
            .service-item-modern:hover .service-decorative {
              opacity: 1 !important;
            }
            .service-number-badge {
              user-select: none;
            }
            @media (max-width: 991px) {
              .service-item-modern {
                min-height: 120px !important;
              }
              .service-icon-wrapper {
                width: 120px !important;
                height: 120px !important;
              }
              .service-icon-wrapper > div {
                width: 80px !important;
                height: 80px !important;
              }
              .service-icon-wrapper Icon {
                font-size: 40px !important;
              }
            }
          `}</style>
        </div>
      </Section>
    </>
  );
}
