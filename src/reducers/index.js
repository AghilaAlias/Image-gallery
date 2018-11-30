const initialState = {
  isFetching: false,
  images: [],
  isSuccess: false,
  isError: false,
  error: {}
};

const displayImages = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_IMAGES":
      return Object.assign({}, state,{isFetching: true});
    case "RECEIVE_IMAGES":
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        images:[...state.images, ...action.images]
      };
    case "RECEIVED_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default displayImages;
