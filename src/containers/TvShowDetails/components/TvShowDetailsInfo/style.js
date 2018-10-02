import styled from 'styled-components';

export const TvShowDetailsInfoWrapper = styled.div`
    width: 50%;
    padding: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 650px) {
    width: auto;
`;

export const TvShowDetailsImage = styled.img`
    margin: 40px;
`;

export const GenreWrapper = styled.div`
    margin: 20px;
`;

export const Genre = styled.span`
    padding: 5px;
`;
