const initialState = {
  postData: [],
  details: [],
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_SUCCESS":
      return { ...state, postData: action.payload, error: null };
    case "FETCH_POST_FAILURE":
      return { ...state, postData: null, error: action.payload };
    case "FETCH_POST_ID_SUCCESS":
      return { ...state, details: action.payload, error: null };
    case "FETCH_POST_ID_FAILURE":
      return { ...state, details: null, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
