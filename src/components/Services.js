import React from "react";

const Services = () => {
  return (
    <div className="w-full min-h-[300px] py-12 bg-[#f4f5f7] text-black px-4 md:px-0 nav-text">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold text-black">Get In Touch With us</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-[1100px] p-2 ">
        <div className="flex flex-col gap-3 items-center md:border-r-[1px] md:border-r-zinc-700">
          <p className="text-[#e67817] font-bold text-lg">CALL US</p>
          <p className="font-bold text-3xl">Make a Call</p>
          <p className="text-[#333333]">+234-80336-57445</p>
        </div>
        <div className="flex flex-col gap-3 items-center md:border-r-[1px] md:border-r-zinc-700">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-[#e67817] font-bold text-lg">LOCATE US</p>
            <p className="font-bold text-3xl">Our Location</p>
            <p className="text-[#333333]">
              95/129 Okota Road, Atinuke Complex, Lagos
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center ">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-[#e67817] font-bold text-lg">EMAIL US</p>
            <p className="font-bold text-3xl">Send a Message</p>
            <p className="text-[#333333]">coalcityview@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
