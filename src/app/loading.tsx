"use client";

import Logo from "@/components/Logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <div className="text-center px-6">
        {/* Logo (accessible) */}
        <div className="flex items-center justify-center" aria-label="Arambo">
          <Logo aria-hidden />
          <span className="sr-only">Arambo</span>
        </div>

        {/* Copy */}
        <div className="mt-8 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-700">
            Your Dream Home Awaits
          </h2>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-slate-600">
            Connecting you with premium real estate opportunities
          </p>
        </div>

        <div
          className="relative mt-10 inline-block"
          role="status"
          aria-live="polite"
          aria-busy="true"
          data-testid="loading-spinner"
        >
          {/* Spinner */}
          <div className="mx-auto h-16 w-16 rounded-full border-4 border-slate-200 border-t-Arambo-Accent motion-safe:animate-spin sm:h-20 sm:w-20 shadow-sm"></div>
          {/* Pulsing ring */}
          <div className="pointer-events-none absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-r-blue-400 motion-safe:animate-pulse sm:h-20 sm:w-20"></div>
          <span className="sr-only">Loading…</span>
        </div>

        {/* Loading message */}
        <p className="mt-4 text-sm text-slate-500">Loading your experience…</p>
      </div>
    </div>
  );
}
