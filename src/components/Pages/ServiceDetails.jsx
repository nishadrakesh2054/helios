import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import BannerSectionStyle7 from "../Section/BannerSection/BannerSectionStyle7";
import Section from "../Section";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import { servicesData } from "./Service";
import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData.find((item) => String(item.id) === id);
  const navigate = useNavigate();
  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2>Service not found.</h2>
        <Link to="/service" className="btn btn-primary mt-3">
          Back to Services
        </Link>
      </div>
    );
  }

  const { name, icon, description, services } = service;

  pageTitle(`${name} - Service Details`);

  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <section className="cs_shape_wrap">
          <div className="cs_shape_1 cs_position_5" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cs_section_heading cs_style_1">
                  <div
                    className="d-flex align-items-center mb-4"
                    style={{ gap: "20px" }}
                  >
                    <div
                      className="rounded-circle cs_center flex-shrink-0"
                      style={{
                        width: "100px",
                        height: "100px",
                        background:
                          "linear-gradient(135deg, rgba(52, 194, 215, 0.15) 0%, rgba(39, 71, 96, 0.15) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon={icon}
                        style={{
                          fontSize: "50px",
                          color: "#34C2D7",
                        }}
                      />
                    </div>
                    <h2 className="cs_section_title cs_fs_72 m-0">{name}</h2>
                  </div>
                  <div className="cs_height_54 cs_height_xl_30" />
                  <p className="m-0 cs_fs_18" style={{ lineHeight: "1.8" }}>
                    {description}
                  </p>
                  <div className="cs_height_40 cs_height_xl_30" />

                  {/* Services List */}
                  {services && services.length > 0 && (
                    <>
                      <h3 className="cs_fs_32 cs_semibold mb-3">
                        Services We Offer
                      </h3>
                      <div className="row gy-3">
                        {services.map((item, index) => (
                          <div key={index} className="col-md-6">
                            <div
                              className="d-flex align-items-center p-3 cs_radius_15 h-100"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(52, 194, 215, 0.08) 0%, rgba(39, 71, 96, 0.08) 100%)",
                                borderLeft: "4px solid #34C2D7",
                              }}
                            >
                              <Icon
                                icon="mdi:check-circle"
                                style={{
                                  fontSize: "24px",
                                  color: "#34C2D7",
                                  marginRight: "12px",
                                  flexShrink: 0,
                                }}
                              />
                              <span className="cs_fs_16 cs_medium">{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="cs_height_40 cs_height_xl_30" />

                  {/* Call to Action */}
                  <div
                    className="cs_iconbox cs_style_10 cs_radius_20 p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(52, 194, 215, 0.1) 0%, rgba(39, 71, 96, 0.1) 100%)",
                      borderLeft: "5px solid #34C2D7",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">
                          Need More Information?
                        </h4>
                        <p className="m-0 cs_fs_16" style={{ color: "#666" }}>
                          Contact us today to learn more about our services or
                          schedule an appointment.
                        </p>
                      </div>

                      <div className="col-lg-12">
                        <div className="cs_height_18" />
                        <button
                          className="cs_btn cs_style_1"
                          onClick={() => navigate("/appointments")}
                        >
                          <span>Book Appointment</span>
                          <i>
                            <img
                              src="/images/icons/arrow_white.svg"
                              alt="Icon"
                            />
                            <img
                              src="/images/icons/arrow_white.svg"
                              alt="Icon"
                            />
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
                <div
                  className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-0 position-relative"
                  style={{ height: "500px", overflow: "hidden" }}
                >
                  <img
                    src="/images/home_1/about.png"
                    alt={name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* End Appointment Section */}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don't Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
