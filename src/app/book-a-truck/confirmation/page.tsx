"use client";

import ActionButton from "@/components/ActionButton";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div
        style={{
          background:
            "linear-gradient(180deg, #000B26 0%, #00123C 19.69%, #032471 70.33%, #0C39A3 86.64%, #0041D9 100%)",
        }}
        className="relative h-[200px] flex flex-col justify-center items-center rounded-2xl text-Arambo-White p-5 mb-5"
      >
        <h1 className="text-center h1 mb-8">Book A Truck</h1>
      </div>

      <div className="max-w-3xl mx-auto py-10 text-left">
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-2">
            <img src="/CheckIcon.svg" alt="" className="w-12 h-12" />
            <h1 className="h3 text-Arambo-Black m-0">
              Your Truck Booking Request Has Been Received!
            </h1>
          </div>
          <div className="ml-16">
            <p className="p-lg text-Arambo-Text mb-2 mt-8">
              Thank you for booking with Arambo Logistics. We’ve received your
              details and our team is already reviewing your request. Our team
              will call you shortly to finalize the best fit.
            </p>
            <div className="mt-8 w-60">
              <ActionButton
                label="Go Back to home"
                GoToActionIcon
                startIcon
                isActive
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col w-100">
            <div className="flex h5 text-Arambo-Black mb-1">
              Need to make changes?
            </div>
            <div className="label-16 text-Arambo-Text">
              No problem. Just reply to the confirmation SMS or call our support
              team directly at:
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 md:mt-0">
            <img src="/PhoneIcon.svg" alt="" className="w-6 h-6" />
            <a
              href="tel:+88018927234325"
              className="text-Arambo-Accent label-16 hover:underline"
            >
              +018 927234 325
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
