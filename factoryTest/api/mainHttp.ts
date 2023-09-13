import axios from "axios";
import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Client-ID aFmYEr2aXY2P5UMnpTXqHGKwclSVqXloWqKkuwOSFZ8",
  },
};

export const mainHttp = axios.create(config);
