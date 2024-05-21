import React from "react";
import Link from "next/link";


const page = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl:
        "https://1.bp.blogspot.com/-_3xrFHn-kaA/XVLS1WH3NEI/AAAAAAAAEas/unf0Sged1CYWOLVA0Ct7HH2n0NL93FHVwCLcBGAs/s1600/cc1.jpg",
      header: "Chemical Pathology",
      text: "This branch of pathology focuses on the biochemical foundations of diseases, involving the measurement of serum electrolytes, liver function indicators, hormones, drugs, tumor markers, and other biochemical markers.",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.getshifter.co/9ffafe227584833e1d83fe8314723e0fe39da375/uploads/2020/06/training-in-pathology-laboratory.jpg",
      header: "Microbiology",
      text: "Microbiology includes various sub-disciplines such as virology, mycology, parasitology, and bacteriology. It focuses on studying microscopic organisms, which can be unicellular (single cell), multicellular (cell colonies), or acellular (without cells)",
    },
    {
      id: 3,
      imageUrl:
        "https://anth.pk/wp-content/uploads/2019/03/pathalogy-laboratory.jpg",
      header: "Immunology",
      text: "Immunology involves studying all facets of the immune system, including its structure and function, immune system disorders, blood banking, immunization, and organ transplantation.",
    },
    {
      id: 4,
      imageUrl:
        "https://autima.com.au/wp-content/uploads/2023/07/14-1-1-768x401.webp",
      header: "Hematology and Coagulation",
      text: "Hematology involves the study of blood in both health and disease. This encompasses the examination of issues related to red and white blood cells, platelets, blood vessels, bone marrow, lymph nodes, spleen, and blood proteins.",
    },
  ];

  return (
    <div className='className="min-h-svh pt-[79px]'>
      <div className="pathology-bg text-white bg-[#f4f5f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-1 md:px-2">
          Pathology Services
        </h6>
        <span className="flex gap-x-3 items-end px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Pathology Services</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1050px] py-10 flex flex-col gap-8">
        <h6 className="text-2xl md:text-4xl text-start font-bold text-[#274fa7]">
          Pathology Services
        </h6>
        <p className="text-justify">
          At Coal City View Medical Laboratory, we provide comprehensive
          pathology services designed to deliver accurate and timely diagnostic
          information, which is crucial for effective patient care. Our
          state-of-the-art laboratory is equipped with advanced technology and
          staffed by a team of highly skilled pathologists and laboratory
          technicians committed to excellence.
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
