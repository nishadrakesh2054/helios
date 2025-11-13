// import React from 'react';
// import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
// import Section from '../Section';
// import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
// import DoctorDetailsSection from '../Section/DoctorDetailsSection';
// import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
// import { pageTitle } from '../../helpers/PageTitle';

// export default function DoctorDetails() {
//   pageTitle('Doctor Details');
//   return (
//     <>
//       <BreadcrumbStyle2 />
//       <Section bottomMd={190} bottomLg={150} bottomXl={110}>
//         <DoctorDetailsSection
//           bgUrl="/images/doctors/doctor_details_bg.svg"
//           imgUrl="/images/doctors/doctor_details.jpeg"
//           name="Dr. Sarah Lee, MD, MPH, FAPA"
//           department="Psychiatry Department"
//           designation="Board-certified Psychiatrist"
//           description="With more than 15 years of experience learning human psychology and behavior, Dr. Jones is an expert in managing mood disorders and anxiety disorders"
//           social={[
//             { icon: 'fa6-brands:facebook-f', href: '/about' },
//             { icon: 'fa6-brands:linkedin-in', href: '/about' },
//             { icon: 'fa6-brands:twitter', href: '/about' },
//           ]}
//           contactInfo={[
//             { iconUrl: '/images/icons/call.svg', title: '+123+456-7890' },
//             {
//               iconUrl: '/images/icons/envlope.svg',
//               title: 'sarahlee@prohealth.com',
//             },
//           ]}
//           contactInfoHeading="Contact Info"
//           schedules={[
//             { day: 'Monday', time: '09.00-12.00' },
//             { day: 'Wednesday', time: '15.00-18.00' },
//             { day: 'Friday', time: '09.00-12.00' },
//           ]}
//           scheduleHeading="Appointment Schedules"
//           degrees={[
//             {
//               title: 'University of California, San Francisco.',
//               subTitle: 'Medical degree',
//             },
//             {
//               title:
//                 'University of California, Los Angeles (UCLA) Medical Center.',
//               subTitle: 'Completed residency training in psychiatry',
//             },
//             {
//               title: 'University of California, Berkeley.',
//               subTitle: 'Master of Public Health degree',
//             },
//           ]}
//           degreesHeading="Degrees"
//           experiences={[
//             {
//               title:
//                 'Worked in community mental health clinics, private practice, and academic medical centers.',
//             },
//             {
//               title:
//                 'Expertise in the treatment of mood disorders, anxiety disorders, and psychotic disorders.',
//             },
//             {
//               title: `Special interest in women's mental health and perinatal psychiatry.`,
//             },
//             {
//               title:
//                 'Experience managing complex cases that involve both mental health and medical issues.',
//             },
//           ]}
//           experiencesHeading="Experiences"
//           awards={[
//             { title: 'Fellow of the American Psychiatric Association (FAPA).' },
//             {
//               title:
//                 'Recognized for research contributions with grants from the National Institute of Mental Health (NIMH) and the American Foundation for Suicide Prevention.',
//             },
//           ]}
//           awardHeading="Awards/Achievements"
//         />
//       </Section>
//       <Section bottomMd={200} bottomLg={150} bottomXl={110}>
//         <AppointmentSectionStyle2
//           bgUrl="/images/home_2/appointment_bg.svg"
//           imgUrl="/images/home_2/appointment_img.png"
//           sectionTitle="Appointment"
//           sectionTitleUp="BOOK AN"
//         />
//       </Section>

//       <Section className="cs_footer_margin_0">
//         <BannerSectionStyle9
//           title="Don’t Let Your Health <br />Take a Backseat!"
//           subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
//           imgUrl="/images/doctors/banner_img_3.png"
//         />
//       </Section>
//     </>
//   );
// }

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
{/* 
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section> */}

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
