/* eslint-disable no-param-reassign */
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
});

// TODO: Config nedeed interceptors to check requests & responses
instance.interceptors.request.use(
  (config) => {


    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
