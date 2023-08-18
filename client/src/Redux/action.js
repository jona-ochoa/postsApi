import axios from "axios";

export const fetchPostData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: "FETCH_POST_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_POST_FAILURE", payload: error.message });
    }
  };
};

export const fetchPostIdData = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(response.data)
      dispatch({ type: "FETCH_POST_ID_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_POST_ID_FAILURE", payload: error.message });
    }
  };
};
