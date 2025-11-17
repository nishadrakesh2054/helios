import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";

const featureListData = [
  {
    iconUrl: "/images/home_3/value_icon_1.svg",
    title: "Compassion",
    subTitle:
      "We understand what our patients and their loved ones are going through and we will do everything we can to help them.",
  },
  {
    iconUrl: "/images/home_3/value_icon_2.svg",
    title: "Excellence",
    subTitle:
      "We pursue the highest standards in all that we do; we continuously learn and innovate to achieve better outcomes.",
  },
  {
    iconUrl: "/images/home_3/value_icon_3.svg",
    title: "Integrity",
    subTitle:
      "We adhere to the highest standards of professionalism, ethics and personal responsibility",
  },
  {
    iconUrl: "/images/home_3/value_icon_1.svg",
    title: "Collaboration",
    subTitle:
      "We value the contributions of all, integrating the unique skills of each staff member.",
  },
  {
    iconUrl: "/images/home_3/value_icon_2.svg",
    title: "Respect",
    subTitle:
      "We treat everyone in our diverse community, including patients, their families and colleagues, with dignity.",
  },
  {
    iconUrl: "/images/home_3/value_icon_3.svg",
    title: "Person-Centered Care",
    subTitle:
      "We design and deliver care centered on the needs of our patients and caregivers.",
  },
];
const funFactData = [
  { number: "20+", title: "Years of Excellence" },
  { number: "95%", title: "Patient Satisfaction" },
  { number: "5000+", title: "Patients Treated" },
  { number: "10+", title: "Specialist Doctors" },
  { number: "22+", title: "Locations" },
];

const teamData = [
  {
    imgUrl: "images/about/doctor_1.png",
    name: "Dr. Suman Thapa, MD",
    designation: "Chief Cardiologist",
    description:
      "Specialist in managing complex heart conditions and performing advanced cardiac procedures with precision.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/about/doctor_2.png",
    name: "Dr. Ramesh Shrestha, MD",
    designation: "Emergency Medicine Specialist",
    description:
      "Expert in treating urgent medical conditions, accidents, and acute illnesses with prompt and efficient care.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "images/about/doctor_3.png",
    name: "Dr. Anjali Gurung, MD",
    designation: "Pediatric Specialist",
    description:
      "Caring for children’s health with expertise in managing complex pediatric conditions and preventive care.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
];

const galleryData = [
  { imgUrl: "/images/about/portfolio_2_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_3_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_1_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_4_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_5_lg.jpeg" },
];
const awardData = [
  {
    iconUrl: "/images/icons/award.svg",
    title: "Nepal Health Excellence Award",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Kathmandu Medical Innovation Award",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Top Hospital of Nepal Recognition",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "National Healthcare Quality Certification",
  },
];

const valuesData = [
  {
    id: 1,
    icon: "/images/home_3/value_icon_1.svg",
    title: "Our Vision",
    description:
      "To be the most trusted partner in health, ailment and well-being, all the way.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    bgColor: "#667eea",
  },
  {
    id: 2,
    icon: "/images/home_3/value_icon_2.svg",
    title: "Our Mission",
    description:
      "Committed to providing quality and patient-centric health care. To transform healthcare through integrated clinical practice, education and training. To become one of the most premium healthcare providers in the region by 2030.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    bgColor: "#f5576c",
  },
];

export default function About() {
  pageTitle("About");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/banner_img.png"
        title="Welcome to <br />Helios Medical & Healthcare Center"
        subTitle="Your Partner in Health and Wellness"
      />
      <Section>
        <div className="container">
          <div className="row g-4">
            {valuesData.map((item) => (
              <div className="col-lg-6" key={item.id}>
                <div
                  className="position-relative"
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    padding: "0",
                    overflow: "hidden",
                    boxShadow: "0 5px 30px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.4s ease",
                    height: "100%",
                    minHeight: "280px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 40px rgba(0, 0, 0, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 30px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  {/* Colored accent bar */}

                  <div
                    className="d-flex align-items-center"
                    style={{
                      padding: "2.5rem",
                      height: "100%",
                    }}
                  >
                    {/* Icon Section */}
                    <div
                      style={{
                        flexShrink: 0,
                        marginRight: "2rem",
                      }}
                    >
                      <div
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "18px",
                          background: "#35C2D7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 8px 20px rgba(53, 194, 215, 0.35)",
                          transition: "all 0.4s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "scale(1.1) rotate(5deg)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "scale(1) rotate(0deg)";
                        }}
                      >
                        <img
                          src={item.icon}
                          alt={item.title}
                          style={{
                            width: "45px",
                            height: "45px",
                            filter: "brightness(0) invert(1)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "clamp(18px, 2.5vw, 22px)",
                          fontWeight: "700",
                          color: "#1a1a1a",
                          marginBottom: "12px",
                          lineHeight: "1.3",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          lineHeight: "1.7",
                          color: "#666",
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: "#35C2D7",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Our Core Values"
          imgUrl="images/about/why_choose_us.jpeg"
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Winning Awards and <br />Recognition"
          sectionTitleUp="AWARDS"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/about/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section>
    </>
  );
}
