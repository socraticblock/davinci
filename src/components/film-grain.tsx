export function FilmGrain() {
  return (
    <>
      {/* Primary Noise Layer */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.07] mix-blend-alternate"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />
      
      {/* Subtle Texture/Paper Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-[99] h-full w-full opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.02' numOctaves='2' result='turbulence'/%3E%3CfeDisplacementMap in2='turbulence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperFilter)' fill='%23000'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Sfumato Vignette - Adds depth to the page edges */}
      <div 
        className="pointer-events-none fixed inset-0 z-[98] h-full w-full"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(28, 28, 28, 0.02) 100%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
