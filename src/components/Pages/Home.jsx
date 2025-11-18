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
import WhyChooseUsSection from "../Section/WhyChooseUsSection";
import TeamSection from "../Section/TeamSection";
import { departmentData } from "./Departments";

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

// Use department data from Departments page
const carouselDepartmentData = departmentData.map((dept) => ({
  id: dept.id,
  title: dept.title,
  iconUrl: dept.iconUrl,
}));

// Why Choose Us data
const whyChooseUsData = [
  {
    icon: "fa6-solid:user-doctor",
    title: "Expert Medical Team",
    description:
      "Our highly qualified doctors and medical professionals bring years of experience and expertise to provide the best healthcare services.",
  },
  {
    icon: "fa6-solid:flask-vial",
    title: "Advanced Technology",
    description:
      "We utilize state-of-the-art medical equipment and cutting-edge technology to ensure accurate diagnosis and effective treatment.",
  },
  {
    icon: "fa6-solid:heart-pulse",
    title: "Patient-Centered Care",
    description:
      "Your health and comfort are our top priorities. We provide personalized care tailored to your individual needs and concerns.",
  },
  {
    icon: "fa6-solid:clock",
    title: "24/7 Emergency Services",
    description:
      "Our emergency department operates round the clock to provide immediate medical attention whenever you need it most.",
  },
  {
    icon: "fa6-solid:shield-heart",
    title: "Quality & Safety",
    description:
      "We maintain the highest standards of medical care, safety protocols, and hygiene to ensure your well-being at all times.",
  },
  {
    icon: "fa6-solid:hand-holding-medical",
    title: "Comprehensive Care",
    description:
      "From preventive care to advanced treatments, we offer a full spectrum of healthcare services under one roof.",
  },
];

// Team preview data (showing 3 doctors)
const teamPreviewData = [
  {
    imgUrl: "/images/doctors/doctor_1.png",
    name: "Dr. Suman Shrestha, MD",
    designation: "Cardiologist",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "/images/doctors/doctor_2.png",
    name: "Dr. Anjali Koirala, MD",
    designation: "Emergency Medicine Specialist",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: "/images/doctors/doctor_3.png",
    name: "Dr. Ramesh Thapa, MD",
    designation: "Pediatrician",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
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
            title: "Call Us Now",
            subTitle: "01- 5912170",
            iconUrl: "/images/contact/icon_1.svg",
          },
          {
            title: "Email",
            subTitle: "info@heliosnepal.com",
            iconUrl: "/images/contact/ambulance.svg",
          },
          {
            title: "Location",
            subTitle: " Jawalakhel-4, Lalitpur",
            iconUrl: "/images/contact/pin.svg",
          },
        ]}
        btnText="Make an Appointment"
        btnUrl="/appointments"
      />

      <Section topMd={150} topLg={120} topXl={100}>
        <AboutSection
          imgUrl="/images/home_1/about.png"
          spiningImgUrl="/images/contact/about_mini.svg"
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

      <Section topMd={150} topLg={120} topXl={100}>
        <WhyChooseUsSection
          sectionTitle="Why Choose Helios Hospital"
          sectionTitleUp="OUR ADVANTAGES"
          data={whyChooseUsData}
        />
      </Section>

      <Section topMd={150} topLg={120} topXl={100}>
        <DepartmentSection
          sectionTitle="Departments"
          bgUrl="images/home_1/department_bg.svg"
          data={carouselDepartmentData}
        />
      </Section>

      <Section topMd={150} topLg={120} topXl={100}>
        <TeamSection
          sectionTitle="Meet Our Experts "
          sectionTitleUp="OUR TEAM"
          data={teamPreviewData}
        />
      </Section>

      <Section topMd={150} topLg={120} topXl={100}>
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

      <Section topMd={150} topLg={120} topXl={100}>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don't Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>

      <Section topMd={150} topLg={120} topXl={100} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.png"
        />
      </Section>

      <Section topMd={150} topLg={120} topXl={100}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>

      <Section
        topMd={50}
        topLg={100}
        topXl={100}
        bottomMd={50}
        bottomLg={100}
        bottomXl={100}
      ></Section>
    </>
  );
}
