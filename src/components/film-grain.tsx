export function FilmGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.02]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
      aria-hidden="true"
    />
  );
}

export function GoldenRatioWatermark() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.03] select-none">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] text-foreground rotate-12"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M618,0 v382 h-382 v-382 z" />
        <path d="M236,382 h382 v236 h-382 z" />
        <path d="M618,382 v236 h236 v-236 z" />
        <path d="M618,146 h236 v236 h-236 z" />
        <path d="M764,146 v89 h-89 v-89 z" />
        {/* Simplified spiral path representing the Fibonacci progression */}
        <path d="M236,0 Q618,0 618,382 T854,618 T618,854 T382,618 T236,382" />
      </svg>
    </div>
  );
}
