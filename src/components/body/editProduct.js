import { Box, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import {
  deleteProduct,
  getProduct,
  patchImage,
  updateProduct,
} from '../../actions';
import ProductForm from './form/productForm';
import SubmitButton from './form/submitButton';
import validate from './form/validate';

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getProduct(id);
  }
  onSubmit = async values => {
    await this.props.updateProduct(values);
    this.props.history.push('/');
  };

  async onDeleteClick() {
    await this.props.deleteProduct(this.props.match.params.id);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <ProductForm />
        <ButtonBox>
          <SubmitButton />
          <CancelButton variant="contained">
            <Link to="/">Cancel</Link>
          </CancelButton>
          <DeleteButton variant="contained">
            <Link to="/" onClick={this.onDeleteClick}>
              Delete
            </Link>
          </DeleteButton>
        </ButtonBox>
      </form>
    );
  }
}

const mapDispatchToProps = {
  deleteProduct,
  getProduct,
  updateProduct,
  patchImage,
};

const mapStateToProps = (state, ownProps) => {
  const product = state.products[ownProps.match.params.id];
  return { initialValues: product, product };
};

const ButtonBox = styled(Box)`
  margin: 20px auto 0;
`;

const CancelButton = styled(Button)`
  margin: 10px;
  font-size: 20px;
`;
const DeleteButton = styled(Button)`
  margin: 10px;
  font-size: 20px;
`;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ validate, form: 'editProductForm', enableReinitialize: true })(
    EditProduct
  )
);
