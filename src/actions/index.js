import axios from "axios";

const fetch_images = () => {
  return {
    type: "FETCH_IMAGES"
  };
};

const received_images = images => {
  return {
    type: "RECEIVE_IMAGES",
    images
  };
};

const received_error = error => {
  return{
    type: "RECEIVED_ERROR",
    error
  }
};

const retrieveImages = url => dispatch => {
  dispatch(fetch_images());
  axios.get(url)
    .then(response => {
      if (response.status !== 200) {
        dispatch(received_error(response));
      } else {
        if(response.data.length > 0){
          dispatch(received_images(response.data));
        }
      }
    })
    .catch(error => {
      dispatch(received_error(error));
    });
};

export default retrieveImages;