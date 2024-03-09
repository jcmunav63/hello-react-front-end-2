import axios from 'axios';

export const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

export const fetchGreeting = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_GREETING_REQUEST });
    try {
      const response = await axios.get('http://localhost:3001/api/v1/messages');
      dispatch({
        type: FETCH_GREETING_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_GREETING_FAILURE,
        payload: error.message,
      });
    }
  };
};
