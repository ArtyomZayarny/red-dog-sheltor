import { Link, useLocation } from "wouter";
import { Instagram, Facebook, Send } from "lucide-react"; // Send as Telegram alternative
import { cn } from "@/lib/utils";
import logoImg from "/assets/logo.svg";

export function Header() {
  const [location] = useLocation();

  const navItems = [
    { label: "Головна", href: "/" },
    { label: "Опікунство", href: "/guardianship" },
    { label: "Допомога притулку", href: "/help" },
    { label: "Про нас", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
           {/* Fallback if SVG missing, but intended for /assets/logo.svg */}
           <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
             P
           </div>
           <span className="font-display font-bold text-xl text-secondary tracking-tight">
             PawGuard
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div 
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer",
                  location === item.href 
                    ? "bg-secondary text-white shadow-md" 
                    : "text-stone-600 hover:bg-stone-100 hover:text-secondary"
                )}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <Send size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
