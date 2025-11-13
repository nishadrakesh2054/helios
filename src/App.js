import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";

import About from "./components/Pages/About";
import Doctors from "./components/Pages/Doctors";
import Blog from "./components/Pages/Blog";
import Appointments from "./components/Pages/Appointments";
import Departments from "./components/Pages/Departments";
import DepartmentDetails from "./components/Pages/DepartmentDetails";
import BlogDetails from "./components/Pages/BlogDetails";
import DoctorDetails from "./components/Pages/DoctorDetails";
import PricingPlan from "./components/Pages/PricingPlan";
import Gallery from "./components/Pages/Gallery";
import Timetable from "./components/Pages/Timetable";
import Contact from "./components/Pages/Contact";
import { useEffect } from "react";
import ErrorPage from "./components/Pages/ErrorPage";
import Service from "./components/Pages/Service";
import ServiceDetails from "./components/Pages/ServiceDetails";
import Directors from "./components/Pages/Directors";
import Awearenes from "./components/Pages/Awareness";
import Radiant from "./components/Pages/Radiant";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="directors" element={<Directors />} />
        <Route path="radiant-card" element={<Radiant />} />
        <Route path="awareness" element={<Awearenes />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:doctorId" element={<DoctorDetails />} />
        <Route path="departments" element={<Departments />} />
        <Route path="departments/:id" element={<DepartmentDetails />} />
        <Route path="service" element={<Service />} />
        <Route path="service/:id" element={<ServiceDetails />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogDetails />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="pricing-plan" element={<PricingPlan />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
