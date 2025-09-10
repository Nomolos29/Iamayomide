"use client";

// import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import logo from "@/public/next.svg";
import { usePathname } from "next/navigation";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { NAV_MENU, SITE_CONFIG } from "@/lib/constants";
import { NavMenuItem } from "@/lib/types";
import ThemeToggle from "@/components/ThemeToggle";

const Header: React.FC = () => {

  const [opened, setOpened] = useState(false);

  const pathname = usePathname(); // Get the current path

  // Use shared navigation menu
  const navMenu: NavMenuItem[] = NAV_MENU;

  return (
    <header className="w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 flex justify-center items-center z-50 sticky top-0 shadow-sm">
      <main className="max-w-[1440px] w-full flex justify-between items-center px-5 md:px-10 py-4">
        {/* Company Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-700 to-red-600 text-white flex justify-center items-center font-bold text-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
            AA
          </div>
          <div className="text-xl font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300">
            IamTheAyomide
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex justify-center gap-x-8 items-center">
          {navMenu.map((menu, index) => (
            <Link
              key={index}
              href={menu.navURL}
              className={`text-[16px] font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                pathname === menu.navURL
                  ? "bg-red-700 text-white shadow-lg"
                  : "text-gray-700 hover:text-red-700 hover:bg-red-50"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <Link
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            className="hidden lg:flex py-3 px-6 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Meeting
          </Link>

          <button
            type="button"
            onClick={() => setOpened(true)}
            className="lg:hidden p-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300"
            aria-label="Open mobile menu"
          >
            <AiOutlineMenuFold className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed min-h-screen overflow-hidden inset-0 z-50 ${opened ? "visible" : "invisible"}`}>
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${opened ? "opacity-100" : "opacity-0"}`}
            onClick={() => setOpened(false)}
          />

          <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${opened ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">Menu</h4>
                <button
                  type="button"
                  onClick={() => setOpened(false)}
                  className="p-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300"
                  aria-label="Close mobile menu"
                >
                  <AiOutlineMenuUnfold className="text-2xl" />
                </button>
              </div>

              <nav className="flex-1 px-6 py-8 bg-white">
                <div className="space-y-4">
                  {navMenu.map((menu, index) => (
                    <Link
                      key={index}
                      href={menu.navURL}
                      className={`block text-lg font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                        pathname === menu.navURL
                          ? "bg-red-700 text-white shadow-lg"
                          : "text-gray-700 hover:text-red-700 hover:bg-red-50"
                      }`}
                      onClick={() => setOpened(false)}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    href={SITE_CONFIG.bookingUrl}
                    target="_blank"
                    className="block w-full py-3 px-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-lg text-center shadow-lg"
                  >
                    Book Meeting
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
