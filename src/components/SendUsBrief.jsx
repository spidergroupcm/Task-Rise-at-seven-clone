import React from 'react';

const SendUsBrief = () => {
  const items = [
    { text: "Chasing Consumers", img: "https://i.ibb.co.com/67Rt7y8P/1.png" },
    { text: "Not Algorithms", img: "https://i.ibb.co.com/spk2L2Dm/2.png" },
  ];

  // We double the array to ensure the loop is seamless
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative flex overflow-x-hidden bg-[#f0f0f0] py-10">
      {/* Custom Animation Style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>

      <div className="flex animate-marquee whitespace-nowrap items-center">
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <img
              src={item.img}
              alt={item.text}
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-[2.5rem] shadow-sm"
            />
            <span className="text-6xl md:text-8xl font-bold tracking-tighter text-black ml-8">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendUsBrief;