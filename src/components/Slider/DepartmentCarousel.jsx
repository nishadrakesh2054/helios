import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function DepartmentCarousel({ data }) {
  // Check if we have enough items for infinite scroll
  const itemCount = data?.length || 0;
  const canInfinite = itemCount > 5;

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "cs_slider_prev cs_center" +
        (currentSlide === 0 && !canInfinite ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 && !canInfinite ? true : false}
    >
      <img src="/images/contact/left_arrow_blue.svg" alt="Icon" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "cs_slider_next cs_center" +
        (currentSlide === slideCount - 1 && !canInfinite
          ? " slick-disabled"
          : "")
      }
      aria-hidden="true"
      aria-disabled={
        currentSlide === slideCount - 1 && !canInfinite ? true : false
      }
    >
      <img src="/images/contact/right_arrow_blue.svg" alt="Icon" />
    </div>
  );
  const settings = {
    dots: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: canInfinite,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: itemCount > 5,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: Math.min(5, itemCount),
          infinite: itemCount > 5,
          arrows: itemCount > 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(4, itemCount),
          infinite: itemCount > 4,
          arrows: itemCount > 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: Math.min(3, itemCount),
          infinite: itemCount > 3,
          arrows: itemCount > 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, itemCount),
          infinite: itemCount > 2,
          arrows: itemCount > 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          infinite: itemCount > 1,
          arrows: itemCount > 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="cs_gap_20 cs_cs_slider_navigation_1 cs_department_carousel"
      >
        {data?.map((item, index) => (
          <div key={item.id || index}>
            <Link
              to={`/departments/${item.id}`}
              className="cs_department cs_shadow_1 cs_radius_20 cs_white_bg"
            >
              <>
                <img src={item.iconUrl} alt="Icon" />
                <p className="cs_department_title cs_medium cs_heading_color cs_fs_20 mb-0">
                  {item.title}
                </p>
              </>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
}
