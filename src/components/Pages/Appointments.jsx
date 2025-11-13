import React from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import AppointmentWithContactInfoSection from '../Section/AppointmentWithContactInfoSection';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';

export default function Appointments() {
  pageTitle('Appointments');
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/appointments/banner_bg.svg"
        imgUrl="/images/appointments/banner_img.png"
        title="Your Health, Our Priority"
        subTitle="Book your appointment with our trusted doctors and take the first step towards better health and well-being."
      />
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AppointmentWithContactInfoSection />
      </Section>
    </>
  );
}
