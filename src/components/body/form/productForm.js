import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import { Field } from 'redux-form';
import RenderField from './renderField';
class ProductForm extends Component {
  render() {
    return (
      <>
        <Box>
          <Field
            label="Title"
            name="title"
            type="text"
            component={RenderField}
          />
        </Box>
        <Box>
          <Field
            label="Description"
            name="description"
            type="text"
            component={RenderField}
          />
        </Box>
        <Box>
          <Field
            label="Price"
            name="price"
            type="number"
            component={RenderField}
          />
        </Box>
      </>
    );
  }
}

export default ProductForm;
