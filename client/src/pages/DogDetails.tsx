import { useRoute, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/custom-button";
import { useDog } from "@/hooks/use-dogs";
import { ArrowLeft, Phone, Heart } from "lucide-react";
import { InquiryModal } from "@/components/features/InquiryModal";

export default function DogDetails() {
  const [match, params] = useRoute("/dogs/:slug");
  const { data: dog, isLoading, error } = useDog(params?.slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
      </div>
    );
  }

  if (error || !dog) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl font-display font-bold mb-4">Ой!</h1>
          <p className="text-stone-500 mb-8">Такого песика не знайдено.</p>
          <Link href="/guardianship">
            <Button>Повернутися до списку</Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Link href="/guardianship">
          <Button variant="ghost" className="mb-8 pl-0 text-stone-500 hover:text-primary hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" /> Назад до списку
          </Button>
        </Link>

        <div className="bg-white rounded-[48px] p-6 md:p-12 shadow-sm border border-stone-100 flex flex-col lg:flex-row gap-12">
          {/* Image Side */}
          <div className="lg:w-1/2">
            <div className="aspect-[4/5] w-full rounded-[40px] overflow-hidden bg-stone-100 relative group">
              <img
                src={dog.image || "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop"}
                alt={dog.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-secondary font-bold text-lg shadow-sm">
                {dog.age}
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-8">
              <h1 className="text-6xl font-display font-bold text-secondary mb-4">{dog.name}</h1>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-full">
                  {dog.gender}
                </span>
                {(dog.tags || []).map(tag => (
                  <span key={tag} className="bg-stone-100 text-stone-600 px-4 py-2 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-stone text-lg text-stone-600 mb-12">
              <p>{dog.description}</p>
            </div>

            <div className="mt-auto space-y-6">
              <div className="bg-[#FDFBF7] p-8 rounded-[32px] border border-stone-100">
                <p className="text-stone-500 font-medium mb-1">Вартість опіки</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-primary">{dog.priceMonthly} ₴</span>
                  <span className="text-stone-400">/ місяць</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 h-14 text-lg rounded-full" disabled={dog.status !== 'available'}>
                  {dog.status === 'available' ? 'Забрати додому' : 'Недоступний'}
                </Button>
                
                {dog.status === 'available' && (
                  <InquiryModal 
                    dogName={dog.name}
                    trigger={
                      <Button variant="secondary" className="flex-1 h-14 text-lg rounded-full">
                        <Heart className="mr-2 h-5 w-5" /> Взяти під опіку
                      </Button>
                    }
                  />
                )}
              </div>

              <div className="flex items-center justify-center gap-2 text-stone-400 pt-4">
                <Phone size={16} />
                <span className="text-sm">Телефон куратора: {dog.curatorPhone}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
