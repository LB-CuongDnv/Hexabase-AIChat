import { COOKIES_KEY } from '@/common/constant';
import HTTP_STATUS_CONTSTANTS from '@/common/constant/httpStatus';

import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  const accessToken = Cookies.get(COOKIES_KEY.ACCESSS_TOKEN);
  console.log(accessToken, 'accesstoken');
  config.headers.Authorization = 'Bearer ' + accessToken;

  return config;
});

api.interceptors.response.use(
  async (response) => {
    return response.data?.data;
  },
  async (error: AxiosError) => {
    if (error?.response?.status === HTTP_STATUS_CONTSTANTS.ERROR_CODE_401) {
      // showMessage(TYPE_OF_ANT_DESIGN.ERROR, getI18n()?.t('message.E16'));
      // await Auth.signOut();
    }
    return Promise.reject(error?.response || error);
  }
);

const apiServer = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

apiServer.interceptors.response.use(
  async (response) => {
    return response.data?.data;
  },
  async (error: AxiosError) => {
    if (error?.response?.status === HTTP_STATUS_CONTSTANTS.ERROR_CODE_401) {
      // showMessage(TYPE_OF_ANT_DESIGN.ERROR, getI18n()?.t('message.E16'));
      // await Auth.signOut();
    }
    return Promise.reject(error?.response || error);
  }
);

export { api, apiServer };
