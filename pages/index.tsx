import PrivateLayout from '@/components/Layout/PrivateLayout';
import HomePageContainer from '@/containers/home';
import withAuthenticationServer from '@/hooks/withAuthentication';
import type { NextPageWithLayout } from '@/pages/_app';
import type { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

const HomePage: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({}) => {
  return <HomePageContainer />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export const getServerSideProps: GetServerSideProps = withAuthenticationServer(async () => ({
  props: {},
}));

export default HomePage;
