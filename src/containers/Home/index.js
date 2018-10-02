import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeCard from "./components/HomeCard/HomeCard";
import { connect } from "react-redux";
import { getDataStart } from "./state/homeActions";
import { getStateSelector } from "./state/homeSelectors";
import { tvShowShape } from "./shape/tvShowShape";
import Pagination from "../../common/Pagination";
import { paginate } from "../../utils/utils";
import { HomeContainer, HomeCardWrapper } from "./style/style";
import Loader from "../../common/Loader";

class Home extends Component {
  state = {
    pageSize: 16,
    currentPage: 1
  };

  componentDidMount() {
    this.props.getData();
  }

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { data, loading } = this.props;
    const { pageSize, currentPage } = this.state;

    const tvShows = paginate(data, currentPage, pageSize);

    return (
      <HomeContainer>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <HomeCardWrapper>
              {tvShows.map(tvShow => (
                <HomeCard key={tvShow.id} tvShow={tvShow} />
              ))}
            </HomeCardWrapper>
            <Pagination
              itemsCount={data.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </React.Fragment>
        )}
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  data: PropTypes.arrayOf(tvShowShape),
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  data: getStateSelector()(state)
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getDataStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
