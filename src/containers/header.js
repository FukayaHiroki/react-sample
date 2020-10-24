import { AppBar, Box, Toolbar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import LoginButton from '../components/header/loginButton';
import SearchForm from '../components/header/searchForm';
export default function SearchAppBar() {
  return (
    <StyledBox>
      <StyledAppBar position="static">
        <Toolbar>
          <h1>LOGO</h1>
          <LoginButton />
          <SearchForm />
        </Toolbar>
      </StyledAppBar>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  flexgrow: 1;
`;

const StyledAppBar = styled(AppBar)`
  flexgrow: 1;
  display: 'block';
`;
