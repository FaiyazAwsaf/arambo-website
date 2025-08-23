"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Residential",
    href: "/residential",
    dropdown: [
      { name: "Buy", href: "/residential/buy" },
      { name: "Rent", href: "/residential/rent" },
      { name: "For Woman", href: "/residential" },
      { name: "For Bachelor", href: "/residential" },
      { name: "For Family", href: "/residential" },
    ],
  },
  {
    name: "Commercial",
    href: "/commercial",
    dropdown: [
      { name: "Sell", href: "/list-property" },
      { name: "Buy", href: "/commercial/buy" },
      { name: "Rent", href: "/commercial/rent" },
      { name: "Furnished", href: "/commercial" },
      { name: "Non-Furnished", href: "/commercial" },
    ],
  },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              <img src="/Logo.svg" alt="Arambo Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              const hasDropdown = item.dropdown && item.dropdown.length > 0;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasDropdown) {
                      if (hideTimeout.current)
                        clearTimeout(hideTimeout.current);
                      setActiveDropdown(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasDropdown) {
                      hideTimeout.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 200);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive
                        ? "body-base text-Arambo-Accent"
                        : "body-base text-Arambo-Text"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>

                  {hasDropdown && (
                    <div
                      className={`fixed right-0 left-0 top-[80px] w-screen bg-Arambo-White rounded-lg shadow-lg border border-gray-200 py-8 z-50 transition-all duration-500 ease-in-out
                        ${
                          activeDropdown === item.name
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      onMouseEnter={() => {
                        if (hideTimeout.current)
                          clearTimeout(hideTimeout.current);
                        setActiveDropdown(item.name);
                      }}
                      onMouseLeave={() => {
                        hideTimeout.current = setTimeout(() => {
                          setActiveDropdown(null);
                        }, 200);
                      }}
                    >
                      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 px-8">
                        <div className="col-span-1 grid grid-rows-4 grid-cols-2 gap-2">
                          {item.dropdown && item.dropdown.length > 0 && (
                            <>
                              <div className="row-span-1 col-span-1 flex items-center body-base text-Arambo-Text">
                                <Link href={item.dropdown[0].href}>
                                  {item.dropdown[0].name}
                                </Link>
                              </div>
                              <div className="row-span-1 col-span-1"></div>
                              <div className="row-span-1 col-span-1 flex items-center body-base text-Arambo-Text">
                                <Link href={item.dropdown[1].href}>
                                  {item.dropdown[1].name}
                                </Link>
                              </div>
                              <div className="row-span-1 col-span-1 flex items-center body-base text-Arambo-Text">
                                <Link href={item.dropdown[2].href}>
                                  {item.dropdown[2].name}
                                </Link>
                              </div>
                              <div className="row-span-1 col-span-1 flex items-center body-base text-Arambo-Text">
                                <Link href={item.dropdown[3].href}>
                                  {item.dropdown[3].name}
                                </Link>
                              </div>
                              <div className="row-span-1 col-span-1 flex items-center body-base text-Arambo-Text">
                                <Link href={item.dropdown[4].href}>
                                  {item.dropdown[4].name}
                                </Link>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1 flex items-center justify-end">
                          <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=160&fit=crop&crop=center"
                            alt="Placeholder"
                            className="w-80 h-32 object-cover rounded-lg border border-gray-100"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center">
            <Link href="/list-property">
              <button className="flex items-center justify-center gap-2 w-36 h-12 text-Arambo-White bg-Arambo-Accent text-sm leading-[150%] border-[2px] rounded-[6px] flex-none order-1 grow-0 span-14-1-4">
                List Property
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
