import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDetailsStart, getEpisodesStart } from "./state/homeDetailsActions";
import {
  getDetailsDataState,
  getStateSelector
} from "./state/homeDetailsSelectors";
import TvShowDetailsInfo from "./components/TvShowDetailsInfo/TvShowDetailsInfo";
import TvShowEpisodes from "./components/TvShowEpisodes/TvShowEpisodes";
import { TvShowDetailsContainer } from "./style/style";
import { paginate } from "../../utils/utils";
import Loader from "../../common/Loader";
import { detailShape } from "./shape/detailShape";
import { episodeShape } from "./shape/episodeShape";

class TvShowDetails extends Component {
  state = {
    pageSize: 10,
    currentPage: 1
  };

  componentDidMount() {
    this.props.getDetailsData(this.props.match.params.id);
    this.props.getEpisodesData(this.props.match.params.id);
  }

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { details, episodes, loading } = this.props;
    const { currentPage, pageSize } = this.state;
    if (!details || !episodes) return null;

    const episodesList = paginate(episodes, currentPage, pageSize);

    return (
      <TvShowDetailsContainer>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <TvShowDetailsInfo tvShowData={details} />
            <TvShowEpisodes
              episodes={episodesList}
              itemsCount={episodes.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </React.Fragment>
        )}
      </TvShowDetailsContainer>
    );
  }
}

const mapStateToProps = state => ({
  details: getDetailsDataState(state),
  episodes: getStateSelector()(state)
});

const mapDispatchToProps = dispatch => ({
  getDetailsData: id => dispatch(getDetailsStart(id)),
  getEpisodesData: id => dispatch(getEpisodesStart(id))
});

TvShowDetails.propTyoes = {
  details: PropTypes.shape(detailShape),
  episodes: PropTypes.arrayOf(episodeShape),
  loading: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TvShowDetails);
