"use client";

import Logo from "@/components/Logo";

export default function Loading() {
  return (
    <div className="fixed z-50 inset-0 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
      <div className="text-center space-y-8 px-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* Loading Animation */}
        <div className="space-y-6">
          {/* Main Spinner */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-r-blue-400 rounded-full animate-spin animate-reverse"></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="mt-8 space-y-3">
            <h2 className="text-2xl font-semibold text-slate-700">
              Your Dream Home Awaits
            </h2>
            <p className="mx-auto max-w-lg text-base leading-relaxed text-slate-600">
              Connecting you with premium real estate opportunities
            </p>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
