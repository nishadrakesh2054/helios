import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSection from "../Section/FaqSection";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";
import TestimonialSectionStyle4 from "../Section/TestimonialSection/TestimonialSectionStyle4";

const faqData = [
  {
    title: "What services does Helios offer?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I schedule an appointment with Helios?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "Do you accept insurance?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I request a prescription refill?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
];

const departmentData = [
  {
    title: "Emergency Department",
    iconUrl: "images/home_1/department_icon_1.svg",
    href: "/departments/department-details",
  },
  {
    title: "Pediatric Departement",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/departments/department-details",
  },
  {
    title: "Gynecology Department",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/department-details",
  },
  {
    title: "Cardiology Department",
    iconUrl: "images/home_1/department_icon_4.svg",
    href: "/departments/department-details",
  },
  {
    title: "Neurology Department",
    iconUrl: "images/home_1/department_icon_5.svg",
    href: "/departments/department-details",
  },
  {
    title: "Psychiatry Department",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
];
const testimonialData = [
  {
    text: '"I recently had to bring my child to Helios for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease.”',
    ratingNumber: "5",
    avatarImgUrl: "/images/home_4/avatar_2.png",
    avatarName: "Sophia Torres",
    avatarDesignation: "New York, USA",
  },
  {
    text: '"Helios has been a game-changer for me. The doctors are caring and highly skilled, and the staff is always friendly and accommodating. We hope for the best wishes.”',
    ratingNumber: "5",
    avatarImgUrl: "/images/home_4/avatar_3.png",
    avatarName: "John Dupont",
    avatarDesignation: "Manhattan, USA",
  },
  {
    text: "“I had a great experience with Helios. The staff were friendly and professional, and the doctor took the time to answer all my questions and address my concerns.”",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_4/avatar_4.png",
    avatarName: "Allen Duarte",
    avatarDesignation: "California, USA",
  },
  {
    text: '"I recently had to bring my child to Helios for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease.”',
    ratingNumber: "5",
    avatarImgUrl: "/images/home_4/avatar_2.png",
    avatarName: "Sophia Torres",
    avatarDesignation: "New York, USA",
  },
  {
    text: '"Helios has been a game-changer for me. The doctors are caring and highly skilled, and the staff is always friendly and accommodating. We hope for the best wishes.”',
    ratingNumber: "5",
    avatarImgUrl: "/images/home_4/avatar_3.png",
    avatarName: "John Dupont",
    avatarDesignation: "Manhattan, USA",
  },
  {
    text: "“I had a great experience with Helios. The staff were friendly and professional, and the doctor took the time to answer all my questions and address my concerns.”",
    ratingNumber: "5",
    avatarImgUrl: "/images/home_4/avatar_4.png",
    avatarName: "Allen Duarte",
    avatarDesignation: "California, USA",
  },
];

export default function Home() {
  pageTitle("Home");
  return (
    <>
      <Hero
        title="Your Health <br /> Our Priority"
        subTitle="Delivering trusted medical care with compassion, advanced technology, and expert professionals dedicated to your well-being."
        bgUrl="/images/home_1/bg-2.png"
        imgUrl="/images/home_1/hero_img.png"
        videoBtnText="See Why Patients Trust Us"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        infoList={[
          {
            title: "Hotline",
            subTitle: "01- 5912170",
            iconUrl: "/images/contact/icon_1.svg",
          },
          {
            title: "Email",
            subTitle: "info@heliosnepal.com",
            iconUrl: "/images/icons/ambulance.svg",
          },
          {
            title: "Location",
            subTitle: " Jawalakhel-4, Lalitpur",
            iconUrl: "/images/icons/pin.svg",
          },
        ]}
        btnText="Make an Appointment"
        btnUrl="/appointments"
      />
      {/* Start Feature Section */}

      {/* End Feature Section */}
      {/* Start About Section */}
      <Section topMd={50}>
        <AboutSection
          imgUrl="/images/home_1/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle=" HELIOS HOSPITAL"
          featureList={[
            {
              featureListTitle:
                "Helios  Hospital is a leading healthcare provider  committed to providing patient-centric healthcare",
              featureListSubTitle:
                "Our institution has been envisioned to bring the highest standards of medical care, integrated with clinical research, education and training to the community.  At Helios, we strive to deliver accurate diagnostics, advanced therapeutics and quality rehabilitation—focusing not only on treating diseases but also on preventive care by combining clinical expertise with emerging technology. Located in a serene and welcoming environment, Helios is a boutique hospital driven by a passionate and well-trained medical team dedicated to excellence in healthcare..",
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Departments"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>

      <Section
        topMd={190}
        topLg={150}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle4
          sectionTitle="Discover the Stories of Health and Healing"
          sectionTitleUp="WHAT OUR PATIENTS SAY"
          avatarListTitle="150+ patients are reviews about Helios"
          avatarList={[
            { imgUrl: "/images/home_4/avatar_1.png" },
            { imgUrl: "/images/home_4/avatar_2.png" },
            { imgUrl: "/images/home_4/avatar_3.png" },
            { imgUrl: "/images/home_4/avatar_4.png" },
            { imgUrl: "/images/home_4/avatar_5.png" },
          ]}
          data={testimonialData}
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>
      {/* End Banner Section */}

      {/* Start Appointment Section */}
      <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.png"
        />
      </Section>
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section
        topMd={50}
        topLg={100}
        topXl={100}
        bottomMd={50}
        bottomLg={100}
        bottomXl={100}
      >
        {/* <BrandsSection data={brandData} /> */}
      </Section>
      {/* End Brand Section */}
    </>
  );
}
