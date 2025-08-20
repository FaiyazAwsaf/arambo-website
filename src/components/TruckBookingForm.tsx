"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Truck {
  id: number;
  name: string;
  description: string;
  capacity: string;
  image: string;
  category: string;
}

interface TruckBookingFormProps {
  selectedTruck: Truck | null;
  onBack: () => void;
}

const TruckBookingForm: React.FC<TruckBookingFormProps> = ({ selectedTruck, onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productType: "",
    pickupLocation: "",
    dropoffLocation: "",
    preferredDate: "",
    preferredTimeSlot: "Morning (8 AM - 12 PM)",
    additionalNotes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", formData, selectedTruck);
    alert("Your booking request has been submitted! You'll receive a confirmation call shortly.");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1946BB] to-[#0D2B7A] text-white p-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-2xl font-bold">Trip Details</h2>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
          <span className="text-sm font-medium">Truck Transportation</span>
        </div>
      </div>

      <div className="p-8">
        <p className="text-gray-600 mb-8">
          Choose how you want to get started — rent or sell in just a click.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Type*
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select</option>
                  <option value="household">Household Items</option>
                  <option value="office">Office Equipment</option>
                  <option value="furniture">Furniture</option>
                  <option value="electronics">Electronics</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trip Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Location*
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off Location*
                </label>
                <input
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleInputChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date*
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time Slot*
                  </label>
                  <select
                    name="preferredTimeSlot"
                    value={formData.preferredTimeSlot}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder="Your answer"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-6">
            <button
              type="submit"
              className="bg-[#1946BB] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0D2B7A] transition-colors flex items-center gap-2"
            >
              Book My Truck
              <ArrowRight size={16} />
            </button>
            
            <p className="text-sm text-gray-500">
              You&apos;ll receive a confirmation call shortly
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TruckBookingForm;