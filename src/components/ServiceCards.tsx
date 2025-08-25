import { Check, MessageCircle } from "lucide-react";
import Link from "next/link";

const legalDetails = [
  "National ID & background checks",
  "Rental history reports",
  "Income verification",
  "Fast turnaround (24-48 hours)",
  "Private & secure handling",
];

export default function ServiceCards() {
  return (
    <div className="max-w-[1280px] px-3 sm:px-4 mx-auto bg-white rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        {/* Left Side - Legal Support Card */}
        <div className="bg-[#8AA2E1] overflow-hidden relative rounded-2xl row-span-1 lg:row-span-2 px-6 sm:px-8 lg:px-10 py-8 sm:py-9 lg:py-11 text-white">
          <div className="mb-2">
            <span className="text-xs sm:text-sm uppercase font-medium tracking-wide">
              LEGAL SUPPORT
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight">
            Property Legal
            <br />
            Support, Simplified
          </h2>

          {/* Background vectors - responsive positioning */}
          <div className="absolute z-10 bottom-12 sm:bottom-16 -right-8 sm:-right-12 opacity-80">
            <img
              src="/common/Vector.svg"
              alt=""
              className="w-16 sm:w-20 lg:w-auto"
            />
          </div>
          <div className="absolute bottom-0 z-10 -right-2 sm:-right-4 opacity-80">
            <img
              src="/common/Vector.svg"
              alt=""
              className="w-16 sm:w-20 lg:w-auto"
            />
          </div>

          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12 relative z-20">
            {legalDetails.map((details, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img
                  src={"/common/tick.svg"}
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                />
                <span className="text-sm sm:text-base">{details}</span>
              </div>
            ))}
          </div>

          <Link
            href={"/"}
            className="bg-white w-fit text-[#191D25] px-6 sm:px-8 py-3 sm:py-4 gap-2 rounded-lg font-medium text-base sm:text-lg cursor-pointer flex items-center hover:bg-gray-50 transition-colors relative z-20"
          >
            <img
              src="/common/call.svg"
              alt=""
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="text-sm sm:text-base lg:text-lg">
              Talk to a Legal Expert
            </span>
          </Link>
        </div>

        {/* Right Side - Two Distinct Service Cards */}
        <div className="bg-white overflow-hidden rounded-xl px-4 sm:px-6 py-6 sm:py-8 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                Furniture Leasing Made Easy
              </h3>
              <p className="text-Arambo-Text text-base sm:text-lg mb-4 sm:mb-6">
                Lease high-quality furniture for your apartment — flexible
                plans, modern styles, and zero stress.
              </p>
              <Link
                href={"/furniture"}
                className="bg-Arambo-Accent  cursor-pointer text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-md font-medium w-full sm:w-auto"
              >
                Explore Leasing Plans
              </Link>
            </div>
            <div className="w-full sm:w-fit flex items-center justify-center sm:justify-end sm:-mr-6 lg:-mr-30 overflow-hidden">
              <img
                src="/common/sofa.png"
                alt="Modern furniture chair"
                className="w-32 sm:w-40 lg:w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Moving Support Section */}
        <div className="bg-[#FCEDE9] rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 relative min-h-[200px] sm:min-h-[220px]">
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 justify-between mb-4 sm:mb-0">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 flex-shrink-0">
              Moving Support, Handled
            </h4>
            <p className="text-Arambo-Text text-sm sm:text-base mb-4">
              From packing to setup, our relocation partners help you move in
              without the headache. Timely, secure, and hassle-free.
            </p>
          </div>

          {/* Truck image - responsive positioning */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-24 sm:w-32 lg:w-48">
            <img
              src="/common/truck.png"
              alt="Moving truck"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full flex justify-end mt-4 sm:mt-6">
            <Link href={'/book-a-truck'} className="bg-Arambo-White cursor-pointer text-Arambo-Black px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-md font-medium mt-auto">
              Book Moving Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
