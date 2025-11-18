import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import NoticePopup from "../NoticePopup";
import TidioChatbot from "../TidioChatbot";

export default function Layout() {
  return (
    <>
      <NoticePopup />
      <TidioChatbot />
      <Header logoSrc="/images/helios_logo.png" variant="cs_heading_color" />
      <Outlet />
      <Footer />
    </>
  );
}
