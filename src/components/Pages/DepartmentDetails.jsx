import React from "react";
import BannerSectionStyle7 from "../Section/BannerSection/BannerSectionStyle7";
import Section from "../Section";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import TeamSectionStyle3 from "../Section/TeamSection/TeamSectionStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import { departmentData } from "./Departments";
import { useParams } from "react-router-dom";

const doctorData = [
  {
    imgUrl: "/images/departments/related_doctor_1.jpeg",
    name: "Dr. Sandeep Shrestha, MD",
    designation: "Senior Cardiologist",
    description:
      "Specialized in the treatment of heart attack, hypertension, <br />and other cardiovascular diseases.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],

    availableUrl: "/",
    callUrl: "/",
    chatUrl: "/",
    btnText: "Book Appointment",
    btnUrl: "/appointments",
  },
  {
    imgUrl: "/images/departments/related_doctor_1.jpeg",
    name: "Dr. Anusha Bhandari, DM Cardiology",
    designation: "Interventional Cardiologist",
    description:
      "Expert in angioplasty, pacemaker implantation, <br />and advanced cardiac procedures.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    availableUrl: "/",
    callUrl: "/",
    chatUrl: "/",
    btnText: "Book Appointment",
    btnUrl: "/appointments",
  },
  {
    imgUrl: "/images/departments/related_doctor_1.jpeg",
    name: "Dr. Amrit Khanal, MD, DM Cardiology",
    designation: "Cardiologist & Vascular Specialist",
    description:
      "Experienced in managing chest pain, <br />heart disease, and vascular complications.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    availableUrl: "/",
    callUrl: "/",
    chatUrl: "/",
    btnText: "Book Appointment",
    btnUrl: "/appointments",
  },
  {
    imgUrl: "/images/departments/related_doctor_1.jpeg",
    name: "Dr. Rita Adhikari, MD",
    designation: "Clinical Cardiologist",
    description:
      "Focused on preventive cardiology, <br />early diagnosis, and long-term cardiac care.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
    availableUrl: "/",
    callUrl: "/",
    chatUrl: "/",
    btnText: "Book Appointment",
    btnUrl: "/appointments",
  },
];

export default function DepartmentDetails() {
  const { id } = useParams();
  const department = departmentData.find((item) => String(item.id) === id);
  if (!department) {
    return (
      <div className="container py-5 text-center">Department not found.</div>
    );
  }

  const { title, description, service } = department;
  pageTitle("Department Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <section className="cs_shape_wrap">
          <div className="cs_shape_1 cs_position_5" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="cs_section_heading cs_style_1">
                  <h2 className="cs_section_title cs_fs_72 m-0">{title}</h2>
                  <div className="cs_height_54 cs_height_xl_30" />
                  <p className="m-0 ">{description}</p>
                  <div className="cs_height_20 cs_height_xl_20" />
                  <br />
                  {/* Services List */}
                  {service && service.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
                      {service.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="col-lg-7 offset-lg-1">
                <img
                  src="/images/departments/department_img_1.png"
                  alt="images"
                />
              </div>
            </div>
          </div>
        </section>
      </Section>

      <Section topMd={100} topLg={100} topXl={100}>
        <TeamSectionStyle3 sectionTitle="Related Doctor" data={doctorData} />
      </Section>

      {/* End Appointment Section */}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
