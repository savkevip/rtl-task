import { combineReducers } from "redux";
import homeReducer from "../containers/Home/state/homeReducer";
import homeDetailReducer from "../containers/TvShowDetails/state/homeDetailsReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  details: homeDetailReducer
});

export default rootReducer;
