import React from 'react';
import styled from "styled-components";

const StyledImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 3em;
  max-height: 250px;
`

const Picture = () => {
    return(
        <StyledImg src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tiger-king-joe-exotic-1584966900.jpeg?crop=0.566xw:1.00xh;0.0799xw,0&resize=480:*" />
    )
}

export default Picture