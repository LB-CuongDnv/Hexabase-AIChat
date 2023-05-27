import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { DEFAULT_ERROR_MESSAGE } from '@/common/constant/messages';
import { APP_ROUTES } from '@/common/constant/routes';
import { ILogin, loginSchema } from '@/common/schemas/loginSchema';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import FormItem from '@/components/FormItem/FormItem';

const FormLogin: React.FC = () => {
  const { loginMutation } = useAuth();
  const { mutate, isLoading } = loginMutation;
  const router = useRouter();
  const isDisable = isLoading;
  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrPhoneNumber: '',
    },
  });

  const { handleSubmit } = methods;

  const handleChangeStep = () => {
    return router.push({ pathname: router?.pathname }, undefined, { shallow: true });
  };

  const onSuccess = () => handleChangeStep();

  const onError = (error: any) => {
    toast.error(error?.data?.Message || DEFAULT_ERROR_MESSAGE);
  };

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    return mutate(data, { onSuccess, onError });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center">Login</h3>
        {/* <FormItem></FormItem> */}
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2 }} disabled={isDisable}>
          Login
        </Button>
        <p>
          Don&apos;t have an account?
          <Link component={NextLink} href={APP_ROUTES.REGISTER}>
            Register
          </Link>
        </p>
      </form>
    </FormProvider>
  );
};

export default FormLogin;
