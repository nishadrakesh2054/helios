import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    // <form action="#" className="row">
    //   <div className="col-lg-6">
    //     <label className="cs_input_label cs_heading_color">Name</label>
    //     <input type="text" className="cs_form_field" placeholder="David John" />
    //     <div className="cs_height_42 cs_height_xl_25" />
    //   </div>
    //   <div className="col-lg-6">
    //     <label className="cs_input_label cs_heading_color">Phone Number</label>
    //     <input
    //       type="text"
    //       className="cs_form_field"
    //       placeholder="(123) 456 - 789"
    //     />
    //     <div className="cs_height_42 cs_height_xl_25" />
    //   </div>
      
    //   <div className="col-lg-6">
    //     <label className="cs_input_label cs_heading_color">
    //       Preferred Date
    //     </label>

    //     <div className="cs_with_icon_input">
    //       <DatePicker
    //         selected={selectedDate}
    //         onChange={date => setSelectedDate(date)}
    //         dateFormat="dd/MM/yyyy"
    //         minDate={new Date()}
    //         isClearable
    //         placeholderText="dd/mm/yyyy"
    //       />
    //       <i>
    //         <Icon icon="fa6-solid:calendar-days" />
    //       </i>
    //     </div>
    //     <div className="cs_height_42 cs_height_xl_25" />
    //   </div>
    //   <div className="col-lg-6">
    //     <label className="cs_input_label cs_heading_color">
    //       Preferred Time
    //     </label>
    //     <div className="cs_with_icon_input">
    //       <input
    //         type="time"
    //         className="cs_form_field cs_timepicker"
    //         placeholder="10:00AM"
    //       />
    //       <i>
    //         <Icon icon="fa6-regular:clock" />
    //       </i>
    //     </div>
    //     <div className="cs_height_42 cs_height_xl_25" />
    //   </div>
    //   <div className="col-lg-12">
    //     <label className="cs_input_label cs_heading_color">
    //       Reason for Visit
    //     </label>
    //     <div className="cs_radio_group">
    //       <div className="cs_radio_wrap">
    //         <input
    //           className="cs_radio_input"
    //           type="radio"
    //           name="reasonForVisit"
    //           id="routineCheckup"
    //           defaultValue="routineCheckup"
    //         />
    //         <label className="cs_radio_label" htmlFor="routineCheckup">
    //           Routine Checkup
    //         </label>
    //       </div>
    //       <div className="cs_radio_wrap">
    //         <input
    //           className="cs_radio_input"
    //           type="radio"
    //           name="reasonForVisit"
    //           id="newPatientVisit"
    //           defaultValue="newPatientVisit"
    //           defaultChecked=""
    //         />
    //         <label className="cs_radio_label" htmlFor="newPatientVisit">
    //           New Patient Visit
    //         </label>
    //       </div>
    //       <div className="cs_radio_wrap">
    //         <input
    //           className="cs_radio_input"
    //           type="radio"
    //           name="reasonForVisit"
    //           id="specificConcern"
    //           defaultValue="specificConcern"
    //         />
    //         <label className="cs_radio_label" htmlFor="specificConcern">
    //           Specific Concern
    //         </label>
    //       </div>
    //     </div>
    //     <div className="cs_height_42 cs_height_xl_25" />
    //   </div>
    
    //   <div className="col-lg-12">
    //     <button className="cs_btn cs_style_1">
    //       <span>Submit</span>
    //       <i>
    //         <img src="/images/icons/arrow_white.svg" alt="Icon" />
    //         <img src="/images/icons/arrow_white.svg" alt="Icon" />
    //       </i>
    //     </button>
    //   </div>
    // </form>
    <form action="#" className="row">
  {/* Name */}
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">Full Name</label>
    <input type="text" className="cs_form_field" placeholder="Rakesh Sahani" />
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Phone */}
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">Phone Number</label>
    <input type="text" className="cs_form_field" placeholder="(123) 456 - 789" />
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Age */}
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">Age</label>
    <input type="number" className="cs_form_field" placeholder="Enter your age" min="1" />
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Gender */}
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">Gender</label>
    <select className="cs_form_field ">
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Department */}
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">Department</label>
    <select className="cs_form_field">
      <option value="">Select Department</option>
      <option value="cardiology">Cardiology</option>
      <option value="general">General Medicine</option>
      <option value="pediatrics">Pediatrics</option>
      <option value="gynecology">Gynecology</option>
      <option value="orthopedics">Orthopedics</option>
      <option value="dermatology">Dermatology</option>
    </select>
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Doctor */}
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">Select Doctor</label>
    <select className="cs_form_field">
      <option value="">Choose Doctor</option>
      <option value="dr_sanjay_gurung">Dr. Sanjay Gurung (Cardiologist)</option>
      <option value="dr_anita_shrestha">Dr. Anita Shrestha (Gynecologist)</option>
      <option value="dr_prakash_adhikari">Dr. Prakash Adhikari (General Physician)</option>
      <option value="dr_reshma_karki">Dr. Reshma Karki (Pediatrician)</option>
      <option value="dr_krishna_rai">Dr. Krishna Rai (Orthopedic Specialist)</option>
      <option value="dr_sabina_tamang">Dr. Sabina Tamang (Dermatologist)</option>
    </select>
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Date */}
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">Preferred Date</label>
    <div className="cs_with_icon_input">
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        isClearable
        placeholderText="dd/mm/yyyy"
      />
      <i>
        <Icon icon="fa6-solid:calendar-days" />
      </i>
    </div>
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Time */}
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">Preferred Time</label>
    <div className="cs_with_icon_input">
      <input type="time" className="cs_form_field cs_timepicker" placeholder="10:00AM" />
      <i>
        <Icon icon="fa6-regular:clock" />
      </i>
    </div>
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Reason for Visit */}
  <div className="col-lg-12">
    <label className="cs_input_label cs_heading_color">Reason for Visit</label>
    <div className="cs_radio_group">
      <div className="cs_radio_wrap">
        <input className="cs_radio_input" type="radio" name="reasonForVisit" id="routineCheckup" defaultValue="routineCheckup" />
        <label className="cs_radio_label" htmlFor="routineCheckup">Routine Checkup</label>
      </div>
      <div className="cs_radio_wrap">
        <input className="cs_radio_input" type="radio" name="reasonForVisit" id="newPatientVisit" defaultValue="newPatientVisit" />
        <label className="cs_radio_label" htmlFor="newPatientVisit">New Patient Visit</label>
      </div>
      <div className="cs_radio_wrap">
        <input className="cs_radio_input" type="radio" name="reasonForVisit" id="specificConcern" defaultValue="specificConcern" />
        <label className="cs_radio_label" htmlFor="specificConcern">Specific Concern</label>
      </div>
    </div>
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  {/* Submit */}
  <div className="col-lg-12">
    <button className="cs_btn cs_style_1">
      <span>Submit</span>
      <i>
        <img src="/images/icons/arrow_white.svg" alt="Icon" />
        <img src="/images/icons/arrow_white.svg" alt="Icon" />
      </i>
    </button>
  </div>
</form>

  );
}
