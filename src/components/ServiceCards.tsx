import { Check, MessageCircle } from "lucide-react";

const legalDetails = [
  "National ID & background checks",
  "Rental history reports",
  "Income verification",
  "Fast turnaround (24-48 hours)",
  "Private & secure handling",
];

export default function ServiceCards() {
  return (
    <div className="max-w-[1280px] px-4 mx-auto  bg-white rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Side - Legal Support Card */}
        <div className="bg-[#8AA2E1] overflow-hidden relative rounded-2xl row-span-2 px-10 py-11 text-white">
          <div className="mb-2">
            <span className="text-sm uppercase font-medium tracking-wide">
              LEGAL SUPPORT
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-16 leading-tight">
            Property Legal
            <br />
            Support, Simplified
          </h2>
          <div className="absolute z-10 bottom-16 -right-12  opacity-80">
            <img src="/common/Vector.svg" alt="" />
          </div>
          <div className="absolute bottom-0 z-10 -right-4  opacity-80">
            <img src="/common/Vector.svg" alt="" />
          </div>

          <div className="space-y-4 mb-12">
            {legalDetails.map((details, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img src={"/common/tick.svg"} />
                <span className="text-base">{details}</span>
              </div>
            ))}
          </div>

          <button className="bg-white text-[#191D25] px-8 py-4 gap-2 rounded-lg font-medium text-lg cursor-pointer flex items-center hover:bg-gray-50 transition-colors">
            <img src="/common/call.svg" alt="" />
            Talk to a Legal Expert
          </button>
        </div>

        {/* Right Side - Two Distinct Service Cards */}
        <div className="bg-white overflow-hidden rounded-xl px-6 py-8 shadow-sm border border-gray-100">
          <div className="flex gap-6 ">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Furniture Leasing Made Easy
              </h3>
              <p className="text-Arambo-Text text-lg mb-4">
                Lease high-quality furniture for your apartment — flexible
                plans, modern styles, and zero stress.
              </p>
              <button className="bg-Arambo-Accent cursor-pointer text-white px-6 py-4 text-base rounded-md  font-medium mt-auto">
                Explore Leasing Plans
              </button>
            </div>
            <div className="w-fit -mr-30 overflow-hidden flex items-center justify-center">
              <img
                src="/common/sofa.png"
                alt="Modern furniture chair"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Moving Support Section */}
        <div className="bg-[#FCEDE9] rounded-xl p-6 shadow-sm border border-gray-100 relative">
          <div className="flex items-start gap-4 justify-between ">
            <h4 className="text-2xl min-w-fit font-bold text-gray-900 mb-3">
              Moving Support, Handled
            </h4>
            <p className="text-Arambo-Text text-base mb-4">
              From packing to setup, our relocation partners help you move in
              without the headache. Timely, secure, and hassle-free.
            </p>
          </div>
          <div className="absolute bottom-4 left-4 w-48">
            <img
              src="/common/truck.png"
              alt="Moving truck"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full flex justify-end mt-6">
            <button className="bg-Arambo-White cursor-pointer text-Arambo-Black px-6 py-4 text-base rounded-md  font-medium mt-auto">
              Book Moving Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
