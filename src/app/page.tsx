"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Navbar } from "@/components/navbar";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const imageScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center overflow-hidden pt-20">
        <HeroSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section className="w-full max-w-7xl px-8 py-32 flex flex-col items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full flex justify-center items-center flex-col text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground max-w-5xl leading-tight"
        >
          Simplicity is the ultimate sophistication.
        </motion.h1>
        
        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg md:text-xl text-neutral-600 font-sans tracking-wide max-w-2xl"
        >
          DaVinci Dental Clinic. Precision in every detail. Sophistication in every smile.
        </motion.p>
        
        <motion.div
          variants={imageScale}
          className="mt-20 w-full aspect-video bg-neutral-900 animate-pulse rounded-sm overflow-hidden relative"
        >
          {/* 16:9 Black Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <span className="text-white tracking-widest uppercase text-xs">Visual Placeholder</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="w-full max-w-7xl px-8 py-32 border-t border-neutral-200/50">
      <div className="mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">The Vitruvian Standard</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Card 1 */}
        <div className="md:col-span-4 md:row-span-2 group min-h-[300px] border-[0.5px] border-neutral-200 hover:border-accent transition-colors duration-500 relative flex flex-col overflow-hidden p-6 cursor-pointer">
          <div className="absolute inset-0 bg-neutral-900 animate-pulse -z-10 group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
          <div className="mt-auto">
            <h3 className="text-white font-serif text-2xl">Aesthetic Restoration</h3>
            <p className="text-neutral-400 text-sm mt-2 font-sans tracking-wide">The intersection of art and dentistry.</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="md:col-span-2 md:row-span-1 group min-h-[250px] border-[0.5px] border-neutral-200 hover:border-accent transition-colors duration-500 relative flex flex-col overflow-hidden p-6 cursor-pointer">
           <div className="absolute inset-0 bg-neutral-900/90 animate-pulse -z-10 group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
           <div className="mt-auto">
            <h3 className="text-white font-serif text-xl">Implantology</h3>
            <p className="text-neutral-400 text-xs mt-2 font-sans tracking-wide">Structural integrity.</p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="md:col-span-2 md:row-span-1 group min-h-[250px] border-[0.5px] border-neutral-200 hover:border-accent transition-colors duration-500 relative flex flex-col overflow-hidden p-6 cursor-pointer">
           <div className="absolute inset-0 bg-neutral-900/80 animate-pulse -z-10 group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
           <div className="mt-auto">
            <h3 className="text-white font-serif text-xl">Prevention</h3>
            <p className="text-neutral-400 text-xs mt-2 font-sans tracking-wide">Lasting sophistication.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    "Artistic precision.",
    "Best in Tbilisi.",
    "Uncompromising quality.",
    "True craftsmanship.",
    "A masterful approach.",
    "Redefining dental care."
  ];

  return (
    <section id="reviews" className="w-full py-40 bg-foreground text-background overflow-hidden flex flex-col items-center">
      <h2 className="font-serif text-sm tracking-[0.3em] uppercase text-neutral-400 mb-16">The 5.0 Standard</h2>
      
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...reviews, ...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center mx-16">
              <div className="flex space-x-1 mb-4 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-serif text-2xl italic">"{review}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-4xl px-8 py-32 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-foreground mb-4">Experience Perfection</h2>
        <p className="text-neutral-500 font-sans">A frictionless introduction.</p>
      </div>
      
      <form className="w-full flex flex-col gap-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
        <div className="w-full">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-transparent border-b border-neutral-300 py-3 font-sans text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        
        <div className="w-full">
          <input 
            type="tel" 
            placeholder="Phone" 
            className="w-full bg-transparent border-b border-neutral-300 py-3 font-sans text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        
        <div className="w-full relative">
          <select 
            className="w-full appearance-none bg-transparent border-b border-neutral-300 py-3 font-sans text-neutral-400 focus:text-foreground focus:outline-none focus:border-accent transition-colors rounded-none"
            defaultValue=""
          >
            <option value="" disabled>Select Treatment</option>
            <option value="aesthetic">Aesthetic Restoration</option>
            <option value="implant">Implantology</option>
            <option value="prevention">Prevention</option>
          </select>
          {/* Custom Chevron since appearance-none removes default */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
            ▼
          </div>
        </div>

        <MagneticButton>
          <button 
            type="submit" 
            className="w-full mt-8 bg-foreground text-background py-4 uppercase tracking-[0.2em] font-sans text-sm hover:scale-105 active:scale-95 transition-transform duration-300 spring-bounce"
          >
            Submit Request
          </button>
        </MagneticButton>
      </form>
    </section>
  );
}

function MagneticButton({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
