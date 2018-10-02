import { createSelector } from "reselect";

export const getState = state => state.home;

export const getStateSelector = () =>
  createSelector(
    [getState],
    homeState =>
      homeState.tvShows.ids
        ? homeState.tvShows.ids.map(id => homeState.lookUp[id]) : []
  );
