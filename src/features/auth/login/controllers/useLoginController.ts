import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

export const useLoginController = () => {
  const LoginSchema = z.object({
    username: z
      .string()
      .min(3, 'O nome de usuário deve ter pelo menos três caracteres'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });

  type LoginType = z.infer<typeof LoginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const showErrorMessages = Object.values(errors).filter(
    (error) => !!error && error.message!.length > 0
  );

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    showErrorMessages,
    onSubmit,
  };
};
