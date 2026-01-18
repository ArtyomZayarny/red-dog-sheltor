import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type Inquiry } from "@shared/routes";
import { MOCK_DOGS } from "@/data/dogs";
import { useToast } from "@/hooks/use-toast";

// Since requirements asked to NOT fetch dogs from backend for the list, 
// we will simulate the data structure here but strictly return local data.
// The contract exists in shared/routes, but we are using MOCK_DOGS as per instructions.

export function useDogs() {
  return useQuery({
    queryKey: [api.dogs.list.path],
    queryFn: async () => {
      // Simulating network delay for realism
      await new Promise(resolve => setTimeout(resolve, 500));
      return MOCK_DOGS;
    },
  });
}

export function useDog(slug: string) {
  return useQuery({
    queryKey: [api.dogs.list.path, slug],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      const dog = MOCK_DOGS.find(d => d.slug === slug);
      if (!dog) throw new Error("Dog not found");
      return dog;
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
