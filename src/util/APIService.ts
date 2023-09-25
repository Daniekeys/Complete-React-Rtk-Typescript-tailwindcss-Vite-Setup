import axios from "axios";
import { baseUrl } from "./endpoints";

export const APIService = axios.create({
  baseURL: baseUrl,
});

export const altAPIService = (method: string, address: string, header: object) => {
  return axios({
    method: method,
    url: `${baseUrl}/${address}`,
    headers: header,
  });
};
