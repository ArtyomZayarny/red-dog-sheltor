import { z } from "zod";

export type DogStatus = "available" | "under_guardianship" | "in_family";

export const dogSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  age: z.string(),
  gender: z.string(),
  status: z.enum(["available", "under_guardianship", "in_family"]),
  priceMonthly: z.number(),
  tags: z.array(z.string()),
  description: z.string(),
  curatorPhone: z.string(),
  image: z.string(),
});

export type Dog = z.infer<typeof dogSchema>;

export const inquirySchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити мінімум 2 символи"),
  phone: z.string().min(10, "Введіть коректний номер телефону"),
  contactTime: z.enum(["morning", "afternoon", "evening"]),
});

export type Inquiry = z.infer<typeof inquirySchema>;
