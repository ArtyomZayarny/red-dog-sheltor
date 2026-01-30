import { useState } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/custom-button";
import { DogCard } from "@/components/features/DogCard";
import { useDogs } from "@/hooks/use-dogs";
import { ArrowLeft, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterStatus = 'all' | 'available' | 'under_guardianship' | 'in_family';

export default function Guardianship() {
  const { data: dogs, isLoading } = useDogs();
  const [filter, setFilter] = useState<FilterStatus>('all');

  const filteredDogs = dogs?.filter(dog => {
    if (filter === 'all') return true;
    return dog.adoptionStatus === filter;
  });

  const filters: { id: FilterStatus; label: string }[] = [
    { id: 'all', label: 'Всі' },
    { id: 'available', label: 'Шукають опікуна' },
    { id: 'under_guardianship', label: 'Під опікою' },
    { id: 'in_family', label: 'В родині' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 pl-0 text-stone-500 hover:text-primary hover:bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" /> На головну
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-secondary mb-6">
            Опікунство
          </h1>
          <p className="text-stone-500 text-xl max-w-2xl">
            Оберіть друга, про якого хочете піклуватися. Ви можете стати віртуальним опікуном або забрати собаку в родину.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-stone-200 text-stone-400 mr-2">
            <Filter size={20} />
          </div>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300 border",
                filter === f.id
                  ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20 scale-105"
                  : "bg-white text-stone-600 border-stone-200 hover:border-primary/50 hover:text-primary"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-stone-100 rounded-[40px] h-[500px] animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDogs?.map(dog => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        )}

        {filteredDogs?.length === 0 && (
          <div className="text-center py-24 bg-stone-50 rounded-[40px]">
            <p className="text-stone-400 text-xl font-medium">За цим фільтром нікого не знайдено 😔</p>
            <Button variant="link" onClick={() => setFilter('all')} className="mt-4 text-primary">
              Скинути фільтри
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
