import React from "react";
import { EpisodeWrapper, InfoWrapper, EpisodeImg } from "./style";

const Episode = ({ episode }) => (
  <EpisodeWrapper>
    <EpisodeImg
      src={episode.image && episode.image.medium}
      alt={episode.name}
    />
    <InfoWrapper>
      <a href={episode.url} target="_blank">
        <span>{episode.name}</span>
      </a>
      <span>Season: {episode.season}</span>
    </InfoWrapper>
  </EpisodeWrapper>
);

export default Episode;
