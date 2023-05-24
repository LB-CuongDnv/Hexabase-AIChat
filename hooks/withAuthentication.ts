import { COOKIES_KEY } from '@/common/constant';
import { APP_ROUTES } from '@/common/constant/routes';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const withAuthenticationServer =
  (getServerSideProps: GetServerSideProps) => async (context: GetServerSidePropsContext) => {
    if (!context?.req?.cookies?.[COOKIES_KEY.ACCESSS_TOKEN]) {
      return {
        redirect: {
          permanent: false,
          destination: APP_ROUTES.LOGIN,
        },
      };
    }

    return getServerSideProps({ ...context });
  };
export default withAuthenticationServer;
