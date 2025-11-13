import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
import Director from "../Section/TeamSection/Director";
import Chairman from "../Section/TeamSection/Chairman";
const teamData = [
  {
    imgUrl: "/images/doctors/doctor_1.png",
    name: "Dr. Mimi Giri",
    role: "Chairperson",
  },
  {
    imgUrl: "/images/doctors/doctor_2.png",
    name: "Dr. Neeraj Singh",
    role: "Managing Director & CEO",
  },

  {
    imgUrl: "/images/doctors/doctor_3.png",
    name: "Mr. Barun Khadka",
    role: "Executive Director",
  },

  {
    imgUrl: "/images/doctors/doctor_4.png",
    name: "Mr. Saurav Rana",
    role: " Director",
  },
  {
    imgUrl: "/images/doctors/doctor_5.png",
    name: "Ms. Jaya Shah",
    role: " Director",
  },
  {
    imgUrl: "/images/doctors/doctor_6.png",
    name: "Ms. Prama RL Shah Rana",
    role: " Director",
  },
  {
    imgUrl: "/images/doctors/doctor_7.png",
    name: "Ms. Shristi Limbu",
    role: " Director",
  },
  {
    imgUrl: "/images/doctors/doctor_8.png",
    name: "Ms. Madalasha Shrestha",
    role: " Directorr",
  },
];
export default function Directors() {
  pageTitle("directors");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="/images/contact/banner_img.png"
        title="Board of Directors"
        subTitle="Meet the visionary leaders guiding Helios Hospital toward excellence in healthcare."
      />
      <Chairman />
      <Section topMd={65} bottomMd={100} bottomLg={150} bottomXl={110}>
        <Director
          data={teamData}
          sectionTitle=" Leadership "
          sectionTitleUp="Board of Directors"
        />
      </Section>
    </>
  );
}
