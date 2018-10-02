import {
  GET_DETAILS_START,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED,
  GET_EPISODES_START,
  GET_EPISODES_SUCCESS,
  GET_EPISODES_FAILED
} from "../constants/actionTypes";

export const getDetailsStart = id => ({
  type: GET_DETAILS_START,
  id
});
export const getDetailsSuccess = data => ({
  type: GET_DETAILS_SUCCESS,
  data
});
export const getDetailsFailed = error => ({
  type: GET_DETAILS_FAILED,
  error
});

export const getEpisodesStart = id => ({
  type: GET_EPISODES_START,
  id
});
export const getEpisodesSuccess = data => ({
  type: GET_EPISODES_SUCCESS,
  data
});
export const getEpisodesFailed = error => ({
  type: GET_EPISODES_FAILED,
  error
});
