import { createSelector } from "reselect";

const getDetailsState = state => state.details

export const getDetailsDataState = state => state.details.tvShowDetails;

export const getStateSelector = () =>
    createSelector(
        [getDetailsState],
        homeState => homeState.episodes.ids
                ? homeState.episodes.ids.map(id => homeState.lookUp[id]) : []
    );

