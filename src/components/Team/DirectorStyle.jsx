export default function DirectorStyle({ imgUrl, role, name, designation }) {
  return (
    <div className="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden">
      <div className="cs_member_img">
        <img src={imgUrl} alt="Doctor" />

        <div className="cs_label cs_white_color cs_accent_bg text-uppercase">
          {role}
        </div>
      </div>
      <div className="cs_team_meta cs_white_bg">
        <h3 className="cs_member_name cs_fs_20 ">{name}</h3>
      </div>
    </div>
  );
}
