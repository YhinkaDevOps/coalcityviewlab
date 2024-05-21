import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" min-h-[200px] footer-bg text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 ">
        <div>
          <span className="hover:opacity-70 flex flex-col gap-2 md:gap-5 items-start flex-shrink-0">
            <img
              src="/assets/microscope.jpeg"
              className="h-[65px]"
              alt="footer_logo"
            />

            <span className="font-bold text-sm">
              Coal City View <br />
              Medical Laboratory
            </span>
            <span className="text-sm">+234-80336-57445</span>
            <span className=" text-sm">coalcityview@gmail.com</span>
            <span className="text-sm">
              95/129 Okota Road, Atinuke Complex, Lagos
            </span>
          </span>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-2">
          <h3 className="font-bold">Experience</h3>

          {/* <span className="text-sm">
            https://chimkasimmatransportservices.vercel.app/
          </span> */}
          <Link href="/pathology-servives">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Pathology Services
            </button>
          </Link>

          <Link href="/customer-services">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Customer Services
            </button>
          </Link>

          <Link href="/screening-tests">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Screening Tests
            </button>
          </Link>
        </div>

        {/* Useful links */}
        <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">About</h1>
          <p>
            Coal City View Medical Laboratory is a state-of-the-art,
            technologically advanced, and independent pathology laboratory based
            in Lagos State, Nigeria. Established to offer a wide range of
            medical laboratory, consultative, and referral services, we provide
            the most comprehensive array of tests available in Nigeria today,
            encompassing routine, specialized, and advanced tests for clinical,
            research, and screening purposes. 
          </p>

          {/* <Link href="#">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Privacy policy
            </button>
          </Link> */}
        </div>

        {/* Social Links */}
        {/* <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">Connect With Us</h1>
          <div className="flex flex-row gap-3">
            <button className="hover:opacity-70">
              <Link href="https://web.facebook.com/p/Lamb-of-God-Motors-100063705652143/?_rdc=1&_rdr">
                <FaFacebook size={20} />
              </Link>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
