import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/muanpee/lab2-Vue-vite/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getEvents(perPage: Number, page: Number) {
    return apiClient.get('/events', {
      params: {
        _limit: perPage,
        _page: page
      }
    });
  },
  getEvent(id: number) {
    return apiClient.get('/events/' +id);
  }
};