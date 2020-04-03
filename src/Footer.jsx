import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  font-family: "Comic Sans Ms";
  font-size: 0.75vw;
  padding: 2%;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`
const Footer = () => {
    return(
        <StyledFooter>built for API practice by @indrevv on Twitter</StyledFooter>
    )
}

export default Footer