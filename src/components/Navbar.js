"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const handleClick = () => setisClick(!isClick);

  return (
    <nav className="navbar w-full fixed z-50 bg-white md:px-[20px] lg:px-[50px] xl:px-[120px]">
      <div className="mx-auto px-2 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <button className="hover:opacity-70 flex items-center flex-shrink-0">
              <img
                src="/assets/microscope.jpeg"
                className="h-[40px] md:h-[65px]"
                alt="Navigation_logo"
              />
              <div className="nav-text flex flex-col font-bold ">
                <span className="text-sm md:text-base text-start text-[#27a5a9]">
                  COALCITY{" "}
                  <span className="text-[#e67817] text-sm md:text-base">
                    VIEW
                  </span>
                </span>
                <span className="text-[#e67817] text-sm md:text-base">
                  MEDICAL LABORATORY
                </span>
              </div>
            </button>
          </Link>

          <div className="hidden md:block nav-text ">
            <ul className="nav-list flex gap-x-9 items-center text-base ">
              <li className="text-black font-semibold hover:text-[#e67817] ">
                <Link href="/">Home</Link>
              </li>
              <li className="text-black font-semibold hover:text-[#e67817]">
                <Link href="/about">About</Link>
              </li>

              <Menu>
                <MenuButton className="text-black font-semibold hover:text-[#e67817]">
                  Services
                </MenuButton>
                <MenuList className="">
                  <Link href="/pathology-services">
                    {" "}
                    <MenuItem>Pathology Services</MenuItem>
                  </Link>
                  <Link href="/customer-services">
                    {" "}
                    <MenuItem>Customer Services</MenuItem>
                  </Link>
                  <Link href="/screening-tests">
                    {" "}
                    <MenuItem>Screening Tests</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              {/* <li className="text-black font-semibold hover:text-[#e67817]">
                <Link href="/contact-us">Contact</Link>
              </li> */}
              <li className="text-white font-semibold text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-8 py-3">
                <Link href="/contact-us">Appointment</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center p-2 rounded-md focus:outline-none md:hidden border-2 border-[#333663]">
            <button onClick={handleClick} className="">
              {isClick ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div>
        {isClick && (
          <div className="nav-bg md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
              <ul className="list-none space-y-2">
                <li className="text-center text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-center text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/about">About</Link>
                </li>
                <li className="text-center text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Menu>
                    <MenuButton className="w-full hover:text-black block ">
                      Services
                    </MenuButton>
                    <MenuList className="">
                      <Link href="/pathology-services">
                        {" "}
                        <MenuItem>Pathology Services</MenuItem>
                      </Link>
                      <Link href="/customer-services">
                        {" "}
                        <MenuItem>Customer Services</MenuItem>
                      </Link>
                      <Link href="/screening-tests">
                        {" "}
                        <MenuItem>Screening Tests</MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                </li>
                <li className="text-center text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
