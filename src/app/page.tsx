"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { clsx } from "clsx";

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
        {/* Card 1: Aesthetic Restoration */}
        <ServiceCard 
          className="md:col-span-4 md:row-span-2"
          label="Aesthetic Restoration"
          description="The intersection of art and dentistry."
          sketchSrc="/images/sketch-teeth.png"
          photoSrc="/images/photo-teeth.png"
        />
        
        {/* Card 2: Implantology */}
        <ServiceCard 
          className="md:col-span-2 md:row-span-1"
          label="Implantology"
          description="Structural integrity."
          sketchSrc="/images/sketch-implant.png"
          photoSrc="/images/photo-implant.png"
          small
        />
        
        {/* Card 3: Prevention */}
        <ServiceCard 
          className="md:col-span-2 md:row-span-1"
          label="Prevention"
          description="Lasting sophistication."
          sketchSrc="/images/sketch-teeth.png" 
          photoSrc="/images/photo-teeth.png"
          small
        />
      </div>
    </section>
  );
}

function ServiceCard({ 
  className, 
  label, 
  description, 
  sketchSrc, 
  photoSrc, 
  small = false 
}: { 
  className: string; 
  label: string; 
  description: string; 
  sketchSrc: string; 
  photoSrc: string; 
  small?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={clsx(
        "group relative flex flex-col overflow-hidden border-[0.5px] border-neutral-200 transition-all duration-700 cursor-pointer",
        isHovered ? "border-accent" : "border-neutral-200",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sketch Layer (Art) */}
      <div 
        className={clsx(
          "absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out",
          isHovered ? "opacity-0" : "opacity-100"
        )}
      >
        <img 
          src={sketchSrc} 
          alt={label} 
          className="w-full h-full object-cover grayscale opacity-80" 
        />
        <div className="absolute inset-0 bg-background/20 mix-blend-multiply" />
      </div>

      {/* Photo Layer (Reality) */}
      <div 
        className={clsx(
          "absolute inset-0 z-0 transition-all duration-1000 ease-in-out scale-110",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-110"
        )}
      >
        <img 
          src={photoSrc} 
          alt={label} 
          className="w-full h-full object-cover" 
        />
        {/* Subtle overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Label/Description Content */}
      <div className="mt-auto p-6 z-20 relative">
        <h3 className={clsx(
          "font-serif transition-colors duration-500",
          isHovered || !small ? "text-white" : "text-foreground",
          small ? "text-xl" : "text-2xl md:text-3xl"
        )}>
          {label}
        </h3>
        <p className={clsx(
          "text-sm mt-2 font-sans tracking-wide transition-colors duration-500",
          isHovered || !small ? "text-neutral-300" : "text-neutral-500"
        )}>
          {description}
        </p>
      </div>

      {/* Animated Corner Border (Gold) */}
      <div className={clsx(
        "absolute top-0 right-0 w-8 h-8 border-t border-r border-accent transition-all duration-500 opacity-0",
        isHovered ? "opacity-100 translate-x-0 translate-y-0" : "translate-x-2 -translate-y-2"
      )} />
    </div>
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
