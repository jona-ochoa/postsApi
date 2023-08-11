import axios from 'axios';

export const fetchUserData = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: 'FETCH_POST_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_POST_FAILURE', payload: error.message });
    }
  };
};
