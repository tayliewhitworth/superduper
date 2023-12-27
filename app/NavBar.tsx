"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">The Super Duper Good Company</span>
            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
            <h1 className="text-3xl font-bold text-gray-900">
              Super Duper Good
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="h-6 w-6" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Products
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <div className={`lg:hidden ${mobileOpen ? 'flex' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              Super Duper Good
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    onClick={() => setMobileOpen(false)}
                >
                  Products
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
