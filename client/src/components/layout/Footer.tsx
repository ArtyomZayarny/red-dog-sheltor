import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 py-12 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <img
            src="/assets/logo.png"
            alt="Рудий Пес"
            className="h-16 w-auto"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-8 text-stone-600 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Головна</Link>
          <Link href="/guardianship" className="hover:text-primary transition-colors">Опікунство</Link>
          <Link href="/help" className="hover:text-primary transition-colors">Допомога притулку</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Про нас</Link>
        </div>
        <p className="text-stone-400 text-sm">
          © 2024 Рудий Пес. Усі права захищено.
        </p>
      </div>
    </footer>
  );
}
