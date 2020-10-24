import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import { getProduct, patchImage } from '../../actions';
import ImageForm from './form/imageForm';
import SubmitButton from './form/submitButton';

class PatchImage extends Component {
  // ライフサイクル
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getProduct(id);
  }

  onSubmit = async (values) => {
    await this.props.patchImage(values);
    this.props.history.push('/');
  };

  render() {
    const { handleSubmit } = this.props;
    const product = this.props.initialValues;
    const IMAGE_URL = process.env.REACT_APP_S3_BUCKET_URL;
    return (
      <>
        <img
          src={
            !!product && !!product.imagePath
              ? `${IMAGE_URL}${product.imagePath}`
              : ''
          }
          style={{ height: '80px', width: '80px' }}
        ></img>
        <form
          onSubmit={handleSubmit(this.onSubmit)}
          encType="multipart/form-data"
        >
          <ImageForm />
          <SubmitButton />
          <CancelButton variant="contained">
            <Link to="/">Cancel</Link>
          </CancelButton>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  patchImage,
  getProduct,
};

const mapStateToProps = (state, ownProps) => {
  const product = state.products[ownProps.match.params.id];
  const products = state.products;
  const image = products.image;
  return { initialValues: product, product, image };
};

const CancelButton = styled(Button)`
  margin: 10px;
  font-size: 20px;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'patchImageForm', enableReinitialize: true })(PatchImage));
