import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../Images/rize-seven.png";

const HeroSection = () => {
  // Array of your provided images
  const images = [
    "https://i.ibb.co.com/Jw1Bc0HT/Home.jpg",
    "https://i.ibb.co.com/5xrLfrWy/Summer.jpg",
    "https://i.ibb.co.com/Qjn2YSrS/Desert.jpg",
    "https://i.ibb.co.com/FbwjKZc8/Space.jpg",
    "https://i.ibb.co.com/0y0hnBKc/Red-Bull.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic to rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-6 w-full">
      {/* Container with dynamic blurred background */}
      <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex flex-col text-white transition-all duration-700 ease-in-out">
        
        {/* The Blurred Background Layer */}
        <div 
          className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out scale-110"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(40px) brightness(0.6)' // Adjust blur and brightness here
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 px-5 py-10 flex flex-col h-full">
          
          {/* Top bar */}
          <nav className="flex items-center justify-between w-full py-6 px-2">
            <div className="flex-1 flex justify-start">
              <img src={logo} alt="Rise at Seven" className="h-8 w-auto object-contain" />
            </div>

            <div className="flex-1 flex justify-center">
              <p className="text-center text-[14px] md:text-[20px] font-bold uppercase tracking-[0.2em] leading-tight text-white">
                #1 Most Recommended <br /> 
                <span className="opacity-80">Content Marketing Agency</span>
              </p>
            </div>

            <div className="flex-1 flex justify-end">
              <button className="text-white hover:opacity-70 transition-opacity focus:outline-none">
                <RxHamburgerMenu className="text-3xl md:text-4xl" />
              </button>
            </div>
          </nav>

          {/* Award Bar (Example placeholder) */}
          <div className="flex justify-center gap-6 my-4 opacity-80">
             {/* Add your award SVG icons here */}
             <span className="text-xs uppercase tracking-widest">Global Search Awards</span>
             <span className="text-xs uppercase tracking-widest">The Drum</span>
          </div>

          {/* Main Heading */}
          <div className="text-center flex-grow flex flex-col justify-center">
            <h2 className="text-5xl md:text-8xl font-bold leading-tight">
              We Create
            </h2>

            <h2 className="text-5xl md:text-8xl font-bold leading-tight flex items-center justify-center gap-4 flex-wrap">
              Category
              
              {/* Animated Image Container */}
              <div className="w-16 h-16 md:w-28 md:h-28 overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl">
                <img
                  src={images[currentIndex]}
                  alt="dynamic-category"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              
              Leaders
            </h2>
          </div>

          {/* Bottom text */}
          <p className="text-center mt-6 text-sm md:text-xl font-medium opacity-90 max-w-2xl mx-auto">
            4 Global Offices serving <br />
            UK, USA, New York & more on every searchable platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




// import React from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import logo from "../Images/rize-seven.png";

// const HeroSection = () => {
//   return (
//     <div className="px-4 mt-6 w-full">
//       <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0b1a4a] via-[#1e3a8a] to-gray-400 text-white">

//         {/* Overlay blur effect */}
//         <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>

//         {/* Content */}
//         <div className="relative z-10 px-5 py-10">

         

//             {/* Top bar */}
//             <nav className="flex items-center justify-between w-full py-6 px-2">

//               {/* Left: Logo - Fixed width container to balance with the right side */}
//               <div className="flex-1 flex justify-start">
//                 <img src={logo} alt="Rise at Seven" className="h-8 w-auto object-contain" />
//               </div>

//               {/* Center: Hero Text - Absolute centering or flex-1 with text-center */}
//               <div className="flex-1 flex justify-center">
//                 <p className="text-center text-[20px] font-bold uppercase tracking-[0.2em] leading-tight text-white">
//                   #1Most Recommended <br /> 
//                   <span className="opacity-80">Content Marketing Agency</span>
//                 </p>
//               </div>

//               {/* Right: Menu Icon - Fixed width container matching the left */}
//               <div className="flex-1 flex justify-end">
//                 <button className="text-white hover:opacity-70 transition-opacity focus:outline-none">
//                   <RxHamburgerMenu className="text-3xl md:text-4xl" />
//                 </button>
//               </div>

//             </nav>


//           {/* Award Bar */}
//           <div className="bg-red-500">
//             <h1>Award</h1>
//           </div>

//           {/* Main Heading */}
//           <div className="text-center bg-amber-400">
//             <h2 className="text-4xl md:text-7xl font-bold leading-tight">
//               We Create
//             </h2>

//             <h2 className="text-4xl md:text-7xl font-bold leading-tight flex items-center justify-center gap-3 flex-wrap">
//               Category
//               {/* Image inside text */}
//               <img
//                 src="https://i.ibb.co/3W3QZ5p/redbull.png"
//                 alt="product"
//                 className="w-10 md:w-16 h-auto rounded-lg"
//               />
//               Leaders
//             </h2>
//           </div>

//           {/* Bottom text */}
//           <p className=" bg-green-400 text-center mt-6 text-sm md:text-lg opacity-90">
//             4 Global Offices serving <br />
//             UK, USA, New York & more on every searchable platform
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;