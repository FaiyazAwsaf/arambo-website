"use client";

import { useSearchParams } from "next/navigation";

const trucks = [
  { id: "1", name: "Small Truck" },
  { id: "2", name: "Medium Truck" },
  { id: "3", name: "Large Truck" },
];

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const truckId = searchParams.get("truckId");
  const truck = trucks.find((t) => t.id === truckId);

  return (
    <div className="max-w-xl mx-auto py-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="mb-2">
        Thank you for booking {truck ? truck.name : "your truck"}.
      </p>
      <p className="mb-6">We will contact you soon with further details.</p>
      <a
        href="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Home
      </a>
    </div>
  );
}
