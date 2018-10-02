import React from "react";
import {
  TvShowDetailsInfoWrapper,
  TvShowDetailsImage,
  GenreWrapper,
  Genre
} from "./style";
import ReactHtmlParser from "react-html-parser";

const TvShowDetailsInfo = ({ tvShowData }) => (
  <TvShowDetailsInfoWrapper>
    <a href={tvShowData.url} target="_blank">
      <TvShowDetailsImage src={tvShowData.image.medium} alt={tvShowData.name} />
    </a>
    <GenreWrapper className="text-center">
      {tvShowData.genres.map(genre => (
        <Genre key={genre}>{genre}</Genre>
      ))}
    </GenreWrapper>
    <div className="text-justify">{ReactHtmlParser(tvShowData.summary)}</div>
  </TvShowDetailsInfoWrapper>
);

export default TvShowDetailsInfo;
