import React from "react";
import IconBoxStyle11 from "../../IconBox/IconBoxStyle11";
import Spacing from "../../Spacing";

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle="01-5912170, 01-5912270, 01-5912370, 01-5421316"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="info@heliosnepal.com,
appointment@heliosnepal.com"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle="Shaligram Village complex, Opposite staff College, Jawalakhel-4, Lalitpur"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113072.03046773234!2d85.22882525624733!3d27.670907830057224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb19bf036a2c13%3A0xd55e1ac1a34eebf4!2sShaligram%20Village%20complex%2C%20Opposite%20staff%20College%2C%20Lalitpur%2044600!3m2!1d27.6709322!2d85.31122669999999!5e0!3m2!1sen!2snp!4v1762931107464!5m2!1sen!2snp"
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  );
}
