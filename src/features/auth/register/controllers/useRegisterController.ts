import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres.'),
    email: z.string().email('Email inválido.'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
    confirmPassword: z
      .string()
      .min(6, 'A confirmação de senha deve ter pelo menos 6 caracteres.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  });

type registerType = z.infer<typeof RegisterSchema>;

export const useRegisterController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>({
    resolver: zodResolver(RegisterSchema),
  });

  const showErrorMessages = Object.values(errors).filter(
    (error) => !!error && error.message!.length > 0
  );

  const onSubmit = (data: registerType) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    showErrorMessages,
    onSubmit,
  };
};
