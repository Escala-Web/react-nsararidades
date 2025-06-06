import axios, { AxiosRequestConfig } from "axios";
import { URL_HOST } from "../config/configUrl";

// Define the interface for your auth token structure
interface AuthToken {
  token: string;
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  requiresAuth?: boolean;
}

export const api = axios.create({
  // baseURL: "http://localhost/api-php",
  baseURL: URL_HOST,
});


api.interceptors.request.use(
  (config: CustomAxiosRequestConfig): any => {
    if (config.requiresAuth) {
      const storedAuth = localStorage.getItem("auth");

      if (storedAuth) {
        try {
          // Typecast the parsed auth data to the AuthToken interface
          const parsedAuth: AuthToken = JSON.parse(storedAuth);
          const token = parsedAuth?.token;

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          } else {
            console.warn("Token not found in localStorage.");
          }
        } catch (error) {
          console.error("Error parsing auth token from localStorage:", error);
        }
      } else {
        
        console.warn("No auth token found in localStorage.");
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


