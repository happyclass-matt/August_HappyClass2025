import { z } from "zod";

export const nonEmptyString = z.string().min(1, "Required");

export const emailSchema = z
  .string()
  .email("Enter a valid email")
  .transform((v) => v.toLowerCase());

export type Email = z.infer<typeof emailSchema>;

