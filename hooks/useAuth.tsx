import { authServiceApi } from '@/services/auth-service';
import { useMutation } from '@tanstack/react-query';

const { login } = authServiceApi;

const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: login,
  });

  return { loginMutation };
};

export default useAuth;
