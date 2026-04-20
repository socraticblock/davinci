"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Star } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { clsx } from "clsx";
import { GoldenRatioWatermark } from "@/components/film-grain";

// Stagger Animation Variants
const revealContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const settleUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const, // Custom luxury cubic-bezier (expo-out)
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-8 pt-20">
      <GoldenRatioWatermark />

      <motion.div
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-6xl relative z-10"
      >
        <motion.h1
          variants={settleUp}
          className="font-serif text-[clamp(2.5rem,8vw,6.5rem)] leading-[1.1] tracking-tight text-foreground mb-12"
        >
          Simplicity is the <br /> ultimate sophistication.
        </motion.h1>
        
        <motion.div variants={settleUp} className="flex flex-col items-center">
          <div className="h-20 w-[1px] bg-foreground/10 mb-12" />
          <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-500 max-w-md leading-loose">
            DaVinci Dental Clinic. Precision in every detail. <br />
            Sophistication in every smile.
          </p>
        </motion.div>
      </motion.div>

      {/* Massive whitespace buffer to the next section */}
      <div className="h-[20vh]" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative w-full max-w-7xl px-8 py-40">
      {/* Decorative background element to be blurred by glass */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-24 flex items-end justify-between border-b border-neutral-200 pb-8"
      >
        <div className="max-w-xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-4 block font-sans">The Vitruvian Standard</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Curated Restoration</h2>
        </div>
        <p className="hidden md:block text-[11px] uppercase tracking-[0.2em] text-neutral-400 max-w-[200px] text-right leading-relaxed text-pretty">
          Every procedure is a masterpiece of dental engineering.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
        {/* Card 1: Aesthetic Restoration */}
        <BentoCard 
          className="md:col-span-4 md:row-span-2"
          label="Aesthetic Restoration"
          subtext="The intersection of art and anatomy."
        />
        
        {/* Card 2: Implantology */}
        <BentoCard 
          className="md:col-span-2 md:row-span-1"
          label="Implantology"
          subtext="Structural integrity."
        />
        
        {/* Card 3: Prevention */}
        <BentoCard 
          className="md:col-span-2 md:row-span-1"
          label="Prevention"
          subtext="Lasting sophistication."
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="w-full max-w-7xl px-8 py-48 flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Text Content */}
        <motion.div
           variants={revealContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col"
        >
          <motion.span variants={settleUp} className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6 font-sans">
            Architectural Mastery
          </motion.span>
          <motion.h2 variants={settleUp} className="font-serif text-5xl md:text-6xl text-foreground mb-4">
            The Lead Clinical <br /> Architect
          </motion.h2>
          <motion.span variants={settleUp} className="text-xl font-serif text-foreground/60 mb-12 italic">
            Dr. Nikoloz Jorjikashvili
          </motion.span>
          
          <motion.p variants={settleUp} className="text-sm text-neutral-500 leading-loose max-w-lg mb-16 font-sans">
            Dr. Nikoloz Jorjikashvili leads the DaVinci studio with over a decade of clinical mastery. Specializing in the delicate intersection of structural orthodontics and facial aesthetics, his approach treats every case as a unique anatomical challenge. By harmonizing scientific precision with an artist’s eye, he delivers transformations that are as functionally sound as they are visually stunning.
          </motion.p>
          
          <div className="space-y-12">
            <motion.div variants={settleUp} className="flex flex-col">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-foreground font-bold mb-3 font-sans">Clinical Focus & Mastery</h3>
              <p className="font-serif text-2xl text-foreground opacity-80">The Vitruvian Standard of Care</p>
            </motion.div>
            
            <motion.p variants={settleUp} className="text-sm text-neutral-400 leading-loose max-w-md font-sans">
              Our practice is dedicated to the philosophy that a smile is a masterpiece of engineering. With 10+ years of treating complex clinical cases, Dr. Jorjikashvili has defined a new standard for natural restoration in Tbilisi, ensuring every patient receives a result that is uniquely theirs.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm group bg-neutral-200"
        >
          {/* Portrait Image with Luxury Grayscale-to-Color Transition */}
          <img 
            src="/images/dr-nikoloz.png" 
            alt="Dr. Nikoloz Jorjikashvili" 
            className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
          />
          
          {/* Glass frame overlay */}
          <div className="absolute inset-0 border border-white/10 group-hover:border-accent/40 transition-colors duration-700" />
          
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({ className, label, subtext }: { className: string, label: string, subtext: string }) {
  return (
    <motion.div 
      variants={settleUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={clsx(
        "group relative overflow-hidden bg-white/5 backdrop-blur-2xl cursor-pointer transition-all duration-700 rounded-lg",
        className
      )}
    >
      {/* Background Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
      
      {/* Central Placeholder Indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-1000">
        <span className="text-[9px] uppercase tracking-[0.4em] text-foreground font-bold font-sans">
          placeholder to be added
        </span>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
        <div className="relative z-10">
          <h3 className="font-serif text-3xl text-foreground mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">{label}</h3>
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700 delay-100">{subtext}</p>
        </div>
      </div>

      {/* Glass Borders */}
      <div className="absolute inset-0 border border-white/20 rounded-lg group-hover:border-accent/40 shadow-inner transition-all duration-700" />
      
      {/* Dynamic Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
    </motion.div>
  );
}

function ReviewsSection() {
  const reviews = [
    "Great price, great service, friendly doctor and staff.",
    "I’m very happy about the quality and price.",
    "The staff were very attentive, explaining everything in detail.",
    "Great place! High quality specialists doing their job very well.",
    "ძალიან დიდი მადლობა, პროფესიონალების ჯგუფს.",
    "Buenos doctores, muy profesionales. Sonrisa perfecta!"
  ];

  return (
    <section id="reviews" className="w-full py-48 bg-[#F9F7F2]/30 backdrop-blur-sm border-y border-neutral-200/50 overflow-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-16"
      >
        <span className="text-[9px] tracking-[0.5em] uppercase text-accent font-bold mb-4 font-sans">
          Patron Testimony
        </span>
        <h2 className="font-serif text-2xl text-foreground opacity-80">The 5.0 Standard</h2>
      </motion.div>
      
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
          className="flex whitespace-nowrap items-center"
        >
          {[...reviews, ...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center mx-64">
              <div className="flex space-x-1 mb-6 text-accent/50">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={9} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-foreground tracking-wide italic opacity-80 text-center whitespace-normal leading-relaxed">
                "{review}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative w-full px-8 py-64 flex flex-col items-center justify-center overflow-hidden">
      {/* Background glass sphere */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 blur-[150px] -z-10 animate-pulse" />
      
      <motion.div 
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <motion.h2 variants={settleUp} className="font-serif text-4xl md:text-6xl text-foreground mb-6">Experience Perfection</motion.h2>
        <motion.p variants={settleUp} className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium font-sans">A frictionless introduction.</motion.p>
      </motion.div>
      
      <motion.div 
        variants={settleUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-xl p-12 bg-white/40 backdrop-blur-3xl border border-white/40 rounded-2xl shadow-2xl shadow-accent/5"
      >
        <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="w-full relative group">
              <label className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 mb-2 block font-bold font-sans">Patient Name</label>
              <input 
                type="text" 
                placeholder="Leonardo da Vinci" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 font-sans text-xs uppercase tracking-widest text-foreground placeholder:text-neutral-300 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            
            <div className="w-full relative group">
              <label className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 mb-2 block font-bold font-sans">Contact Phone</label>
              <input 
                type="tel" 
                placeholder="+995 000 000 000" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 font-sans text-xs uppercase tracking-widest text-foreground placeholder:text-neutral-300 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
          
          <div className="w-full relative group">
            <label className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 mb-2 block font-bold font-sans">Medical Service</label>
            <select 
              className="w-full appearance-none bg-transparent border-b border-neutral-200 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 focus:text-foreground focus:outline-none focus:border-accent transition-colors rounded-none"
              defaultValue=""
            >
              <option value="" disabled>Select Treatment</option>
              <option value="aesthetic">Aesthetic Restoration</option>
              <option value="implant">Implantology</option>
              <option value="prevention">Prevention</option>
            </select>
            <div className="absolute right-0 top-1/2 translate-y-1 text-neutral-300 text-[8px]">
              ▼
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full mt-8 bg-foreground text-background py-5 uppercase tracking-[0.5em] font-sans text-[10px] hover:bg-accent transition-colors duration-700 shadow-xl shadow-black/10 font-bold"
          >
            Schedule Consultation
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full max-w-7xl px-8 py-20 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between">
      <div className="font-serif text-xl tracking-[0.05em] font-bold mb-8 md:mb-0">
        DAVINCI
      </div>
      <div className="flex space-x-12 text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-sans">
        <p>© 2026 DAVINCI DENTAL</p>
        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
        <a href="#" className="hover:text-accent transition-colors">Terms</a>
      </div>
    </footer>
  );
}
