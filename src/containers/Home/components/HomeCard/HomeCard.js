import React from "react";
import PropTypes from "prop-types";
import { tvShowShape } from "../../shape/tvShowShape";
import { Card } from "./style";
import { Link } from "react-router-dom";

const HomeCard = ({ tvShow }) => {
  return (
    <Card className="card">
      <img
        className="card-img-top"
        src={tvShow.image.medium}
        alt="Card image cap"
      />
      <div className="card-body text-center">
        <h3 className="card-text">{tvShow.name}</h3>
        <p className="card-text">Premiered: {tvShow.premiered}</p>
        <p className="card-text">Rating: {tvShow.rating.average}</p>
        <Link to={`/details/${tvShow.id}`}>Read more...</Link>
      </div>
    </Card>
  );
};

HomeCard.propTypes = {
  twShow: PropTypes.shape(tvShowShape)
};

export default HomeCard;
