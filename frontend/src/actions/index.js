import axios from 'axios';

export const greeting = word => async dispatch => {
  const result = await axios.get(`api/greetings/${word}`);
  console.log(result);
  dispatch({
    type: word,
    payload: result.data
  });
};
