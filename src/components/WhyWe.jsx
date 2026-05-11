import { HiArrowUpRight } from "react-icons/hi2";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center px-8 py-10">
      <div className="w-full flex items-center justify-between gap-5">


        {/* Left: Description */}
        <div className="w-1/2">
          <p className="text-[#1a1a1a] text-2xl font-semibold leading-relaxed">
            A global team of search-first content marketers <br />
            engineering semantic relevancy category <br />
            signals for both the internet and people
          </p>
        </div>
          

        {/* Right: Heading + Buttons */}
        <div className=" w-1/2 flex flex-col gap-8">
         
          <h1 className="text-[#1a1a1a] text-6xl font-black leading-[1.05] tracking-tight">
            Driving Demand & 
            <span className="inline-flex items-end gap-3">
              Discovery
              <span className="inline-block w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 mb-1 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=80&h=80&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </span>
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white text-[#1a1a1a] font-semibold text-base px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200">
              Our Story
              <HiArrowUpRight className="text-base" />
            </button>

            <button className="flex items-center gap-2 text-[#1a1a1a] font-semibold text-base px-6 py-3 hover:opacity-60 transition-opacity duration-200">
              Our Services
              <HiArrowUpRight className="text-base" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}