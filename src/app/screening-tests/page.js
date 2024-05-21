import React from "react";
import Link from "next/link";

const page = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl:
        "https://1.bp.blogspot.com/-_3xrFHn-kaA/XVLS1WH3NEI/AAAAAAAAEas/unf0Sged1CYWOLVA0Ct7HH2n0NL93FHVwCLcBGAs/s1600/cc1.jpg",
      header: "Full Blood Count",
      text: "A complete blood count assesses the levels of red blood cells, white blood cells, and platelets in the bloodstream. This standard procedure serves to detect various health conditions, infections, and diseases.",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.getshifter.co/9ffafe227584833e1d83fe8314723e0fe39da375/uploads/2020/06/training-in-pathology-laboratory.jpg",
      header: "Men’s health",
      text: "Regular health screenings are essential for Men to detect precancerous lesions early",
    },
    {
      id: 3,
      imageUrl:
        "https://anth.pk/wp-content/uploads/2019/03/pathalogy-laboratory.jpg",
      header: "Women’s health",
      text: "Regular health screenings are essential for women to detect precancerous lesions early",
    },
  ];

  return (
    <div className='className="min-h-svh pt-[79px]'>
      <div className="pathology-bg text-white bg-[#f4f5f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-1 md:px-2">
          Screening tests
        </h6>
        <span className="flex gap-x-3 items-end px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Screening tests</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1050px] py-10 flex flex-col gap-8">
        <h6 className="text-2xl md:text-4xl text-start font-bold text-[#274fa7]">
          Screening tests
        </h6>
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
