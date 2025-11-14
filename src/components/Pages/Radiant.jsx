import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import Spacing from "../Spacing";
import { pageTitle } from "../../helpers/PageTitle";

export default function Radiant() {
  pageTitle("Helios Radiant Card Program");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="/images/contact/banner_img.png"
        title="Helios Radiant Card Program"
        subTitle="A membership program that offers discounts and privileges as per the Helios Discount Policy"
      />

      <Section topMd={185} topLg={150} topXl={110} bottomMd={100}>
        <div className="container">
          {/* Introduction Section */}
          <div className="row mb-5">
            <div className="col-lg-10 offset-lg-1">
              <h2 className="cs_section_title cs_fs_48 cs_semibold mb-4">
                Helios Radiant Card Program
              </h2>
              <p className="cs_fs_18" style={{ lineHeight: "1.8" }}>
                The Helios Radiant Card Program is a membership program that
                offers discounts and privileges as per the Helios Discount
                Policy.
              </p>
            </div>
          </div>

          <Spacing md="70" lg="50" />

          {/* Images Section */}
          <div className="row gy-4 mb-5 justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-3">
                <img
                  src="/images/radiantcard1.png"
                  alt="Helios Radiant Card"
                  className="w-100 cs_radius_15"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-3">
                <img
                  src="/images/radiantcard2.png"
                  alt="Helios Radiant Card"
                  className="w-100 cs_radius_15"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>

          <Spacing md="80" lg="60" />

          {/* Membership Eligibility Section */}
          <div className="row mb-5">
            <div className="col-lg-10 offset-lg-1">
              <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-5">
                <h3 className="cs_fs_42 cs_semibold mb-4">
                  Who can be a member of this program
                </h3>
                <Spacing md="30" lg="20" />
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div
                      className="p-4 cs_radius_15 h-100"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(48, 123, 196, 0.05) 0%, rgba(39, 71, 96, 0.05) 100%)",
                      }}
                    >
                      <div className="d-flex align-items-start">
                        <div
                          className="rounded-circle cs_center me-3 flex-shrink-0"
                          style={{
                            width: "50px",
                            height: "50px",
                            background:
                              "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                            color: "#fff",
                            fontSize: "24px",
                            fontWeight: "bold",
                          }}
                        >
                          ⚡
                        </div>
                        <div>
                          <h4 className="cs_fs_20 cs_semibold mb-2">
                            Automatic Enrollment
                          </h4>
                          <p
                            className="m-0 cs_fs_16"
                            style={{ lineHeight: "1.6" }}
                          >
                            Patients automatically become members upon spending
                            a one-time amount of{" "}
                            <strong className="cs_accent_color">
                              Rs. 10,000
                            </strong>{" "}
                            in a day
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="p-4 cs_radius_15 h-100"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(48, 123, 196, 0.05) 0%, rgba(39, 71, 96, 0.05) 100%)",
                      }}
                    >
                      <div className="d-flex align-items-start">
                        <div
                          className="rounded-circle cs_center me-3 flex-shrink-0"
                          style={{
                            width: "50px",
                            height: "50px",
                            background:
                              "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                            color: "#fff",
                            fontSize: "24px",
                            fontWeight: "bold",
                          }}
                        >
                          Rs.
                        </div>
                        <div>
                          <h4 className="cs_fs_20 cs_semibold mb-2">
                            One-Time Payment
                          </h4>
                          <p
                            className="m-0 cs_fs_16"
                            style={{ lineHeight: "1.6" }}
                          >
                            Pay a minimum one-time fee of{" "}
                            <strong className="cs_accent_color">Rs. 500</strong>{" "}
                            to become a member
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Spacing md="80" lg="60" />

          {/* Discount Percentage Section */}
          <div className="row mb-5">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="cs_fs_42 cs_semibold mb-3">
                Discount Percentages Offered
              </h3>
              <Spacing md="30" lg="20" />
              <p className="cs_fs_18 mb-5" style={{ color: "#666" }}>
                Enjoy exclusive discounts on various services with your Helios
                Radiant Card
              </p>

              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle cs_center me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "rgba(48, 123, 196, 0.1)",
                            color: "#307bc4",
                            fontSize: "20px",
                          }}
                        >
                          🧪
                        </div>
                        <span className="cs_fs_18 cs_medium">Lab Services</span>
                      </div>
                      <span
                        className="cs_accent_color cs_fs_32 cs_bold"
                        style={{ fontWeight: "700" }}
                      >
                        10%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle cs_center me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "rgba(48, 123, 196, 0.1)",
                            color: "#307bc4",
                            fontSize: "20px",
                          }}
                        >
                          📷
                        </div>
                        <span className="cs_fs_18 cs_medium">
                          Radiology (X-ray, USG, CT, BMD)
                        </span>
                      </div>
                      <span
                        className="cs_accent_color cs_fs_32 cs_bold"
                        style={{ fontWeight: "700" }}
                      >
                        10%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle cs_center me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "rgba(48, 123, 196, 0.1)",
                            color: "#307bc4",
                            fontSize: "20px",
                          }}
                        >
                          ❤️
                        </div>
                        <span className="cs_fs_18 cs_medium">
                          Cardiology (ECG, ECHO, TMT)
                        </span>
                      </div>
                      <span
                        className="cs_accent_color cs_fs_32 cs_bold"
                        style={{ fontWeight: "700" }}
                      >
                        10%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle cs_center me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "rgba(48, 123, 196, 0.1)",
                            color: "#307bc4",
                            fontSize: "20px",
                          }}
                        >
                          🏥
                        </div>
                        <span className="cs_fs_18 cs_medium">Day Care</span>
                      </div>
                      <span
                        className="cs_accent_color cs_fs_32 cs_bold"
                        style={{ fontWeight: "700" }}
                      >
                        5%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-3">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle cs_center me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "rgba(48, 123, 196, 0.1)",
                            color: "#307bc4",
                            fontSize: "20px",
                          }}
                        >
                          💊
                        </div>
                        <span className="cs_fs_18 cs_medium">Pharmacy</span>
                      </div>
                      <span
                        className="cs_accent_color cs_fs_32 cs_bold"
                        style={{ fontWeight: "700" }}
                      >
                        7%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Spacing md="80" lg="60" />

          {/* Terms & Conditions Section */}
          <div className="row mb-5">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="cs_fs_42 cs_semibold mb-3">Terms & Conditions</h3>
              <Spacing md="20" lg="15" />
              <p className="cs_fs_18 mb-5" style={{ color: "#666" }}>
                Please read the following terms and conditions carefully
              </p>

              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle cs_center me-3 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          background:
                            "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        1
                      </div>
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">
                          Membership Enrollment
                        </h4>
                        <p
                          className="m-0 cs_fs_16"
                          style={{ lineHeight: "1.6" }}
                        >
                          Anyone can become a member of the Helios Radiant Card
                          (HRC) program by paying a one-time fee of a minimum of
                          Rs. 500.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle cs_center me-3 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          background:
                            "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        2
                      </div>
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">
                          Automatic Enrollment
                        </h4>
                        <p
                          className="m-0 cs_fs_16"
                          style={{ lineHeight: "1.6" }}
                        >
                          Patients automatically become members upon spending a
                          one-time amount of Rs. 10,000 in a day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle cs_center me-3 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          background:
                            "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        3
                      </div>
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">
                          Discount Amount
                        </h4>
                        <p
                          className="m-0 cs_fs_16"
                          style={{ lineHeight: "1.6" }}
                        >
                          Discount amounts are subject to change at any time
                          according to Helios Hospital's policies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle cs_center me-3 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          background:
                            "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        4
                      </div>
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">
                          Promotions
                        </h4>
                        <p
                          className="m-0 cs_fs_16"
                          style={{ lineHeight: "1.6" }}
                        >
                          Membership privileges cannot be used in conjunction
                          with any other promotions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle cs_center me-3 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          background:
                            "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        5
                      </div>
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">
                          Card Usage
                        </h4>
                        <p
                          className="m-0 cs_fs_16"
                          style={{ lineHeight: "1.6" }}
                        >
                          The Helios Radiant Card is non-transferable and can
                          only be used by the registered patient.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle cs_center me-3 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          background:
                            "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        6
                      </div>
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">
                          Display of Card
                        </h4>
                        <p
                          className="m-0 cs_fs_16"
                          style={{ lineHeight: "1.6" }}
                        >
                          Members must present their Helios Patient ID card at
                          the time of bill payment or provide adequate
                          information to confirm their membership.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle cs_center me-3 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          background:
                            "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        7
                      </div>
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">
                          Modifications
                        </h4>
                        <p
                          className="m-0 cs_fs_16"
                          style={{ lineHeight: "1.6" }}
                        >
                          The program terms and conditions are subject to change
                          at any time, with or without notice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg cs_shadow_1 p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle cs_center me-3 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          background:
                            "linear-gradient(134deg, #307bc4 0%, #274760 100%)",
                          color: "#fff",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        8
                      </div>
                      <div>
                        <h4 className="cs_fs_20 cs_semibold mb-2">Privacy</h4>
                        <p
                          className="m-0 cs_fs_16"
                          style={{ lineHeight: "1.6" }}
                        >
                          Patient information collected for the Helios Radiant
                          Card program will be kept confidential and used in
                          accordance with the hospital's privacy policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Spacing md="50" lg="40" />
              <div
                className="cs_iconbox cs_style_10 cs_radius_15 p-4"
                style={{
                  background:
                    "linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%)",
                  borderLeft: "5px solid #307bc4",
                  boxShadow: "0 4px 15px rgba(48, 123, 196, 0.1)",
                }}
              >
                <div className="d-flex align-items-start">
                  <div
                    className="me-3 flex-shrink-0"
                    style={{
                      fontSize: "32px",
                    }}
                  >
                    💡
                  </div>
                  <div>
                    <h4
                      className="cs_fs_18 cs_semibold mb-2"
                      style={{ color: "#274760" }}
                    >
                      Important Note
                    </h4>
                    <p
                      className="m-0 cs_fs_16"
                      style={{ lineHeight: "1.7", color: "#333" }}
                    >
                      Patients are encouraged to review these terms and
                      conditions carefully and seek clarification if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
