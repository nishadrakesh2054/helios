import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import parse from 'html-react-parser';
import { pageTitle } from '../../helpers/PageTitle';


const timeTable = [
  {
    day: "Sunday",
    schedules: [
      { time: "7:30 AM - 9:00 AM", department: "Gynecology Department", doctor: "Dr. Sita Shrestha", roomNumber: "Room 201" },
      { time: "9:00 AM - 10:00 AM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "10:00 AM - 11:30 AM", department: "Cardiology Department", doctor: "Dr. Rajendra Karki", roomNumber: "Room 305" },
      { time: "11:30 AM - 1:00 PM", department: "Pediatric Department", doctor: "Dr. Bimala Gurung", roomNumber: "Room 101" },
      { time: "1:00 PM - 2:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "2:00 PM - 4:00 PM", department: "ENT Department", doctor: "Dr. Suman Adhikari", roomNumber: "Room 406" },
      { time: "4:00 PM - 6:00 PM", department: "Emergency Department", doctor: "Dr. Ramesh Thapa", roomNumber: "Emergency Room" },
    ],
  },
  {
    day: "Monday",
    schedules: [
      { time: "7:30 AM - 9:00 AM", department: "Dermatology Department", doctor: "Dr. Prerana Maharjan", roomNumber: "Room 210" },
      { time: "9:00 AM - 10:30 AM", department: "Orthopedics Department", doctor: "Dr. Anil Shrestha", roomNumber: "Room 305" },
      { time: "10:30 AM - 12:00 PM", department: "Internal Medicine Department", doctor: "Dr. Nirmal Bista", roomNumber: "Room 409" },
      { time: "12:00 PM - 1:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "1:00 PM - 3:00 PM", department: "Gastroenterology Department", doctor: "Dr. Milan Rana", roomNumber: "Room 503" },
      { time: "3:00 PM - 4:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "4:00 PM - 6:00 PM", department: "Emergency Department", doctor: "Dr. Ramesh Thapa", roomNumber: "Emergency Room" },
    ],
  },
  {
    day: "Tuesday",
    schedules: [
      { time: "7:30 AM - 9:00 AM", department: "Urology Department", doctor: "Dr. Deepak Shahi", roomNumber: "Room 203" },
      { time: "9:00 AM - 10:30 AM", department: "Ophthalmology Department", doctor: "Dr. Anjana Lama", roomNumber: "Room 502" },
      { time: "10:30 AM - 12:00 PM", department: "Oncology Department", doctor: "Dr. Binod Khadka", roomNumber: "Room 612" },
      { time: "12:00 PM - 1:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "1:00 PM - 3:00 PM", department: "Psychiatry Department", doctor: "Dr. Sunita Pokharel", roomNumber: "Room 710" },
      { time: "3:00 PM - 4:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "4:00 PM - 6:00 PM", department: "Emergency Department", doctor: "Dr. Ramesh Thapa", roomNumber: "Emergency Room" },
    ],
  },
  {
    day: "Wednesday",
    schedules: [
      { time: "7:30 AM - 9:00 AM", department: "Orthopedics Department", doctor: "Dr. Anil Shrestha", roomNumber: "Room 305" },
      { time: "9:00 AM - 10:30 AM", department: "Cardiology Department", doctor: "Dr. Rajendra Karki", roomNumber: "Room 304" },
      { time: "10:30 AM - 12:00 PM", department: "Pediatric Department", doctor: "Dr. Bimala Gurung", roomNumber: "Room 101" },
      { time: "12:00 PM - 1:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "1:00 PM - 3:00 PM", department: "Neurosurgery Department", doctor: "Dr. Krishna Manandhar", roomNumber: "Room 512" },
      { time: "3:00 PM - 4:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "4:00 PM - 6:00 PM", department: "Emergency Department", doctor: "Dr. Ramesh Thapa", roomNumber: "Emergency Room" },
    ],
  },
  {
    day: "Thursday",
    schedules: [
      { time: "7:30 AM - 9:00 AM", department: "Gynecology Department", doctor: "Dr. Sita Shrestha", roomNumber: "Room 201" },
      { time: "9:00 AM - 10:30 AM", department: "Dermatology Department", doctor: "Dr. Prerana Maharjan", roomNumber: "Room 210" },
      { time: "10:30 AM - 12:00 PM", department: "Pulmonology Department", doctor: "Dr. Niraj Pandey", roomNumber: "Room 405" },
      { time: "12:00 PM - 1:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "1:00 PM - 3:00 PM", department: "ENT Department", doctor: "Dr. Suman Adhikari", roomNumber: "Room 406" },
      { time: "3:00 PM - 4:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "4:00 PM - 6:00 PM", department: "Emergency Department", doctor: "Dr. Ramesh Thapa", roomNumber: "Emergency Room" },
    ],
  },
  {
    day: "Friday",
    schedules: [
      { time: "7:30 AM - 9:00 AM", department: "Internal Medicine Department", doctor: "Dr. Nirmal Bista", roomNumber: "Room 409" },
      { time: "9:00 AM - 10:30 AM", department: "Cardiology Department", doctor: "Dr. Rajendra Karki", roomNumber: "Room 304" },
      { time: "10:30 AM - 12:00 PM", department: "Orthopedics Department", doctor: "Dr. Anil Shrestha", roomNumber: "Room 305" },
      { time: "12:00 PM - 1:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "1:00 PM - 3:00 PM", department: "Nephrology Department", doctor: "Dr. Prakash Guragain", roomNumber: "Room 508" },
      { time: "3:00 PM - 4:00 PM", department: "Not Available", doctor: "-", roomNumber: "-" },
      { time: "4:00 PM - 6:00 PM", department: "Emergency Department", doctor: "Dr. Ramesh Thapa", roomNumber: "Emergency Room" },
    ],
  },
];


export default function Timetable() {
  pageTitle('Timetable');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/timetable/banner_bg.svg"
        imgUrl="/images/timetable/banner_img.png"
        title="Helios Hospital <br>Timetable"
        subTitle="Get to know the complete info of our <br>doctors’ schedule"
      />
      <Section
        topMd={170}
        topLg={170}
        topXl={170}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <div className="container">
          <div className="table-responsive-xl">
            <div className="cs_timetable">
              <div className="cs_timetable_vertical">
                <div>7:30 AM</div>
                <div>9:00 AM</div>
                <div>10:00 AM</div>
                <div>11:00 AM</div>
                <div>12:00 PM</div>
                <div>1:00 PM</div>
                <div>2:00 PM</div>
                <div>3:00 PM</div>
                <div>4:00 PM</div>
                <div>5:00 PM</div>
                <div>6:00 PM</div>
               
              </div>
              <div className="cs_timetable_in">
                {timeTable?.map((item, index) => (
                  <div key={index}>
                    <div className="cs_timetable_date cs_heading_color">
                      {item.day}
                    </div>
                    {item.schedules?.map((schedule, index) => (
                      <div className={`cs_hour_${schedule.hour}`} key={index}>
                        {(schedule.department || schedule.doctor) && (
                          <div className="cs_table_doctor">
                            <div>
                              {schedule.department && (
                                <p>{parse(schedule.department)}</p>
                              )}
                              {schedule.doctor && (
                                <p className="cs_medium cs_heading_color">
                                  {parse(schedule.doctor)}
                                </p>
                              )}
                            </div>
                            {schedule.roomNumber && (
                              <div>{schedule.roomNumber}</div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
