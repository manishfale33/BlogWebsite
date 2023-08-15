export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPosts = () => {
  // Import axios here
  const axios = require('axios');

  return (dispatch) => {
    axios.get('http://127.0.0.1:8000/blogmodels/')  // Corrected endpoint name
      .then(response => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};
