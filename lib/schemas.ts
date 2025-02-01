import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  phone: z.string().max(10).min(10),
  email: z.string().email(),
  message: z.string().min(2),
});