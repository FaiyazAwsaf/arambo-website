import { ArrowRight, Home, Search } from "lucide-react";

// Replicate  https://www.arambo.co/comercial
const CommercialPage = () => {
  return (
    <section
      className="relative w-full py-32 rounded-2xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/commercial/commercial-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 font-sans flex flex-col items-center gap-2 justify-center h-full text-center px-6">
        <h1 className="text-[56px]  font-semibold text-white">Commercial</h1>
        <p className=" text-[17px] text-lg text-white/80">
          Sort by location to find the best lists
        </p>

        {/* Search bar */}
        <div className="mt-6 w-full max-w-md py-4 flex border-white/[0.09] items-center border-2 gap-2 bg-white/10 backdrop-blur-[20px] pl-4 pr-6 rounded-[35px] ">
          <Search className="text-white/80" size={20} />
          <input
            type="text"
            placeholder="Search by location..."
            className="flex-1 bg-transparent text-white placeholder-white/70 outline-none"
          />
        </div>
      </div>
      <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 flex gap-4">
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-medium shadow-lg">
          <Home size={18} /> RENT <ArrowRight size={18} />
        </button>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-medium shadow-lg">
          <Home size={18} /> BUY
        </button>
      </div>
    </section>
  );
};

export default CommercialPage;
