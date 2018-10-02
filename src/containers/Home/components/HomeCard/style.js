import styled from "styled-components";

export const Card = styled.div`
    flex-grow: 1;
    width: calc(100% * (1/8) - 10px - 1px);
    display: flex;
    flex-direction: column;
    padding: 10px;
    
    @media (max-width: 1230px) {
    width: calc(100% * (1/6) - 10px - 1px);
    
    @media (max-width: 900px) {
    width: calc(100% * (1/4) - 10px - 1px);
    
    @media (max-width: 650px) {
    width: auto;
  }
`;
