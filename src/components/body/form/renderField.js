import { Box, TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
const RenderFiled = field => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
  } = field;

  return (
    <Box>
      <StyledTextField
        {...input}
        type={type}
        error={touched && error}
        label={label}
        valiant="outlined"
        helperText={touched && error}
      />
    </Box>
  );
};
const StyledTextField = styled(TextField)`
  width: 300px;
  margin-top: 40px;
`;
export default RenderFiled;
