import axios, { AxiosResponse } from "axios"


const httpReq = axios.create({
  headers: {
    "Content-Type": "application/json",
  }
});

const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => 
    httpReq.get(url),
  post: (url: string, body: object, token: string) => {
    if (token != null) httpReq.defaults.headers.common['Authorization-Header'] = token;
    return httpReq.post(url, body);
  },
  put: (url: string, body: object, token: string) => {
    if (token != null) httpReq.defaults.headers.common['Authorization-Header'] = token;
    return httpReq.put(url, body);
  },
  delete: (url: string, token: string) => {
    if (token != null) httpReq.defaults.headers.common['Authorization-Header'] = token;
    return httpReq.delete(url);
  }
};

export default request;
