import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import styled from 'styled-components';

class SubmitButton extends Component {
  render() {
    return (
      <StyledSubmitButton variant="contained" type="submit">
        Submit
      </StyledSubmitButton>
    );
  }
}

const StyledSubmitButton = styled(Button)`
  margin: 10px;
  font-size: 20px;
`;
export default SubmitButton;
