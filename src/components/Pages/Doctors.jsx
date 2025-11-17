import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import TeamSectionStyle2 from "../Section/TeamSection/TeamSectionStyle2";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";


const teamData = [
  {
    imgUrl: "/images/doctors/doctor_1.png",
    department: "Cardiology",
    name: "Dr. Suman Shrestha, MD",
    designation: "Cardiologist",
    description:
      "Dr. Shrestha is an expert in cardiovascular care with over 15 years of experience in heart disease management and preventive cardiology.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "cardiology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_2.png",
    department: "Emergency and Emergency Medical Service",
    name: "Dr. Anjali Koirala, MD",
    designation: "Emergency Medicine Specialist",
    description:
      "Dr. Koirala has extensive experience in emergency care, critical trauma management, and acute medical conditions.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "emergency",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_3.png",
    department: "Pediatric",
    name: "Dr. Ramesh Thapa, MD",
    designation: "Pediatrician",
    description:
      "Dr. Thapa specializes in child healthcare, including preventive care, vaccination, and management of common and complex pediatric illnesses.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "pediatric",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_4.png",
    department: "Neurology and Neuro Surgery",
    name: "Dr. Nisha Gurung, MD",
    designation: "Neurologist",
    description:
      "Dr. Gurung provides expert care in neurological disorders, stroke management, and neurorehabilitation.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "neuro",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_5.png",
    department: "Gynecology",
    name: "Dr. Sita Rana, MD",
    designation: "Gynecologist",
    description:
      "Dr. Rana specializes in women’s health, prenatal care, and minimally invasive gynecological surgery.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "gynecology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_6.png",
    department: "Oncology",
    name: "Dr. Binod K.C., MD",
    designation: "Oncologist",
    description:
      "Dr. K.C. is a specialist in cancer diagnosis, chemotherapy, and personalized cancer treatment plans.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "oncology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_7.png",
    department: "Orthopedics",
    name: "Dr. Arjun Bhandari, MD",
    designation: "Orthopedic Surgeon",
    description:
      "Dr. Bhandari treats bone and joint disorders, performs arthroscopic surgery, and specializes in sports injuries.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "orthopedics",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_8.png",
    department: "Ophthalmology",
    name: "Dr. Manisha Shrestha, MD",
    designation: "Ophthalmologist",
    description:
      "Dr. Shrestha provides expert care in eye diseases, vision correction, and surgical eye procedures.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "ophthalmology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_9.png",
    department: "Dermatology",
    name: "Dr. Prakash Koirala, MD",
    designation: "Dermatologist",
    description:
      "Dr. Koirala specializes in skin care, cosmetic dermatology, and treatment of chronic skin conditions.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "dermatology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_10.png",
    department: "Pulmonology and Sleep Medicine",
    name: "Dr. Ranjan Adhikari, MD",
    designation: "Pulmonologist",
    description:
      "Dr. Adhikari treats lung diseases, sleep apnea, and chronic respiratory disorders with advanced therapies.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "pulmonology",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_11.png",
    department: "Internal Medicine and Endocrinology",
    name: "Dr. Anjana Bista, MD",
    designation: "Internal Medicine Specialist",
    description:
      "Dr. Bista manages chronic diseases such as diabetes, hypertension, and thyroid disorders with personalized care.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "internal-medicine",
    href: "/doctors/doctor-details",
  },
  {
    imgUrl: "/images/doctors/doctor_12.png",
    department: "Urology",
    name: "Dr. Binita Lama, MD",
    designation: "Urologist",
    description:
      "Dr. Lama specializes in urinary tract disorders, kidney health, and minimally invasive urological surgery.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    category: "urology",
    href: "/doctors/doctor-details",
  },
];

export default function Doctors() {
  pageTitle("Doctors");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Introduce  <br />Our Experts"
        subTitle="Certified  doctors with years of <br />professional experience"
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/doctors/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
