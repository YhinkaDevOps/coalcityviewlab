"use client";
import React from "react";
import Image from "next/image";
import galleryimage from "../../public/assets/coalcity.png";



const Gallery = () => {

  return (
    <div className="w-full min-h-[250px] py-16 bg-[#313131] [#f4f5f7] text-black">
      <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row my-5 px-4 gap-10">
        <div className="text-white flex flex-col gap-6 basis-1/2">
          <h1 className="font-bold text-4xl">
            Welcome to Healthview Medical Laboratory
          </h1>
          <p className=" font-semibold">
            Coal City View Medical Laboratory is a rapidly expanding local
            company specializing in medical diagnostic services in Nigeria. We
            deliver a comprehensive range of laboratory services to patients in
            a comfortable outpatient environment
          </p>

          <p className=" font-semibold">
            Our state-of-the-art facilities and cutting-edge technology ensure
            accurate and timely results, all within a comfortable and welcoming
            outpatient setting. At Coal City View, patient care is our top
            priority, and we strive to deliver exceptional service with a focus
            on precision, reliability, and convenience.
          </p>

          <p className=" font-semibold">
            Our team of highly skilled professionals is dedicated to maintaining
            the highest standards of excellence in every aspect of our
            operations, from routine tests to specialized diagnostics. Whether
            you require blood work, imaging, or other diagnostic services, Coal
            City View Medical Laboratory is here to provide you with the best
            possible care.
          </p>
        </div>

        <div className="text-center basis-1/2">
          <Image
            src={galleryimage}
            width={450}
            height={10}
            alt="lab-image"
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
