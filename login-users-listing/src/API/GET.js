import axios from 'axios';
import { route, serviceRoute } from '../consts/requests';

export function getUsers() {
  return axios.get(`${route}/${serviceRoute}`);
}

/* const getUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    // Do something with the users data
  } catch (error) {
    console.error(error);
  }
}; */
