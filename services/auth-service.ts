import { ILogin } from '@/common/schemas/loginSchema';
import { api } from './api';

class AuthServiceApi {
  login = async (params: ILogin) => {
    return api.post('/agent/login', { ...params });
  };
}

export const authServiceApi = new AuthServiceApi();
