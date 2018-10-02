import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED
} from "../constants/actionTypes";

export const getDataStart = () => ({ type: GET_DATA_START });

export const getDataSuccess = data => ({
    type: GET_DATA_SUCCESS,
    data
});

export const getDataFailed = error => ({
    type: GET_DATA_FAILED,
    error
});
