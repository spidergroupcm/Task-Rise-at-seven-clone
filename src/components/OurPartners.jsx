import React from "react";

const logos = [
  "https://i.ibb.co.com/vxmM7YWx/capital-One.png",
  "https://i.ibb.co.com/wNc8B7zb/axa.png",
  "https://i.ibb.co.com/SwvfxRmb/jd.png",
  "https://i.ibb.co.com/twXmfW80/hubspot.png",
  "https://i.ibb.co.com/5gTfMGjP/red-bull.png",
  "https://i.ibb.co.com/jkP01BzZ/PS.png",
  "https://i.ibb.co.com/5hXSqHCq/X-box.png",
  "https://i.ibb.co.com/0xwXLYR/Shark-Ninja.png",
  "https://i.ibb.co.com/mCXXdB31/sixt.png",
];

const OurPartners = () => {
  return (
    <div className="w-full bg-[#efeeec] overflow-hidden  py-8">
      <h1 className="text-3xl font-bold">The agency behind ...</h1>
      {/* marquee container */}
      <div className="flex w-max gap-16 animate-marquee hover:[animation-play-state:paused]">
        
        {/* duplicated logos for seamless infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="partner"
            className="h-28 object-contain opacity-70 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>

      {/* animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default OurPartners;