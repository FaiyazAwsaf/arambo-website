import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
    >
      <img src="/header/Frame.svg" alt="Arambo Logo" className="h-8 w-auto" />
    </Link>
  );
};

export default Logo;
