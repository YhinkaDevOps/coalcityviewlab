"use client";
import Link from "next/link";
import labimage from "../../public/assets/lab-4.jpg";
import labimagetwo from "../../public/assets/lab-2.jpg";
import labimagethree from "../../public/assets/pathalogy-laboratory.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className="bg-text mt-24">
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="min-h-[510px]">
            <div className="flex md:flex-row flex-col pt-80 md:pt-12 gap-10 md:px-10">
              <div className="basis-1/2 flex flex-col space-y-6 md:space-y-5 text-black">
                <h4 className="text-3xl md:text-5xl text-black text-start">
                  Embrace the Ease of Home-Based Diagnostic Solutions
                </h4>

                <p className="text-start nav-text">
                  Enjoy the comfort and privacy of your home while receiving the
                  same high-quality care and precision you expect from our
                  laboratory. Experience the ease of access to essential
                  healthcare services, tailored to fit seamlessly into your
                  lifestyle
                </p>

                <div className="flex justify-center md:justify-start items-start">
                  <Link href="/contact-us">
                    <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-16 py-5">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
              <div className="basis-1/2 hidden md:block">
                <Image
                  src={labimage}
                  width={500}
                  height={10}
                  alt="lab-image"
                  className="rounded-lg "
                />
              </div>

              <div className="md:hidden">
                <img
                  src="/assets/lab-1.jpg"
                  alt="hero-image"
                  className="card-image rounded-3xl p-2"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="min-h-[510px]">
            <div className="flex md:flex-row flex-col pt-80 md:pt-12 gap-10  md:px-10">
              <div className="basis-1/2 flex flex-col space-y-6 md:space-y-5 text-black">
                <h4 className="text-3xl md:text-5xl text-black text-start">
                  Your Comprehensive Destination for All Pathology Tests
                </h4>

                <p className="text-start nav-text">
                  We offer a wide range of diagnostic services, ensuring
                  accurate and timely results. Trust our expert team for
                  reliable testing solutions, all in one convenient location
                </p>

                <div className="flex justify-center md:justify-start items-start">
                  <Link href="/contact-us">
                    <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-16 py-5">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
              <div className="basis-1/2 hidden md:block">
                <Image
                  src={labimagetwo}
                  width={500}
                  height={10}
                  alt="lab-image"
                  className="rounded-lg "
                />
              </div>

              <div className="md:hidden">
                <img
                  src="/assets/lab-2.jpg"
                  alt="hero-image"
                  className="card-image rounded-3xl p-2"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="min-h-[500px]">
            <div className="flex md:flex-row flex-col pt-80 md:pt-12 gap-10  md:px-10">
              <div className="basis-1/2 flex flex-col space-y-6 md:space-y-5 text-black">
                <h4 className="text-3xl md:text-5xl text-black text-start">
                  Discover the future of medical diagnostics with our
                  state-of-the-art laboratory
                </h4>

                <p className="text-start nav-text">
                  We combine cutting-edge technology with expert care to provide
                  precise and reliable test results. Experience unparalleled
                  accuracy and efficiency in a modern, patient-focused
                  environment.
                </p>

                <div className="flex justify-center md:justify-start items-start">
                  <Link href="/about">
                    <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-16 py-5">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="basis-1/2 hidden md:block">
                <Image
                  src={labimagethree}
                  width={500}
                  height={10}
                  alt="lab-image"
                  className="rounded-lg "
                />
              </div>

              <div className="md:hidden">
                <img
                  src="/assets/pathalogy-laboratory.jpg"
                  alt="hero-image"
                  className="card-image rounded-3xl p-2"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
