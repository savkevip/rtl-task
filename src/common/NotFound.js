import React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NotFound = () => (
  <NotFoundWrapper>
    <h1>404</h1>
  </NotFoundWrapper>
);

export default NotFound;
