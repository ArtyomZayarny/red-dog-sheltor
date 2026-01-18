import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-display font-bold text-secondary mb-12 text-center">Про нас</h1>
          
          <div className="bg-white rounded-[48px] p-12 md:p-16 shadow-xl shadow-stone-200/50 relative overflow-hidden">
            <div className="absolute top-12 left-12 text-primary/10">
              <Quote size={120} />
            </div>

            <div className="relative z-10 space-y-10">
              <div>
                <h2 className="text-3xl font-display font-bold text-secondary mb-4">Наша мета</h2>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Ми віримо, що кожна собака заслуговує на люблячу родину. Наша місія - не просто знайти дім для безпритульних тварин, але й змінити ставлення суспільства до проблеми безпритульності через освіту та приклад гуманності.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Хто ми?</h3>
                  <p className="text-stone-500">
                    Команда волонтерів, ветеринарів та кінологів, які об'єдналися заради порятунку тварин. Ми працюємо 24/7, щоб забезпечити нашим підопічним найкращі умови.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Що ми робимо?</h3>
                  <ul className="text-stone-500 space-y-2 list-disc list-inside">
                    <li>Лікуємо та реабілітуємо</li>
                    <li>Соціалізуємо та навчаємо</li>
                    <li>Шукаємо відповідальних господарів</li>
                    <li>Підтримуємо нові родини порадами</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#FDFBF7] p-8 rounded-[32px] border border-stone-100">
                <p className="text-stone-600 italic text-center font-medium">
                  "Собака - це єдина істота на землі, яка любить тебе більше, ніж себе."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
