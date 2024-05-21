"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import emailsent from "../../../public/assets/email-sent.gif";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbnqzkr");
  if (state.succeeded) {
    return (
      <div className="hero-image service-header contact-form-bg font-bold flex flex-col gap-5 justify-center items-center min-h-[600px] md:min-h-screen">
        <span className="rounded">
          <Image src={emailsent} width={100} height={100} alt="email" />
        </span>
        <h4 className="text-4xl text-white">Thank You!</h4>
        <h4 className="text-3xl text-center text-white">
          Your submission has been sent
        </h4>
        <button className="text-white px-7 py-3 rounded-md bg-red-600 hover:bg-orange-600 transition duration-300 ease-in-out">
          <Link href="/">Home</Link>
        </button>
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-[79px]">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-center text-5xl font-semibold px-2">CONTACT US</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Contact Us</span>
        </span>
      </div>
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
      {/* Contact Container */}
      <div className="mx-auto max-w-[800px] my-10 px-4 md:px-0 w-full gap-6 md:gap-4">
        <div className="contact-form border shadow-lg shadow-[rgb(4,12,22)] container rounded-md p-7 order-last">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="input-group mb-7">
              <label htmlFor="name">Name</label>
              <input id="name" type="name" name="name" required />
            </div>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <div className="input-group mb-7">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" required />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="input-group mb-7">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows={5} />
            </div>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="px-7 py-3 rounded-md border-[1px] border-[#000000] hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
              type="submit"
              disabled={state.submitting}
              // onClick={notify}
            >
              SUBMIT
            </button>
            {/* <ToastContainer /> */}
          </form>
        </div>
 
      </div>
    </div>
  );
};

export default Contact;
