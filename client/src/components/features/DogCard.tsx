import { Dog } from "@shared/schema";
import { Link } from "wouter";
import { Button } from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Heart, Home } from "lucide-react";

interface DogCardProps {
  dog: Dog;
}

export function DogCard({ dog }: DogCardProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "available":
        return {
          label: "Взяти під опіку",
          icon: Heart,
          className: "bg-primary text-white hover:bg-primary/90",
          disabled: false,
        };
      case "under_guardianship":
        return {
          label: "Під опікою",
          icon: Heart,
          className: "bg-stone-200 text-stone-500 cursor-not-allowed",
          disabled: true,
        };
      case "in_family":
        return {
          label: "В родині",
          icon: Home,
          className: "bg-accent/20 text-accent cursor-not-allowed",
          disabled: true,
        };
      default:
        return {
          label: "Детальніше",
          icon: ArrowUpRight,
          className: "bg-secondary text-white",
          disabled: false,
        };
    }
  };

  const statusConfig = getStatusConfig(dog.adoptionStatus);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="group relative flex flex-col bg-white rounded-[40px] p-4 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2 border border-stone-100">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-stone-100 mb-4">
        <img
          src={dog.image || "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop"}
          alt={dog.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-secondary shadow-sm">
          {dog.age}
        </div>
      </div>

      <div className="px-2 pb-2 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-display font-bold text-secondary">{dog.name}</h3>
          <span className="text-stone-400 text-sm font-medium">{dog.gender}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {(dog.tags || []).slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2 flex gap-3">
          <Link href={`/dogs/${dog.slug}`} className="flex-1">
             <Button 
                className={cn("w-full rounded-full shadow-none", statusConfig.className)} 
                disabled={statusConfig.disabled}
             >
                <StatusIcon className="mr-2 h-4 w-4" />
                {statusConfig.label}
             </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
