"use client";
import Link from "next/link";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="w-full md:min-h-[350px] md:py-10  text-black relative">
      <div className="hidden md:block absolute bottom-0">
        <Image
          className="choose-image"
          src="/assets/lab-icon.png" // Path to the image in the `public` directory
          alt="about-bg"
          width={200}
          height={400}
        />
      </div>
      <div className="text-center flex flex-col gap-4 mb-10">
        <p className="mt-3 font-bold text-[#5eed2f]">BE SURE TO</p>
        <p className="text-4xl md:text-5xl  font-bold">Stay Healthy Always.</p>
        <p className="text-center text-[#71717a]">
          All diagnostic tests are conducted in our laboratory, supported by an
          established Quality System
        </p>
      </div>

      <div className="flex justify-center md:justify-center items-start">
        <Link href="/contact-us">
          <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-10 py-4">
            Get Tested
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
