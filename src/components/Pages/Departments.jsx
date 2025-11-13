import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
// import DepartmentSectionStyle3 from "../Section/DepartmentSection/DepartmentSectionStyle3";
import BannerSectionStyle6 from "../Section/BannerSection/BannerSectionStyle6";
import { pageTitle } from "../../helpers/PageTitle";
import IconBoxStyle7 from "../../components/IconBox/IconBoxStyle7";
import { Link } from "react-router-dom";

export const departmentData = [
  {
    id: 1,
    iconUrl: "images/departments/icon_1.svg",
    title: "Department of Cardiology",
    subTitle: "Comprehensive Heart Care",
    description:
      "Our Cardiology Department provides expert diagnosis, treatment, and prevention of heart-related conditions. Our skilled cardiologists specialize in managing hypertension, arrhythmias and heart failure, utilizing advanced diagnostic tools like ECG, echocardiography, Holter study, ABPM study and cardiac stress tests.",

    service: [
      "Preventive cardiology & heart health screenings",
      "ECG, echocardiography & stress testing",
      "Angioplasty & stent placement",
      "Heart failure management",
    ],
  },
  {
    id: 2,
    iconUrl: "images/departments/icon_1.svg",
    title: "Department of Gynecology",
    subTitle: "Women’s Health, Expert Care",
    description:
      "Our Gynecology Department offers personalized care for women at every stage of life. From routine check-ups to advanced gynecological procedures, we provide compassionate, expert care in reproductive health, pregnancy, menopause and gyne-oncological management.",

    service: [
      "Routine gynecological exams & screenings",
      "Prenatal & postnatal care",
      "PCOS, infertility & menopause management",
      "Minimally invasive gynecological surgeries",
      "Gyne-oncological surgeries",
    ],
  },

  {
    id: 3,
    iconUrl: "images/departments/icon_1.svg",
    title: "Department of Internal Medicine & Endocrinology",
    subTitle: "Holistic Health & Metabolic Care",
    description:
      "Our Internal Medicine & Endocrinology Department focuses on comprehensive management of adult diseases, including diabetes, thyroid disorders and hypertension. Our expert team ensures early detection and personalized treatment plans for both acute and chronic conditions.",

    service: [
      "Diabetes & thyroid disorder management",
      "Hypertension & cholesterol management",
      "Hormonal imbalance treatment",
      "Preventive health screenings",
    ],
  },
  {
    id: 4,
    iconUrl: "images/departments/icon_2.svg",
    title: "Department of Nephrology",
    subTitle: "Advanced Kidney Care",
    description:
      "Our Nephrology Department offers specialized care for kidney-related disorders, including acute and chronic kidney disease, dialysis, electrolyte imbalances and resistant hypertension. We emphasize early diagnosis and comprehensive treatment to improve kidney function.",

    service: [
      "Acute & chronic kidney disease management",
      "Dialysis services (hemodialysis & peritoneal dialysis)",
      "Kidney transplant evaluation & post-care",
      "Hypertension-related kidney disorders",
      "Dyselectrolytemia management",
    ],
  },
  {
    id: 5,
    iconUrl: "images/departments/icon_3.svg",
    title: "Department of Oncology",
    subTitle: "Expert Cancer Care & Treatment",
    description:
      "Our Oncology Department provides comprehensive cancer care through early detection, advanced chemotherapy, immunotherapy and targeted therapy. Our team emphasizes personalized treatment and supportive care for patients and families.",

    service: [
      "Cancer screening & early detection",
      "Chemotherapy, immunotherapy & targeted therapy",
      "Palliative & supportive care",
    ],
  },
  {
    id: 6,
    iconUrl: "images/departments/icon_4.svg",
    title: "Department of Ophthalmology",
    subTitle: "Vision Care for All Ages",
    description:
      "Our Ophthalmology Department specializes in diagnosing and treating a wide range of eye conditions. We offer both medical and surgical solutions to ensure optimal vision and eye health for all age groups.",

    service: [
      "Comprehensive eye check-ups",
      "Cataract & ocular surgeries",
      "Glaucoma screening & management",
      "Pediatric & geriatric eye care",
      "Corneal care",
      "Oculoplasty",
    ],
  },
  {
    id: 7,
    iconUrl: "images/departments/icon_5.svg",
    title: "Department of Neuropsychiatry",
    subTitle: "Mental Health & Neurological Well-being",
    description:
      "Our Neuropsychiatry Department addresses mental health challenges such as stress, depression, and anxiety, alongside neurological conditions like epilepsy and migraines. We focus on holistic care to improve emotional and cognitive wellness.",

    service: [
      "Depression, anxiety & stress management",
      "Epilepsy & migraine treatment",
      "Cognitive & memory disorder care",
      "Sleep disorder evaluation & treatment",
    ],
  },
  {
    id: 8,
    iconUrl: "images/departments/icon_6.svg",
    title: "Department of Radiology",
    subTitle: "Advanced Imaging & Diagnostics",
    description:
      "Our Radiology Department provides state-of-the-art imaging services to support accurate diagnoses and effective treatment planning across various medical fields.",

    service: [
      "X-ray, ultrasound (including Elastoscan) & CT scan",
      "MRI (via partner facilities)",
      "Mammography & cancer screening (via partner facilities)",
      "Interventional radiology procedures (FNAC, biopsy, drainage)",
    ],
  },
  {
    id: 9,
    iconUrl: "images/departments/icon_7.svg",
    title: "Department of Orthopedics",
    subTitle: "Comprehensive Bone & Joint Care",
    description:
      "Our Orthopedics Department provides advanced treatment for musculoskeletal conditions, including fractures, arthritis, sports injuries, joint replacement surgeries, spine surgery and hand surgery.",

    service: [
      "Fracture & trauma care",
      "Joint replacement surgery (knee, hip, shoulder)",
      "Sports injury treatment & rehabilitation",
      "Osteoporosis & arthritis management",
      "Complete spine care",
    ],
  },
  {
    id: 10,
    iconUrl: "images/departments/icon_8.svg",
    title: "Department of Urology",
    subTitle: "Expert Care for Urinary & Reproductive Health",
    description:
      "Our Urology Department specializes in diagnosing and treating urinary tract disorders, kidney stones, prostate conditions, and male reproductive health concerns.",

    service: [
      "Kidney stones (Endo-urological, Laser Surgery)",
      "Urological cancers (Kidney, Prostate, Bladder, Testicular, Penile) management",
      "Urinary Tract Infections (UTI) evaluation & management",
      "Male infertility & sexual health consultation",
    ],
  },
  {
    id: 11,
    iconUrl: "images/departments/icon_9.svg",
    title: "Department of Pulmonology",
    subTitle: "A Wide Range of Respiratory Care",
    description:
      "Our Pulmonology Department offers advanced diagnosis, treatment, and management for a wide range of respiratory conditions. We are committed to helping patients breathe better and live healthier lives.",

    service: [
      "Asthma & COPD management",
      "Bronchiectasis & DPLD care",
      "Chronic cough, hemoptysis & allergy evaluation and treatment",
      "Sleep apnea & snoring assessment and management",
      "Pneumonia, lung infections & tuberculosis care",
      "Interventional pulmonology services",
    ],
  },
  {
    id: 12,
    iconUrl: "images/departments/icon_10.svg",
    title: "Department of ENT (Ear, Nose & Throat)",
    subTitle: "Comprehensive ENT & Head-Neck Solutions",
    description:
      "Our ENT Department provides specialized care for conditions affecting the ear, nose, throat, and head-neck region. With expertise in both routine ENT problems and complex surgical interventions, we serve patients of all age groups.",

    service: [
      "Sinusitis & allergy management",
      "Hearing loss evaluation & ear infections",
      "Tonsil, adenoid & nasal surgeries",
      "Voice, speech & swallowing disorders",
      "Head & neck cancer diagnosis & surgical management (in collaboration with Oncology Unit)",
    ],
  },
  {
    id: 13,
    iconUrl: "images/departments/icon_11.svg",
    title: "Department of Laboratory & Diagnostics",
    subTitle: "Accurate, Reliable & Timely Diagnostics",
    description:
      "Our Laboratory & Diagnostics Department is equipped with advanced technology to deliver precise and timely results, aiding in effective diagnosis and treatment. We maintain the highest standards in quality and accuracy across all pathology, biochemistry, microbiology, and imaging services.",

    service: [
      "Comprehensive blood & urine tests",
      "Hormonal & metabolic profiling",
      "Infection screening & culture tests",
      "Histopathology & cytopathology",
      "Specialized cancer markers & cardiac panels",
    ],
  },
];

export default function Departments() {
  pageTitle("Departments");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl="/images/departments/banner_img.png"
        title="Get to Know <br>Helios  Departments"
        subTitle="At Helios , Our exceptional and experienced staff is dedicated to improving our patients’ health."
      />

      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <div className="container cs_mt_minus_110">
          <div className="row justify-content-end">
            {departmentData?.map((item, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <Link
                  to={`/departments/${item.id}`}
                  className="text-decoration-none"
                >
                  <IconBoxStyle7 {...item} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl="/images/departments/banner_img_2.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section>
    </>
  );
}
