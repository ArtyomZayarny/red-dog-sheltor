import { useState } from "react";
import { useInquiry } from "@/hooks/use-dogs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from "lucide-react";
import { inquirySchema } from "@shared/schema";
import { z } from "zod";

interface InquiryModalProps {
  dogName: string;
  trigger: React.ReactNode;
}

export function InquiryModal({ dogName, trigger }: InquiryModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contactTime: "morning"
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const mutation = useInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation using Zod schema
    const result = inquirySchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) formattedErrors[err.path[0] as string] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }
    
    setErrors({});
    
    mutation.mutate({ ...formData, dogName }, {
      onSuccess: () => {
        setOpen(false);
        setFormData({ name: "", phone: "", contactTime: "morning" });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-[32px] p-8 border-none shadow-2xl bg-[#FDFBF7]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-secondary">
            Анкета для знайомства
          </DialogTitle>
          <DialogDescription className="text-stone-500">
            Залиште свої контакти, і ми зв'яжемося з вами щодо опікунства над {dogName}.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-stone-700 font-semibold">Ваше ім'я</Label>
            <Input
              id="name"
              placeholder="Олена"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="rounded-xl border-stone-200 bg-white h-12 focus:ring-primary/20 focus:border-primary"
            />
            {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-stone-700 font-semibold">Номер телефону</Label>
            <Input
              id="phone"
              placeholder="+380"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="rounded-xl border-stone-200 bg-white h-12 focus:ring-primary/20 focus:border-primary"
            />
            {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-3">
            <Label className="text-stone-700 font-semibold">Коли краще зателефонувати?</Label>
            <RadioGroup 
              value={formData.contactTime} 
              onValueChange={(val) => setFormData({...formData, contactTime: val})}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-stone-100 hover:border-primary/50 transition-colors cursor-pointer">
                <RadioGroupItem value="morning" id="morning" className="text-primary" />
                <Label htmlFor="morning" className="cursor-pointer text-stone-600 font-medium flex-1">Зранку (9:00 - 13:00)</Label>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-stone-100 hover:border-primary/50 transition-colors cursor-pointer">
                <RadioGroupItem value="afternoon" id="afternoon" className="text-primary" />
                <Label htmlFor="afternoon" className="cursor-pointer text-stone-600 font-medium flex-1">Вдень (13:00 - 17:00)</Label>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-stone-100 hover:border-primary/50 transition-colors cursor-pointer">
                <RadioGroupItem value="evening" id="evening" className="text-primary" />
                <Label htmlFor="evening" className="cursor-pointer text-stone-600 font-medium flex-1">Ввечері (17:00 - 20:00)</Label>
              </div>
            </RadioGroup>
            {errors.contactTime && <p className="text-destructive text-sm">{errors.contactTime}</p>}
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg mt-4" 
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Відправка...
              </>
            ) : (
              "Надіслати анкету"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
