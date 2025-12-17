import axios, { AxiosRequestHeaders } from "axios";

export type TokenProvider = () => Promise<string | null>;

export const createApi = (baseURL: string, getToken: TokenProvider) => {
  const api = axios.create({ baseURL });

  api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
      // Ensure headers object exists
      if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
      }
      config.headers.Authorization = `Bearer ${token}`;
      console.log(
        "[Axios Interceptor] Token added to request:",
        config.url,
        "Token length:",
        token.length
      );
    } else {
      console.warn(
        "[Axios Interceptor] No token available for request:",
        config.url
      );
    }
    return config;
  });

  return api;
};
