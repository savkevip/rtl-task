import { setPropValue, getData } from "../../../utils/utils";

const initState = {
  lookUp: {},
  tvShows: {
    ids: [],
    loading: false
  }
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DATA_START":
      return setPropValue(state, "loading", true);
    case "GET_DATA_SUCCESS":
      return getData(state, 'tvShows', action.data);
    case "GET_DATA_FAILED":
      return state;
    default:
      return state;
  }
};

export default homeReducer;
