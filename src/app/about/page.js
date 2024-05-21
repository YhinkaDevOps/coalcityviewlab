"use client";
import React from "react";
import Link from "next/link";
import about from "../../../public/assets/info.gif";
import mission from "../../../public/assets/mission.gif";
import vision from "../../../public/assets/vision.gif";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-svh pt-[79px] ">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[130px] flex flex-col gap-7 ">
        <h6 className="text-end text-5xl font-semibold px-2">ABOUT US</h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">About Us</span>
        </span>
      </div>

      <div className="text-[#000000] md:px-0 mx-auto max-w-[1080px] pt-16 pb-10 flex flex-col gap-4 px-4">
        <div className="about-box rounded-md py-7 px-8 flex flex-col md:flex-row gap-10">
          <div className="hidden md:block">
            <Image src={about} width={200} height={50} alt="mission" />
          </div>
          <div className="block md:hidden">
            <Image src={about} width={80} height={50} alt="mission" />
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg">ABOUT US</h4>

            <p>
              Coal City View Medical Laboratory is a state-of-the-art,
              technologically advanced, and independent pathology laboratory
              based in Lagos State, Nigeria. Established to offer a wide range
              of medical laboratory, consultative, and referral services, we
              provide the most comprehensive array of tests available in Nigeria
              today, encompassing routine, specialized, and advanced tests for
              clinical, research, and screening purposes. With a strong market
              presence and a reputation as a household name in the healthcare
              industry, Coal City View Medical Laboratory is the preferred
              partner for many due to our unmatched service quality. We achieve
              this by operating with integrity, efficiency, and effectiveness,
              allowing us to offer these services at competitive rates.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1080px] flex flex-col md:flex-row gap-10 mb-10 px-4 md:px-0">
        <div className="about-box rounded-md py-7 px-8 basis-1/2 flex flex-col md:flex-row gap-10">
          <div className="hidden md:block">
            <Image src={mission} width={350} height={50} alt="mission" />
          </div>
          <div className="block md:hidden">
            <Image src={mission} width={80} height={50} alt="mission" />
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg">Our Mission</h4>

            <p className="text-sm">
              To become the foremost authority in local medical diagnostics in
              Nigeria, providing the highest standards of pathology and
              biomedical services to patients and healthcare communities
              throughout the continent.
            </p>
          </div>
        </div>

        <div className="about-box rounded-md py-7 px-8 basis-1/2 flex flex-col md:flex-row gap-10">
          <div className="hidden md:block">
            <Image src={vision} width={350} height={50} alt="mission" />
          </div>
          <div className="block md:hidden">
            <Image src={vision} width={80} height={50} alt="mission" />
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-lg">Our Vision</h4>

            <p className="text-sm">
              Our goal is to become the most reliable and renowned laboratory
              worldwide, known for delivering professional laboratory services
              and precise results. We aim to significantly enhance the overall
              healthcare of our community and country by utilizing the best
              available resources
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#084274] py-16 abd px-4 md:px-0">
        <h5 className="text-white font-bold text-4xl text-center mb-10">
          OUR CORE VALUES
        </h5>
        <div className="text-white mx-auto max-w-[1080px] flex flex-col md:flex-row gap-10">
          <div className=" core-values basis-1/2 p-5 flex flex-col gap-5 ">
            <h4 className="text-center font-bold">RESPECT</h4>
            <p className="font-bold">
              We are dedicated to fostering an environment of kindness and
              respect in all our interactions. We believe in nurturing positive
              relationships with our teams, partners, healthcare professionals,
              and the patients we serve daily. Our commitment to compassion and
              mutual respect is at the heart of everything we do, ensuring that
              every individual we work with feels valued and appreciated. This
              approach not only enhances collaboration and teamwork but also
              reinforces our dedication to providing exceptional care and
              service
            </p>
          </div>
          <div className="core-values basis-1/2 p-5 flex flex-col gap-5">
            <h4 className="text-center font-bold">COMMITMENT</h4>
            <p className="font-bold">
              We are dedicated to serving our patients, healthcare
              professionals, and business and institutional partners by
              delivering precise and valuable diagnostic results. Our commitment
              extends to maintaining strict confidentiality, ensuring that all
              information is handled with the utmost care and privacy. By
              providing reliable and actionable insights, we strive to enhance
              health outcomes and support the well-being of everyone involved.
              Through our unwavering focus on accuracy and trust, we aim to make
              a positive impact on the overall healthcare landscape.
            </p>
          </div>
          <div className="core-values basis-1/2 p-5 flex flex-col gap-5">
            <h4 className="text-center font-bold">EXCELLENCE</h4>
            <p className="font-bold">
              We are dedicated to continuously enhancing the quality of our
              services through rigorous efforts, investing in the growth and
              development of our team members to harness their full potential.
              Our commitment extends to nurturing both men and women within our
              organization, ensuring that each individual excels in their
              respective roles, ultimately benefiting our collective mission to
              serve our community with excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
