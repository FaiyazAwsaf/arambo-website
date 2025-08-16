"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2 } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Residential", href: "/residential", icon: Home },
  { name: "Commercial", href: "/commercial", icon: Building2 },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-xl text-primary-600 hover:text-primary-700 transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Home size={18} />
              </div>
              <span>Arambo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Contact Info - Hidden on small screens */}
            <div className="px-3 py-2 border-t border-gray-200 mt-4 pt-4 space-y-2">
              <button className="w-full rounded-lg bg-primary-600 px-4 py-2 text-black hover:bg-primary-700 transition-colors">
                Rent Button
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
