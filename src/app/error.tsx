"use client";

import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";
export default function Error({}) {
  const resetButton = () => {
    window.location.reload();
  };
  return (
    <div className="h-[calc(100vh-100px)] flex  items-center container mx-auto ">
      {/* Left Side - Content */}
      <div className="flex-1  flex items-center justify-center px-8  ">
        <div className="max-w-lg w-full">
          {/* Logo */}

          {/* Main Content */}
          <div className="mb-10">
            <h2 className="md:text-[40px] text-4xl  font-bold text-slate-900 mb-6 leading-tight">
              Something Went Wrong!
            </h2>
            <p className="md:text-lg text-slate-600 leading-relaxed mb-8">
              We encountered an unexpected error while processing your request.
              Our team has been notified and we&apos;re working to fix it.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 pb-3">
            <button
              onClick={resetButton}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 space-x-2 shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all duration-200 space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
          </div>

          {/* Additional Link */}
          <div className="pt-6 border-t border-slate-200">
            <p className="text-slate-500">
              Need immediate assistance?{" "}
              <a
                href="mailto:support@arambo.com"
                className="text-Arambo-Accent hover:underline font-medium"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
