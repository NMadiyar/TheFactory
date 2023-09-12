import axios from "axios";
import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Client-ID H9K-Ne71uux1aaKuYrYq_HC1Q_4HYG6RcRGh_LN4CNg",
  },
};

export const mainHttp = axios.create(config);
