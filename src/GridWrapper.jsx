import React from 'react';
import styled from "styled-components";

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto;
  /* grid-area: p; */
  text-align: center;
  font-size: 1em;
  font-family: Helvetica, sans-serif;
  `

const GridWrapper = (props) => {
    return(
        <StyledGridWrapper>
            { props.children }
        </StyledGridWrapper>
    )
}

export default GridWrapper