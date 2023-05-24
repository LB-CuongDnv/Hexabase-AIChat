import AuthLayout from '@/components/Layout/AuthLayout';
import LoginContainer from '@/containers/login';
import withNoAuthenticationServer from '@/hooks/withNoAuthentication';
import type { NextPageWithLayout } from '@/pages/_app';
import type { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

const Login: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({}) => {
  return <LoginContainer />;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export const getServerSideProps: GetServerSideProps<{}> = withNoAuthenticationServer(async () => ({
  props: {},
}));

export default Login;
