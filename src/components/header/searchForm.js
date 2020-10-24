import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { searchProducts } from '../../actions';
import RenderField from '../body/form/renderField';
class SearchForm extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(value) {
    await this.props.searchProducts(value);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <StyledSearchForm onSubmit={handleSubmit(this.onSubmit)}>
          <Box>
            <Field
              label="商品名で検索する"
              name="keyword"
              type="text"
              component={RenderField}
            />
          </Box>
          <Box>
            <input type="submit" value="Submit" />
          </Box>
        </StyledSearchForm>
      </>
    );
  }
}
const mapDispatchToProps = { searchProducts };

// style
const StyledSearchForm = styled.form`
  margin: 0 0 0 auto;
`;

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(reduxForm({ form: 'searchProductsForm' })(SearchForm))
);
