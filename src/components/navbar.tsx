export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-transparent border-b border-neutral-200/20">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-wide font-extrabold text-foreground">
          DaVinci Dental
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#reviews" className="hover:text-accent transition-colors">Standard</a>
        </nav>
        <a 
          href="#contact" 
          className="border border-neutral-800 px-6 py-2 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
        >
          Book
        </a>
      </div>
    </header>
  );
}
