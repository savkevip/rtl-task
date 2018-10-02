import PropTypes from "prop-types";

export const detailShape = PropTypes.shape({
         externals: PropTypes.object,
         genres: PropTypes.array,
         id: PropTypes.number,
         image: PropTypes.object,
         language: PropTypes.string,
         name: PropTypes.string,
         network: PropTypes.object,
         officialSite: PropTypes.string,
         premiered: PropTypes.string,
         rating: PropTypes.object,
         runtime: PropTypes.number,
         schedule: PropTypes.object,
         status: PropTypes.string,
         summary: PropTypes.string,
         type: PropTypes.string,
         updated: PropTypes.number,
         url: PropTypes.string,
         webChannel: PropTypes.any,
         weight: PropTypes.number,
         _links: PropTypes.object
       });
