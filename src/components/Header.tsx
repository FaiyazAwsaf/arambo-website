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
      { name: "For Woman", href: "/residential/woman" },
      { name: "For Bachelor", href: "/residential/bachelor" },
      { name: "For Family", href: "/residential/family" },
    ],
  },
  {
    name: "Commercial",
    href: "/commercial",
    dropdown: [
      { name: "Sell", href: "/commercial/sell" },
      { name: "Buy", href: "/commercial/buy" },
      { name: "Rent", href: "/commercial/rent" },
      { name: "Furnished", href: "/commercial/furnished" },
      { name: "Non-Furnished", href: "/commercial/non-furnished" },
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
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              <img
                src="/header/Frame.svg"
                alt="Arambo Logo"
                className="h-8 w-auto"
              />
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
                      }, 200); // Short delay to allow moving into dropdown
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

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-500 ease-in-out
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
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* List Property Button */}
          <div className="flex items-center">
            <button className="flex items-center justify-center gap-2 w-[131px] h-[41px] text-Arambo-White bg-Arambo-Accent text-sm leading-[150%] border-[2px] rounded-[6px] flex-none order-1 grow-0 span-14-1-4">
              List Property
            </button>
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
