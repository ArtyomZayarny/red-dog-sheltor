import { Link, useLocation } from "wouter";
import { Instagram, Facebook, Send } from "lucide-react"; // Send as Telegram alternative
import { cn } from "@/lib/utils";

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
        <Link href="/" className="flex items-center group">
           <img
             src="/assets/logo.png"
             alt="Рудий Пес"
             className="h-16 w-auto group-hover:scale-105 transition-transform"
           />
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
          <a href="https://www.instagram.com/rudyi_pes_shelter/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com/groups/697113697558151/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <Facebook size={18} />
          </a>
          <a href="https://t.me/RedDogShelterbot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <Send size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
