export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-background/30 border-b border-neutral-200/20">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-[0.05em] font-bold text-foreground">
          DAVINCI
        </div>
        <nav className="hidden md:flex items-center space-x-12 text-[10px] font-medium tracking-[0.3em] uppercase opacity-70">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#reviews" className="hover:text-accent transition-colors">Standard</a>
        </nav>
        <a 
          href="#contact" 
          className="group relative border border-foreground/20 px-8 py-2.5 text-[10px] uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">Book</span>
          <div className="absolute inset-0 bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        </a>
      </div>
    </header>
  );
}
