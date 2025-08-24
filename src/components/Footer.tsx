"use client";

import React from "react";
import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: LinkItem[];
}

const footerData: FooterSection[] = [
  {
    title: "For Rent",
    links: [
      { label: "Commercial", href: "/commercial" },
      { label: "Residential", href: "/residential" },
    ],
  },
  {
    title: "Property",
    links: [
      { label: "For sale", href: "/residential" },
      { label: "List a property", href: "/list-property" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "" },
      { label: "Privacy policy", href: "" },
      { label: "Terms of service", href: "" },
    ],
  },
  {
    title: "Find us at",
    links: [
      { label: "Facebook", href: "" },
      { label: "Instagram", href: "" },
      { label: "Linkedin", href: "" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="px-4">
      <footer className="relative min-h-[400px] mt-16 pb-10 rounded-2xl overflow-hidden px-2 md:px-4">
        <img
          src={"/FooterImage.png"}
          alt="Modern building background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center py-10 md:py-16 h-full min-h-[350px]">
          <h2 className="h1 md:text-5xl text-Arambo-White mb-4 leading-tight">
            Ready to Move Forward?
          </h2>
          <p className="p-lg text-Arambo-Border max-w-lg mb-8 mx-auto">
            {
              "Whether you're buying, renting, or listing — we're here to guide you every step of the way."
            }
          </p>

          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto mb-6">
            <button className="button-label text-Arambo-Black bg-white w-full h-14 py-3 rounded-md font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2 shadow-md">
              <img src="/footer/mail.svg" alt="" className="w-6 h-6" />
              Send Email
            </button>
            <button className="button-label text-Arambo-White bg-white/20 backdrop-blur-sm w-full h-14 py-3 rounded-md font-medium transition flex items-center justify-center gap-2 shadow-md">
              <img src="/footer/phone.svg" alt="" className="w-6 h-6" />
              Call us
            </button>
          </div>

          <div className="relative z-10 bg-white rounded-2xl shadow-md w-full max-w-md md:max-w-5xl -mb-6 mt-10 md:mt-20 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 text-black">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <img src="/Logo.svg" alt="" className="mb-2" />
                <p className="p-md text-left max-w-[200px] text-Arambo-Text mt-4 md:mt-6">
                  From Listing to Living — Smarter with Arambo.
                </p>
              </div>

              <div className="hidden md:block"></div>

              {footerData.map((section, sectionIdx) => (
                <div key={sectionIdx} className="text-left mt-6 md:mt-0">
                  <h4 className="label-18 mb-4 text-Arambo-Black">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-2 label-16 text-Arambo-Text">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-Arambo-Text hover:underline hover:text-Arambo-Accent transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className="relative text-center text-Arambo-Black label-16 py-10">
        Arambo © 2025
      </div>
    </div>
  );
};

export default Footer;
