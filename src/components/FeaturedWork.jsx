import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import { LuTrendingUp } from "react-icons/lu";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: "SIXT", year: "2023-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=4fc6345587184c87793709b9ccab3b72", color: "bg-[#CB7B3A]", desc: "An extra 3m clicks regionally through SEO.", bottomTag: "Car rental" },
    { id: 2, title: "Dojo - B2B", year: "2021-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592", color: "bg-[#FDD8C4]", desc: "A B2B success story for Dojo card machines", bottomTag: "Card Machines" },
    { id: 3, title: "Magnet Trade - B2B", year: "2023-2024", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=613668eb3a49745dfdb40ebf0c01086f", color: "bg-[#D8C4FD]", desc: "A full service SEO success story 170%+ increase", bottomTag: "SEO Growth" },
    { id: 4, title: "Leading E Sim", year: "2023-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=05dc6e7996a060df26c1aa2d95b30bf0", color: "bg-[#CB7B3A]", desc: "Increasing brand and non brand visibility UK/ES", bottomTag: "Esimas" },
    { id: 5, title: "Brand Globally", year: "2024", image: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=700eec41cd4af9ef431abdad699e4e0d", color: "bg-[#3A8CCB]", desc: "65% up YoY in clicks for JDSports FR, IT, ES.", bottomTag: "Trainers" },
    { id: 6, title: "JD Sports", year: "2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb", color: "bg-[#D2DCE6]", desc: "Dominating Google and AI search", bottomTag: "Easter Breaks" },
    { id: 7, title: "Parkdean Resorts", year: "2019-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=32d3a406e70332628dd96604f55c0b5c", color: "bg-[#39B0BD]", desc: "Driving demand for Pooky Rechargeable Lights", bottomTag: "Rechargeable Lights" }
];

const FeaturedWork = () => {
    const sectionRef = useRef(null);
    const imageScrollRef = useRef(null);
    const cursorRef = useRef(null);
    const containerRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [isOverCard, setIsOverCard] = useState(false);

    // Custom Cursor logic
    useEffect(() => {
        if (window.innerWidth < 1024 || !cursorRef.current) return;

        if (isOverCard) {
            document.body.style.cursor = 'none';
            gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
        } else {
            document.body.style.cursor = 'auto';
            gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.2 });
        }
    }, [isOverCard]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cursorRef.current && window.innerWidth >= 1024) {
                gsap.set(cursorRef.current, { x: e.clientX, y: e.clientY });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Calculate how far the images need to scroll
            const imageHeight = imageScrollRef.current.scrollHeight;
            const viewportHeight = sectionRef.current.offsetHeight;

            gsap.to(imageScrollRef.current, {
                y: -(imageHeight - viewportHeight),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${projects.length * 600}`, // Duration of the sticky effect
                    scrub: 1,
                    pin: true,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="px-4 py-4 mt-10">
            <div ref={containerRef} className="bg-black text-white relative rounded-[3rem] overflow-hidden">
                
                {/* Custom Cursor */}
                <div
                    ref={cursorRef}
                    style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none', xPercent: -50, yPercent: -50, opacity: 0, scale: 0 }}
                    className="hidden lg:flex items-center justify-center w-28 h-28 rounded-full bg-[#B2F6E3] text-black shadow-2xl"
                >
                    <MdOutlineArrowOutward className="text-3xl font-bold" />
                </div>

                <section ref={sectionRef} className="h-[90vh] flex flex-col items-center overflow-hidden relative">
                    {/* Header centered */}
                    <div className="absolute top-10 left-10 z-20">
                        <p className="text-[18px] md:text-[22px] font-medium text-white/50 uppercase tracking-widest">Featured Work</p>
                    </div>

                    <div className="w-full h-full flex justify-center">
                        {/* Center Column Image Display (Mobile View style for all) */}
                        <div className="w-full  h-full relative overflow-hidden px-5 py-20">
                            <div ref={imageScrollRef} className="flex flex-col gap-10 md:gap-20">
                                {projects.map((item) => (
                                    <div
                                        key={item.id}
                                        onMouseEnter={() => { setIsOverCard(true); setHoveredId(item.id); }}
                                        onMouseLeave={() => { setIsOverCard(false); setHoveredId(null); }}
                                        className="w-full h-[400px] md:h-[600px] lg:h-[700px] flex-shrink-0 relative rounded-[2.5rem] overflow-hidden border border-white/10 group"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 
                                                ${hoveredId === item.id ? 'scale-110 blur-[2px]' : 'scale-100'}`}
                                        />

                                        {/* Mobile-style labels (Visible when not hovered) */}
                                        <div className={`absolute bottom-8 left-8 z-30 transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-0' : 'opacity-100'}`}>
                                            <p className="text-white/60 text-xs font-mono mb-1">[{item.year}]</p>
                                            <h3 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tighter">{item.title}</h3>
                                        </div>

                                        {/* Desktop Hover Overlay (The "Effect") */}
                                        <div
                                            className={`absolute inset-0 z-10 ${item.color} flex items-center justify-center p-10 text-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]`}
                                            style={{
                                                clipPath: hoveredId === item.id 
                                                    ? 'circle(150% at 50% 50%)' 
                                                    : 'circle(0% at 50% 50%)'
                                            }}
                                        >
                                            <div className={`max-w-xl transition-all duration-700 delay-100 ${hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                                <p className="text-[24px] md:text-[40px] font-bold leading-tight text-black">
                                                    {item.desc}
                                                </p>
                                                <div className="mt-8 flex justify-center">
                                                    <span className="px-6 py-2 border border-black/20 rounded-full text-black font-semibold uppercase text-sm">
                                                        View Project
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Search Tag */}
                                        <div className="absolute top-6 right-6 z-20">
                                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                                                <FaSearch className="text-xs" />
                                                <span className="text-[12px] font-bold uppercase tracking-wider">{item.bottomTag}</span>
                                                <LuTrendingUp />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturedWork;

