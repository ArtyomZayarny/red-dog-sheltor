import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/custom-button";
import { Bone, Stethoscope, Home } from "lucide-react";

export default function Help() {
  const cards = [
    {
      title: "Корм та смаколики",
      icon: Bone,
      description: "Ми завжди потребуємо сухого корму для собак, консервів та жувальних смаколиків для тренувань.",
      action: "Задонатити",
      link: "https://send.monobank.ua/jar/7761jKuD44"
    },
    {
      title: "Лікування",
      icon: Stethoscope,
      description: "Медикаменти, обробка від паразитів та вакцинація - це постійні витрати, які рятують життя.",
      action: "Задонатити",
      link: "https://send.monobank.ua/jar/9WN9LchTho"
    },
    {
      title: "Потреби притулку",
      icon: Home,
      description: "Миючі засоби, підстилки, будівельні матеріали для вольєрів та інвентар для прибирання.",
      action: "Задонатити",
      link: "https://send.monobank.ua/jar/5b3DtLXZvK"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="bg-secondary rounded-[48px] p-12 md:p-20 text-center mb-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">Допомога притулку</h1>
            <p className="text-stone-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Притулок існує завдяки небайдужим людям. Кожна гривня, кожна банка корму і кожна година вашого часу важливі для наших підопічних.
            </p>
          </div>
          {/* Decor */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="w-16 h-16 bg-[#FDFBF7] rounded-2xl flex items-center justify-center text-primary mb-8">
                <card.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-secondary mb-4">{card.title}</h3>
              <p className="text-stone-500 mb-8 leading-relaxed flex-grow">
                {card.description}
              </p>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="w-full rounded-full">
                  {card.action}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
