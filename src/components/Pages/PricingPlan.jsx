import React from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';
import Section from '../Section';
import PricingSection from '../Section/PricingSection';
import FaqSectionStyle4 from '../Section/FaqSection/FaqSectionStyle4';
import BannerSectionStyle10 from '../Section/BannerSection/BannerSectionStyle10';
const pricingData = [
  {
    title: 'Family Health Plan',
    subTitle:
      'Comprehensive care for the entire family. Includes preventive check-ups, vaccinations, and priority access to specialists.',
    price: 'Rs . 249',
    period: '/month',
    featureList: [
      'Whole Family Coverage',
      'Routine Vaccinations',
      '24/7 Medical Advice',
      'Annual Health Screening',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Wellness Plan',
    subTitle:
      'Tailored wellness and preventive care. Unlimited consultations, health assessments, and wellness workshops for a healthier lifestyle.',
    price: 'Rs . 99',
    period: '/month',
    featureList: [
      'Unlimited Check-ups',
      'Discounts on Treatments',
      'Annual Health Assessment',
      'Priority Scheduling',
      'Wellness Workshops',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: true,
  },
  {
    title: 'Senior Wellness Plan',
    subTitle:
      'Focused healthcare for seniors, including geriatric assessments, fall prevention, and medication management.',
    price: 'Rs . 149',
    period: '/month',
    featureList: [
      'Geriatric Assessments',
      'Fall Prevention Programs',
      'Medication Discounts',
      'Priority Consultations',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Dental Health Plan',
    subTitle:
      'Comprehensive dental care including routine check-ups, cleanings, emergency coverage, and special procedure discounts.',
    price: 'Rs . 79',
    period: '/month',
    featureList: [
      'Dental Check-ups & Cleanings',
      'Procedure Discounts',
      'Emergency Coverage',
      'Oral Health Advice',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: `Women's Health Plan`,
    subTitle:
      'Specialized care for women at every stage of life, including gynecological, prenatal, and postnatal support.',
    price: 'Rs . 169',
    period: '/month',
    featureList: [
      'Gynecological Care',
      'Family Planning Support',
      'Prenatal & Postnatal Care',
      'Routine Screenings',
      'Hormonal Health Management',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Sports & Fitness Plan',
    subTitle:
      'Optimized care for athletes and active individuals. Includes injury assessment, physiotherapy, and personalized fitness guidance.',
    price: 'Rs . 119',
    period: '/month',
    featureList: [
      'Sports Injury Assessments',
      'Physiotherapy Sessions',
      'Sports Medicine Experts',
      'Fitness & Performance Guidance',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
];

const faqData = [
  {
    title: 'What services does Helios offer?',
    content:
      'Helios provides comprehensive healthcare services including general medicine, cardiology, orthopedics, neurology, radiology, oncology, gynecology, nephrology, pulmonology, ophthalmology, ENT, urology, and laboratory & diagnostic services.',
  },
  {
    title: 'How do I schedule an appointment with Helios?',
    content:
      'You can schedule an appointment by visiting our website, using our patient portal, or calling our reception. Appointments can also be booked through our mobile app for convenience.',
  },
  {
    title: 'Do you accept insurance?',
    content:
      'Yes, Helios accepts a wide range of insurance providers. Please check with our reception or website for the full list of accepted insurance plans and coverage details.',
  },
  {
    title: 'What should I bring to my appointment?',
    content:
      'Please bring a valid ID, any previous medical records, test results, a list of current medications, and your insurance information (if applicable).',
  },
  {
    title: 'How do I request a prescription refill?',
    content:
      'Prescription refills can be requested through our patient portal, by calling the pharmacy, or during a follow-up appointment with your doctor.',
  },
];

export default function PricingPlan() {
  pageTitle('Pricing Plan');
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/pricing_plan/banner_bg.svg"
        imgUrl="/images/pricing_plan/banner_img.png"
        title="Find the Right Plan <br>for You"
        subTitle="Explore Our Membership Options and Start Your Journey to Better Health"
        btnText="Get Starter"
        btnUrl="/contact"
      />
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <PricingSection
          sectionTitle="Choose Your Helios <br />Membership Plan"
          data={pricingData}
        />
      </Section>
      <Section
        topMd={185}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        className="cs_gray_bg_1"
      >
        <FaqSectionStyle4
          sectionTitle="Frequently Asked <br />Questions"
          data={faqData}
          faqImgUrl="/images/home_4/faq_img.jpeg"
          spiningImgUrl="/images/home_1/about_mini.svg"
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        className="cs_footer_margin_0"
      >
        <BannerSectionStyle10
          imgUrl="/images/pricing_plan/banner_img_2.png"
          title="Choose Your Plan and Invest in Your Health Today!"
        />
      </Section>
    </>
  );
}
