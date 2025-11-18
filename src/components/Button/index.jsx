import React from "react";
import { Link } from "react-router-dom";

export default function Button({ btnUrl, btnText, variant }) {
  const arrowIcon = `${
    process.env.PUBLIC_URL || ""
  }/images/icons/arrow_white.svg`;

  return (
    <Link to={btnUrl} className={`cs_btn cs_style_1 ${variant}`}>
      <span>{btnText}</span>
      <i>
        <img src={arrowIcon} alt="Icon" />
        <img src={arrowIcon} alt="Icon" />
      </i>
    </Link>
  );
}
