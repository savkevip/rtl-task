import { setPropValue, getData } from "../../../utils/utils";

const initState = {
  lookUp: {},
  tvShowDetails: null,
  episodes: {
    ids: [],
    loading: false
  },
  loading: false
};

const homeDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS_START":
      return setPropValue(state, "loading", true);
    case "GET_DETAILS_SUCCESS":
      const mapData = setPropValue(state, "loading", false);
      return setPropValue(mapData, "tvShowDetails", action.data);
    case "GET_DETAILS_FAILED":
      return state;
    case "GET_EPISODES_START":
      return setPropValue(state, "loading", true);
    case "GET_EPISODES_SUCCESS":
      return getData(state, "episodes", action.data);
    case "GET_EPISODES_FAILED":
      return state;
    default:
      return state;
  }
};

export default homeDetailReducer;
