import { Link } from "wouter";
import { Button } from "@/components/ui/custom-button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FDFBF7] p-4">
      <Card className="w-full max-w-md mx-auto rounded-[32px] shadow-xl border-none">
        <CardContent className="pt-12 pb-12 px-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-primary mb-6">
            <AlertCircle size={40} />
          </div>

          <h1 className="text-8xl font-display font-bold text-secondary mb-2">404</h1>
          <h2 className="text-2xl font-bold text-stone-700 mb-4">Сторінку не знайдено</h2>
          
          <p className="text-stone-500 mb-8">
            Схоже, цей песик втік в іншому напрямку. Давайте повернемося на головну.
          </p>

          <Link href="/">
            <Button size="lg" className="rounded-full w-full">
              На головну
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
