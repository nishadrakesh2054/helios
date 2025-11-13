import React from "react";
import Spacing from "../../Spacing";
import DirectorStyle from "../../Team/DirectorStyle";
import SectionHeading from "../../SectionHeading";

export default function Director({ data, sectionTitle, sectionTitleUp }) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />
      <div className="cs_team_grid cs_grid_view_wrap">
        {data?.map((item, index) => (
          <DirectorStyle {...item} key={index} />
        ))}
      </div>
      <Spacing md="90" />
    </div>
  );
}
