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
  post: (url: string, body: object) => 
    httpReq.post(url, body),
  put: (url: string, body: object) => 
    httpReq.put(url, body),
  delete: (url: string) => 
    httpReq.delete(url)
};

export default request;
