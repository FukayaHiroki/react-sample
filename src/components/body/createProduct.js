import { Box, Button, Container } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import { createProduct, patchImage } from '../../actions';
import validate from '../body/form/validate';
import ProductForm from './form/productForm';
import SubmitButton from './form/submitButton';

class CreateProduct extends Component {
  onSubmit = async values => {
    await this.props.createProduct(values);
    this.props.history.push('/');
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Container>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <ProductForm />
          <Box>
            <SubmitButton disabled={submitting} />
            <CancelButton variant="contained">
              <Link to="/">Cancel</Link>
            </CancelButton>
          </Box>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = { createProduct, patchImage };

const CancelButton = styled(Button)`
  margin: 10px;
  font-size: 20px;
`;
export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: 'createProductForm' })(CreateProduct));
