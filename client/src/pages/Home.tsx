import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/custom-button";
import { DogCard } from "@/components/features/DogCard";
import { useDogs } from "@/hooks/use-dogs";
import { ArrowRight, HeartHandshake } from "lucide-react";
import heroImage from "/assets/hero-image.png";

export default function Home() {
  const { data: dogs, isLoading } = useDogs();

  // Preview only 3 available dogs
  const previewDogs = dogs 
    ? dogs.filter(d => d.status === 'available').slice(0, 3) 
    : [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-8 pb-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="bg-[#1E1E1E] rounded-[48px] p-8 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              
              <div className="md:w-1/2 z-10 space-y-8">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white">
                  Знайди свого <br/>
                  <span className="text-primary">найкращого</span> друга
                </h1>
                <p className="text-stone-300 text-lg md:text-xl max-w-md leading-relaxed">
                  Ми допомагаємо безпритульним собакам знайти люблячі родини. Приєднуйся до нашої місії добра.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/help">
                    <Button size="lg" className="text-lg">
                      Допомогти притулку
                    </Button>
                  </Link>
                  <Link href="/guardianship">
                    <Button size="lg" variant="white" className="text-lg">
                      Взяти під опіку
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 relative z-10 flex justify-center">
                 {/* Hero Image */}
                 <div className="relative w-full max-w-md aspect-square">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
                    <img 
                      src={heroImage} 
                      alt="Happy dog" 
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                 </div>
              </div>

              {/* Decor */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </section>

        {/* INFO SECTION */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-[#E78B3F]/10 rounded-[48px] p-12 md:p-24 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
              <HeartHandshake className="w-24 h-24 text-primary mb-4" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary max-w-3xl">
                Стань віртуальним опікуном
              </h2>
              <p className="text-stone-600 text-xl max-w-2xl">
                Не маєш можливості забрати собаку додому? Не проблема! Ти можеш стати віртуальним опікуном, підтримуючи обраного улюбленця фінансово та навідуючи його.
              </p>
              <Link href="/guardianship">
                <Button size="lg" className="mt-4">
                  Обрати підопічного <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* DOGS PREVIEW */}
        <section className="py-16 pb-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-secondary mb-4">Наші хвостики</h2>
                <p className="text-stone-500 text-lg">Вони чекають на знайомство з тобою</p>
              </div>
              <Link href="/guardianship">
                <Button variant="link" className="text-primary text-lg hidden md:inline-flex">
                  Показати всіх <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-stone-100 rounded-[40px] h-[500px] animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {previewDogs.map(dog => (
                  <DogCard key={dog.id} dog={dog} />
                ))}
              </div>
            )}

            <div className="mt-12 text-center md:hidden">
              <Link href="/guardianship">
                <Button variant="outline" size="lg" className="w-full rounded-full">
                  Показати всіх
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
