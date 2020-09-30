const axios = require('axios');

export const useAPI = () => {
  const url = 'http://localhost:8080';
  const api = axios.create({
    baseURL: url,
    timeout: 1000,
      headers: { 'X-Custom-Header': 'foobar' }
  });

  return {
    api
  }
};