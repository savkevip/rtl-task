import PropTypes from "prop-types";

export const episodeShape = PropTypes.shape({
  airdate: PropTypes.string,
  airstamp: PropTypes.string,
  airtime: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.object,
  name: PropTypes.string,
  number: PropTypes.number,
  runtime: PropTypes.number,
  season: PropTypes.number,
  summary: PropTypes.string,
  url: PropTypes.string
});
