"use client";

import React, { useState, FormEvent } from "react";

const TruckForm = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [productType, setProductType] = useState<string>("");
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropoffLocation, setDropoffLocation] = useState<string>("");
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [preferredTimeSlot, setPreferredTimeSlot] = useState<string>("");
  const [additionalNotes, setAdditionalNotes] = useState<string>("");

  // Explicit type for the event parameter in handleSubmit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // API integration here
    console.log({
      name,
      phoneNumber,
      email,
      productType,
      pickupLocation,
      dropoffLocation,
      preferredDate,
      preferredTimeSlot,
      additionalNotes,
    });
    alert("Form submitted! You will receive a confirmation call shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-12 font-inter flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10 lg:p-12">
        {/* Header Section */}
        <h2 className="h2 text-Arambo-Black mb-2">Trip Details</h2>
        <p className="label-18 text-Arambo-Text mb-8 max-w-lg">
          Choose how you want to get started — rent or sell in just a click.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Contact Information Section */}
          <h3 className="h4 text-Arambo-Black mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block label-18 text-Arambo-Black mb-2"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block label-18 text-Arambo-Black mb-2"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block label-18 text-Arambo-Black mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Product Type */}
            <div>
              <label
                htmlFor="productType"
                className="block label-18 text-Arambo-Black mb-2"
              >
                Product type<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="productType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-10"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="perishable">Perishable Goods</option>
                  <option value="non-perishable">Non-Perishable Goods</option>
                  <option value="fragile">Fragile Items</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Details Section */}
          <h3 className="h4 text-Arambo-Black mb-4">Trip Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {/* Pickup Location */}
            <div>
              <label
                htmlFor="pickupLocation"
                className="block label-18 text-Arambo-Black mb-2"
              >
                Pickup Location<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pickupLocation"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              />
            </div>
            {/* Drop-off Location */}
            <div>
              <label
                htmlFor="dropoffLocation"
                className="block label-18 text-Arambo-Black mb-2"
              >
                Drop-off Location<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="dropoffLocation"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                required
              />
            </div>
            {/* Preferred Date */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block label-18 text-Arambo-Black mb-2"
              >
                Preferred Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date" // Using type="date" for native date picker
                id="preferredDate"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="dd:mm:yyyy"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
              />
            </div>
            {/* Preferred Time Slot */}
            <div>
              <label
                htmlFor="preferredTimeSlot"
                className="block label-18 text-Arambo-Black mb-2"
              >
                Preferred Time Slot<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="preferredTimeSlot"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-10"
                  value={preferredTimeSlot}
                  onChange={(e) => setPreferredTimeSlot(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="morning">Morning (8 AM – 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                  <option value="evening">Evening (4 PM – 8 PM)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mb-8">
            <label
              htmlFor="additionalNotes"
              className="block label-18 text-Arambo-Black mb-2"
            >
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-y"
              placeholder="Your answer"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button and Confirmation Message */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="bg-Arambo-Accent hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md
                         transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
            >
              Book My Truck
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
            <p className="text-gray-600 text-sm mt-2 sm:mt-0">
              You will receive a confirmation call shortly
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TruckForm;
