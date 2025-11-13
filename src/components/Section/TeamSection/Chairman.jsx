import React from "react";

const teamData = {
  imgUrl: "/images/doctors/doctor_1.png",
  name: "Dr. Mimi Giri",
  role: "Chairperson",
};

export default function Chairman() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Left: Image */}
          <div className="col-lg-5 text-center">
            <div className="position-relative">
              <img
                src={teamData.imgUrl}
                alt={teamData.name}
                className="img-fluid "
              />
              <div className="mt-3">
                <h4 className="mb-1">{teamData.name}</h4>
                <p className="text-muted mb-0">{teamData.role}</p>
              </div>
            </div>
          </div>

          {/* Right: Message */}
          <div className="col-lg-7">
            <h2 className="cs_iconbox_title cs_fs_32">Chairperson’s Message</h2>
            <p className="text-muted">
              Dear Friends,
              <br />
              <br />
              It is our immense pleasure to announce the opening of Helios
              Hospital located in Jawalakhel, Lalitpur.
              <br />
              <br />
              Our priority at Helios is to ensure that all health care
              requirement of every individual is met & to that end, we have
              combined an advanced patient-centric infrastructure setup with
              cutting-edge technology.
              <br />
              <br />
              Our institution has been envisioned with the aim of providing the
              highest standards of medical care based on evidence-based medicine
              and good clinical practice guidelines by putting together a team
              of carefully chosen clinical experts in their fields, thereby
              creating a centre of excellence. Our dedicated team of staff at
              all levels is there to create a professional yet friendly
              environment and will be with you at every step of the way to
              achieve a solution to all your health problems. We hope that the
              bar set for you can be matched & raised at every level. Help us to
              serve you better.
              <br />
              <br />
              <br />
              <em>
                “We are what we repeatedly do; Excellence, then, is not an act
                but a habit.”
              </em>{" "}
              – <strong>ARISTOTLE</strong>
              <br />
              <br />
              <strong>Cheers!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
