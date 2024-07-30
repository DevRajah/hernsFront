"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Head() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const ActiiveClasses = (path) => {
    return pathname === path
      ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
      : "block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700";
  };

  return (
    <header className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
             <Image
            src="/assets/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="rounded-lg object-fit w-14 h-full"
            quality={100}
          />
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={ActiiveClasses("/")}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={ActiiveClasses("/about")}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className={ActiiveClasses("/product")}>
                  Product
                </Link>
              </li>
              <li>
                <Link href="/contact" className={ActiiveClasses("/contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
