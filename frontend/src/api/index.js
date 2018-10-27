import axios from 'axios';

export const morning = async () => {
  return await axios.get(`api/greetings/morning`);
};
export const hello = async () => {
  return await axios.get(`api/greetings/hello`);
};
