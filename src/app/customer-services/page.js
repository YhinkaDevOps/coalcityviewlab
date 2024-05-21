import React from "react";
import Link from "next/link";

const page = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl:
        "https://marvel-b1-cdn.bc0a.com/f00000000270529/s19536.pcdn.co/wp-content/uploads/2022/06/setting-an-appointment-1024x512.jpg",
      header: "Test Appointments",
      text: "Schedule your test appointments in advance of the service delivery day.",
    },
    {
      id: 2,
      imageUrl:
        "https://cerbalancetafrica.ng/media/wccdncs1/corporate-wellness-training.jpg",
      header: "Corporate Wellness Testing",
      text: "On-site corporate wellness day screenings.",
    },
    {
      id: 3,
      imageUrl:
        "https://emi.parkview.com/media/Image/Dashboard_835_lab-results_10_23.jpeg",
      header: "Free Courier",
      text: "Our complimentary courier network offers sample collection and delivery of results.",
    },
    {
      id: 4,
      imageUrl:
        "https://effectivesoftwaredesign.com/wp-content/uploads/2023/06/1-feedback-descriptive-2.jpg",
      header: "Feedback and Improvement",
      text: "Your input helps us identify areas for enhancement and ensures that we consistently deliver the highest quality of care",
    },
  ];

  return (
    <div className='className="min-h-svh pt-[79px]'>
      <div className="pathology-bg text-white bg-[#f4f5f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-1 md:px-2">
          Customer Services
        </h6>
        <span className="flex gap-x-3 items-end px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Customer Services</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1050px] py-10 flex flex-col gap-8">
        <h6 className="text-2xl md:text-4xl text-start font-bold text-[#274fa7]">
          Customer Services
        </h6>
        <p className="text-justify">
          At Coal City View Medical Laboratory, we are dedicated to providing
          you with exceptional customer service every step of the way. Our
          commitment to excellence extends beyond medical diagnostics to ensure
          that your experience with us is seamless, informative, and
          personalized to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:gap-6 mx-auto max-w-[1100px] pb-8 md:pb-16 mt-8 mb-8">
        {cardsData.map((card) => (
          <div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={card.id}
            className="flex flex-col gap-4 bg-white rounded-lg"
          >
            <img
              src={card.imageUrl}
              alt={card.header}
              className="card-image_ rounded-3xl p-2"
            />
            <div className="flex flex-col gap-3 md:gap-6 p-2">
              <h3 className="font-bold text-2xl text-[#274fa7]">
                {card.header}
              </h3>
              <p className="text-[#494b51] text-base">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
