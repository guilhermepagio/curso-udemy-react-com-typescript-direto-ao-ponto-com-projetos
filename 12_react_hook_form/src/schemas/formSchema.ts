import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(3, "O  número mínimo de caracteres é 3."),
    lastname: z.string().min(3, "O número mínimo de caracteres é 3."),
    gender: z.string().refine((field) => field != "select", {
      message: "Você precisa selecionar um gênero",
    }),
    email: z
      .string()
      .min(1, "O campo é obrigatório")
      .email("Insira um endereço de email válido."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmpassword: z
      .string()
      .min(6, "A confirmação deve ter pelo menos 6 caracteres."),
    agree: z.boolean().refine((field) => field == true, {
      message: "Você precisa aceitar os termos e condições",
    }),
  })
  .refine((field) => field.password == field.confirmpassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmpassword"],
  });

export type FormSchema = z.infer<typeof formSchema>;
