import { AxiosRequestConfig } from "axios";

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    requiresAuth?: boolean;
  }