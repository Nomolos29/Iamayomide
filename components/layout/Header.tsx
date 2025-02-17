"use client";

// import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import logo from "@/public/next.svg";
import { usePathname } from "next/navigation";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Header: React.FC = () => {

  const [opened, setOpened] = useState(false);

  const pathname = usePathname(); // Get the current path

  // Define the navigation menu
  const navMenu = [
    { name: "Home", navURL: "/" },
    { name: "More About Me", navURL: "/about_us" },
    // { name: "Our Mission", navURL: "#" },
    { name: "Contact Us", navURL: "/contact_us" },
  ];

  return (
    <header className="w-full bg-[#ffffffe5] flex justify-center items-center z-50 sticky top-0">
      <main className="max-w-[1440px] w-full margin-auto flex justify-between items-center px-5 md:px-10 overflow-x-hidden sticky top-0">
        {/* Company Logo */}
        <Link href="/" className="w-[12%]">
          <div className="flex items-center text-lg">
            <div className="h-10 w-10 rounded-full bg-red-500 text-white flex justify-center items-center">Iam</div>theayomide
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex justify-center gap-x-5 items-center">
          {navMenu.map((menu, index) => (
            <Link
              key={index}
              href={menu.navURL}
              className={`text-[18px] px-2 py-6 border-b-[3px] ${
                pathname === menu.navURL
                  ? "border-red-700 border-b-[3px] text-red-500" // Active link styles
                  : "border-transparent text-black hover:border-red-700 hover:border-b-[3px] hover:text-red-500 cursor-pointer" // Non-active hover styles
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Join Us Button */}
        <div className="flex items-center gap-x-5">
          <Link
            href="https://outlook.office.com/bookwithme/user/7d3c3f6ee4e9414296cdcdc8704495b6@gse.harvard.edu?anonymous&ep=plink" target="_blank" // Redirect to the relevant page
            className="py-2 px-8 bg-gradient-to-r from-red-700 to-red-500 text-xl font-medium rounded-md text-white"
          >
            Book an Appointment
          </Link>

          <AiOutlineMenuFold className={`text-4xl md:hidden ${opened && "rotate-180"} duration-300`} onClick={() => setOpened(true)} />
        </div>

        <div className={`flex md:hidden fixed h-fit rounded-bl-2xl w-[65%] shadow-lg shadow-[#f8b61cef] bg-[#ffffffc2]  z-50 right-0 top-0 ${opened ? "translate-x-[0%]" : "translate-x-[110%]"} ease-in-out backdrop-blur-sm duration-500`}>
          <nav className="flex flex-col justify-between gap-y-5 p-6 text-right pb-20 w-full overflow-hidden">
            <span className="flex w-full justify-between">
              <AiOutlineMenuUnfold className={`text-4xl md:hidden mb-5 ${!opened && "rotate-180"} duration-200`} onClick={() => setOpened(false)} />
              <h4 className="font-semibold text-xl">Menu</h4>
            </span>

            {navMenu.map((menu, index) => {

              const delayValue = (index + 1) * 200; 

              return (
                <Link
                  key={index}
                  href={menu.navURL}
                  className={`text-[18px] px-2 ${
                    opened
                      ? "translate-y-0 opacity-100"
                      : "opacity-0 translate-y-28"
                  } ease-in-out duration-500`}
                  style={{ transitionDelay: `${delayValue}ms` }} // Inline style for dynamic delay
                  onClick={() => setOpened(false)}
                >
                  <span
                    className={`${
                      pathname === menu.navURL
                        ? "border-[#FFB100] text-[#FFB100]" // Active link styles
                        : "border-transparent text-black hover:border-[#FFB100] hover:text-[#FFB100] cursor-pointer" // Non-active hover styles
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
              );
            })}

          </nav>
        </div>
      </main>
    </header>
  );
};

export default Header;
