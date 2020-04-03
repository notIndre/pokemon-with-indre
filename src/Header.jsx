import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: black;
  font-family: Helvetica, sans-serif;
  text-align: right;
  letter-spacing: 10px;
  word-spacing: 50px;
`
const Header = () => {
    return(
        <StyledHeader>Pokémon lookbook</StyledHeader>
    )
}
export default Header