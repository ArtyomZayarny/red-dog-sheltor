import { useQuery, useMutation } from "@tanstack/react-query";
import { type Dog } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { MOCK_DOGS } from "@/data/dogs";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL ||
  (import.meta.env.PROD
    ? "https://red-dog-sheltor-production.up.railway.app"
    : "http://localhost:1337");

// Formsubmit.co - email for receiving inquiries
const INQUIRY_EMAIL = import.meta.env.INQUIRY_EMAIL

// Transform Strapi response to match frontend Dog type
function transformDog(strapiDog: Record<string, unknown>): Dog {
  const genderMap: Record<string, string> = {
    male: "Хлопчик",
    female: "Дівчинка",
  };

  return {
    id: strapiDog.id as number,
    documentId: strapiDog.documentId as string,
    slug: strapiDog.slug as string,
    name: strapiDog.name as string,
    age: strapiDog.age as string,
    gender: genderMap[strapiDog.gender as string] || (strapiDog.gender as string),
    adoptionStatus: strapiDog.adoptionStatus as Dog["adoptionStatus"],
    priceMonthly: strapiDog.priceMonthly as number,
    tags: (strapiDog.tags as string[]) || [],
    description: strapiDog.description as string,
    curatorPhone: strapiDog.curatorPhone as string,
    image: strapiDog.image
      ? `${STRAPI_URL}${(strapiDog.image as { url: string }).url}`
      : null,
  };
}

export function useDogs() {
  return useQuery({
    queryKey: ["dogs"],
    queryFn: async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/api/dogs?populate=image`);
        if (!res.ok) throw new Error("Failed to fetch dogs");
        const json = await res.json();
        const dogs = (json.data as Record<string, unknown>[]).map(transformDog);
        return dogs.length > 0 ? dogs : MOCK_DOGS;
      } catch {
        // Fallback to mock data if API is unavailable
        return MOCK_DOGS;
      }
    },
  });
}

export function useDog(slug: string) {
  return useQuery({
    queryKey: ["dogs", slug],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/dogs?filters[slug][$eq]=${slug}&populate=image`
        );
        if (!res.ok) throw new Error("Failed to fetch dog");
        const json = await res.json();
        const dogs = json.data as Record<string, unknown>[];
        if (dogs.length > 0) return transformDog(dogs[0]);
      } catch {
        // Fall through to mock data
      }
      // Fallback to mock data
      const mockDog = MOCK_DOGS.find(d => d.slug === slug);
      if (!mockDog) throw new Error("Dog not found");
      return mockDog;
    },
  });
}

interface InquiryData {
  name: string;
  phone: string;
  contactTime: string;
  dogName: string;
}

const contactTimeLabels: Record<string, string> = {
  morning: "Зранку (9:00 - 13:00)",
  afternoon: "Вдень (13:00 - 17:00)",
  evening: "Ввечері (17:00 - 20:00)",
};

export function useInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("contact_time", contactTimeLabels[data.contactTime] || data.contactTime);
      formData.append("dog_name", data.dogName);
      formData.append("_subject", `Нова заявка на опікунство: ${data.dogName}`);
      formData.append("_template", "table");

      const response = await fetch(`https://formsubmit.co/ajax/${INQUIRY_EMAIL}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Заявку надіслано!",
        description: "Ми зв'яжемося з вами найближчим часом.",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Помилка",
        description: "Щось пішло не так. Спробуйте ще раз.",
        variant: "destructive",
      });
    }
  });
}
