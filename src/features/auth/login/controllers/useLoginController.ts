import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type LoginType = z.infer<typeof LoginSchema>;

export const useLoginController = () => {
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
