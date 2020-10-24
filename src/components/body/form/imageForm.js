import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import { Field } from 'redux-form';
class ImageForm extends Component {
  fileUpload = field => {
    const { input, type, value, accept = '*', required = false, name } = field;

    return (
      <>
        <input
          {...input}
          type={type}
          accept={accept}
          required={required}
          value={value}
          name={name}
        />
      </>
    );
  };

  render() {
    return (
      <Box>
        <Field
          name="imagePath"
          type="file"
          accept=".jpeg, .jpg, .png"
          component={this.fileUpload}
        />
      </Box>
    );
  }
}

export default ImageForm;
