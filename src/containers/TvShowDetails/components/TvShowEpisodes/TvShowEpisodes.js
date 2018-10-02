import React from "react";
import PropTypes from "prop-types";
import { EpisodesWrapper, EpisodesList } from "./style";
import Episode from "./components/Episode";
import Pagination from "../../../../common/Pagination";
import { episodeShape } from "../../shape/episodeShape";

const TvShowEpisodes = ({
  episodes,
  pageSize,
  currentPage,
  itemsCount,
  onPageChange
}) => (
  <EpisodesWrapper>
    <h3 className="text-center">Episodes</h3>
    <EpisodesList>
      {episodes.map(episode => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </EpisodesList>
    <Pagination
      itemsCount={itemsCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  </EpisodesWrapper>
);

TvShowEpisodes.propTypes = {
  episodes: PropTypes.arrayOf(episodeShape),
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  itemsCount: PropTypes.number,
  onPageChange: PropTypes.func
};

export default TvShowEpisodes;
