import React from 'react';
import styled from "styled-components";
import Picture from './Picture'

const StyledCard = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  border: 0.5px solid black;
  margin: 5px;
  padding: 0.55em;
  grid-column: span 1;
  grid-row: span 1;
  color: black;
  text-decoration: none;
`

const Card = () => {
    return(
        <StyledCard>
          Pokemon
          <br />
          <br />
          <Picture />
        </StyledCard>
    )
}

export default Card