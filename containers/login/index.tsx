import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import FormLogin from './form';

const LoginContainer: React.FC = () => {
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (!isReady) return;
  }, [isReady, query]);

  return <FormLogin />;
};

export default LoginContainer;
