import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as productAction from '../../actions';

function Login() {
  const REACT_APP_GITHUB_LOGIN_URL = process.env.REACT_APP_GITHUB_LOGIN_URL;

  return (
    <>
      <StyledFab
        onClick={() => (document.location.href = REACT_APP_GITHUB_LOGIN_URL)}
      >
        GitHubでログイン
      </StyledFab>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    productAction: bindActionCreators(productAction, dispatch),
  };
}

// style
const StyledFab = styled(Button)`
  background-color: #b1cbbb;
  margin-left: 20px;
`;
export default connect(null, mapDispatchToProps)(Login);
