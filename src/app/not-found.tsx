"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import notFoundimg from "@/assets/notfound.webp";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-100px)] flex  items-center container mx-auto">
      {/* Left Side - Content */}
      <div className="flex-1  flex items-center justify-center px-8 lg:px-16">
        <div className="max-w-lg w-full">
          {/* Logo */}

          {/* Main Content */}
          <div className="mb-10">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Page Not Found!
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The page you are looking for does not exist or may have been
              moved.
            </p>
          </div>

          {/* Action Button */}
          <div className="mb-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-4 bg-Arambo-Accent text-white font-semibold rounded-lg  transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Additional Link */}
          <div>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="lg:flex-1 lg:flex hidden mt-8 lg:mt-0">
        <Image
          src={notFoundimg}
          alt="404 Illustration"
          className="w-full max-w-md max-h-96 mx-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
