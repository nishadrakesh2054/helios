

import React from "react";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import Section from "../Section";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import DoctorDetailsSection from "../Section/DoctorDetailsSection";
// import AppointmentSectionStyle2 from "../Section/AppointmentSection/AppointmentSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";

export default function DoctorDetails() {
  pageTitle("Doctor Details");

  return (
    <>
      <BreadcrumbStyle2 />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <DoctorDetailsSection
          bgUrl="/images/doctors/doctor_details_bg.svg"
          imgUrl="/images/doctors/doctor_details.jpeg"
          name="Dr. Anjali Rana, MD"
          department="Gynecology & Obstetrics Department"
          designation="Senior Consultant Gynecologist"
          description="Dr. Anjali Rana is a compassionate and experienced gynecologist with over 12 years of service in women’s health, focusing on maternity care, reproductive health, and minimally invasive surgeries. She is well-known for her patient-centered approach and dedication to women’s wellness across Nepal."
          social={[
            { icon: "fa6-brands:facebook-f", href: "/about" },
            { icon: "fa6-brands:linkedin-in", href: "/about" },
            { icon: "fa6-brands:twitter", href: "/about" },
          ]}
          contactInfo={[
            { iconUrl: "/images/icons/call.svg", title: "+977-9812345678" },
            {
              iconUrl: "/images/icons/envlope.svg",
              title: "anjali.rana@nepalhealth.com",
            },
          ]}
          contactInfoHeading="Contact Info"
          schedules={[
            { day: "Sunday", time: "07:30 AM - 10:30 AM" },
            { day: "Tuesday", time: "10:00 AM - 1:00 PM" },
            { day: "Thursday", time: "02:00 PM - 05:00 PM" },
          ]}
          scheduleHeading="Appointment Schedules"
          degrees={[
            {
              title:
                "Institute of Medicine, Tribhuvan University – Kathmandu, Nepal",
              subTitle: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
            },
            {
              title:
                "B.P. Koirala Institute of Health Sciences – Dharan, Nepal",
              subTitle: "MD in Obstetrics and Gynecology",
            },
            {
              title: "Royal College of Obstetricians and Gynaecologists – UK",
              subTitle:
                "Advanced Training in Reproductive Health & Maternal Care",
            },
          ]}
          degreesHeading="Degrees"
          experiences={[
            {
              title:
                "Over 12 years of experience in gynecology and obstetrics at leading hospitals in Kathmandu and Pokhara.",
            },
            {
              title:
                "Specialized in prenatal, antenatal, and postnatal care, with emphasis on safe motherhood.",
            },
            {
              title:
                "Experienced in performing laparoscopic gynecologic surgeries and infertility management.",
            },
            {
              title:
                "Actively involved in women’s health awareness programs across rural Nepal.",
            },
          ]}
          experiencesHeading="Experiences"
          awards={[
            {
              title:
                "Recipient of the National Women’s Health Excellence Award – 2022 (Nepal Medical Association).",
            },
            {
              title:
                "Recognized by WHO Nepal for contribution to rural maternal healthcare outreach programs.",
            },
          ]}
          awardHeading="Awards & Achievements"
        />
      </Section>


      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Your Health, Our Priority <br />Book Your Appointment Today!"
          subTitle="Get personalized care from our qualified doctors dedicated to your wellbeing and recovery."
          imgUrl="/images/doctors/banner_img_3.png"
        />
      </Section>
    </>
  );
}
