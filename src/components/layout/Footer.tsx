export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-white/10 glass mt-12 block py-8 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between sm:flex-row gap-4">
        
        <p className="text-sm text-silver font-mono">
          &copy; {currentYear} [AU] PORTFOLIO.SYS.
        </p>

        <div className="flex items-center space-x-2 text-xs text-muted-foreground font-mono">
          <span className="text-petronas">BUILT_WITH</span>
          <span>::</span>
          <span>NEXT.JS 15</span>
          <span>//</span>
          <span>FRAMER MOTION</span>
        </div>
      </div>
    </footer>
  );
}
