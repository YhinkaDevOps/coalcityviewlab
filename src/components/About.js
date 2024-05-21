import React from "react";
import Link from "next/link";
import microscope from "../../public/assets/microscope.gif";
import samples from "../../public/assets/samples.gif";
import helpdesk from "../../public/assets/helpdesk.gif";
// import styles from './about.module.css'
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full min-h-screen py-16 text-black">
      <div className="mx-auto max-w-[1100px] w-full px-4">
        <div className="flex flex-col gap-10">
          <h6 className="font-bold text-center text-[#0f5a64] text-4xl">
            OUR SERVICES
          </h6>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#f7f7f7] flex flex-col gap-5 service-bg p-5">
              <Image
                src={microscope}
                width={50}
                height={10}
                alt="lab-image"
                className="rounded-lg "
              />

              <h3 className="font-bold text-[#0f5a64] text-lg">
                Pathology Services
              </h3>
              <p className="text-[#0f5a64]">
                Our pathology service leads the way in diagnostic excellence,
                offering unmatched insights into the complexities of health and
                disease.
              </p>

              <div className="flex justify-center md:justify-start items-start">
                <Link href="/contact-us">
                  <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-10 py-4">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-[#f7f7f7] flex flex-col gap-5 service-bg p-5">
              <Image
                src={helpdesk}
                width={50}
                height={10}
                alt="helpdesk-image"
                className="rounded-lg "
              />

              <h3 className="font-bold text-[#0f5a64] text-lg">
                Customer Services
              </h3>
              <p className="text-[#0f5a64]">
                Our dedicated customer service team is here to assist you with
                all your needs, ensuring a seamless and supportive experience
                from appointment scheduling to test results.
              </p>

              <div className="flex justify-center md:justify-start items-start">
                <Link href="/contact-us">
                  <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-10 py-4">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-[#f7f7f7] flex flex-col gap-5 service-bg p-5">
              <Image
                src={samples}
                width={50}
                height={10}
                alt="lab-image"
                className="rounded-lg "
              />

              <h3 className="font-bold text-[#0f5a64] text-lg">
                Screening Tests
              </h3>
              <p className="text-[#0f5a64]">
                Ensure your health with our comprehensive screening tests. Early
                detection is key, and our advanced diagnostics provide accurate
                and timely results to help you stay proactive about your
                well-being
              </p>

              <div className="flex justify-center md:justify-start items-start">
                <Link href="/contact-us">
                  <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-10 py-4">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
