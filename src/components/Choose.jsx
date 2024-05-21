import React from "react";
import Image from "next/image";

const Choose = () => {
  return (
    <div className="w-full min-h-[250px] py-12 bg-[#f4f5f7] text-black">
      <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row my-5 px-4 gap-10">
        <div>
          <h4 className="font-bold text-2xl text-[#444444] text-end">
            WHY CHOOSE
          </h4>
          <h2 className="text-[#e67817] text-3xl font-bold text-end">
            <span className="text-[#27a5a9]">COALCITY </span>VIEW <br />
            MEDICAL LABORATORY
          </h2>
        </div>

        <div className="basis-[45%] flex flex-col gap-3">
          <p className="text-[#ff0000] text-xl font-bold">
            What Makes Us Different
          </p>
          <p>
            Our use of advanced diagnostic technology, combined with a team of
            highly trained professionals, ensures precise and reliable results.
            We offer a seamless and comfortable patient experience, with
            personalized services tailored to meet individual needs. Our
            dedication to excellence and continuous improvement sets us apart as
            a leader in the medical diagnostic industry in Nigeria.
          </p>
        </div>

        <div className="text-center">
          <Image
            className="choose-image hidden md:block"
            src="/assets/coalcity.png" // Path to the image in the `public` directory
            alt="about-bg"
            width={300}
            height={400}
          />

          <Image
            className="choose-image md:hidden"
            src="/assets/coalcity.png" // Path to the image in the `public` directory
            alt="about-bg"
            width={380}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
