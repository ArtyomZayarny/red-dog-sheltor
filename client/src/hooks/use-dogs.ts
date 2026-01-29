import { useQuery, useMutation } from "@tanstack/react-query";
import { type Inquiry } from "@shared/routes";
import { type Dog } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

const STRAPI_URL = "http://localhost:1337";

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
    status: strapiDog.status as Dog["status"],
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
      const res = await fetch(`${STRAPI_URL}/api/dogs?populate=image`);
      if (!res.ok) throw new Error("Failed to fetch dogs");
      const json = await res.json();
      return (json.data as Record<string, unknown>[]).map(transformDog);
    },
  });
}

export function useDog(slug: string) {
  return useQuery({
    queryKey: ["dogs", slug],
    queryFn: async () => {
      const res = await fetch(
        `${STRAPI_URL}/api/dogs?filters[slug][$eq]=${slug}&populate=image`
      );
      if (!res.ok) throw new Error("Failed to fetch dog");
      const json = await res.json();
      const dogs = json.data as Record<string, unknown>[];
      if (!dogs.length) throw new Error("Dog not found");
      return transformDog(dogs[0]);
    },
  });
}

export function useInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: Inquiry) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app: await fetch(api.inquiry.submit.path, ...);
      return { success: true };
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
