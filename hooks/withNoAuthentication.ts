import { COOKIES_KEY } from '@/common/constant';
import { APP_ROUTES } from '@/common/constant/routes';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const withNoAuthenticationServer =
  (getServerSideProps: GetServerSideProps) => async (context: GetServerSidePropsContext) => {
    if (context?.req?.cookies?.[COOKIES_KEY.ACCESSS_TOKEN]) {
      return {
        redirect: {
          permanent: false,
          destination: APP_ROUTES.HOME,
        },
      };
    }
    return getServerSideProps({ ...context });
  };
export default withNoAuthenticationServer;
