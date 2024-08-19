import { z } from "zod";

export const signUpInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export type SignUpInputType = z.infer<typeof signUpInput>;

export const signInInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignInInputType = z.infer<typeof signInInput>;

export const blogContent = z.object({
  title: z.string(),
  content: z.string(),
});

export type BlogContentType = z.infer<typeof blogContent>;
