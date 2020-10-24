import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateProduct from '../components/body/createProduct';
import EditProduct from '../components/body/editProduct';
import ErrorPage from '../components/body/errorPage';
import PatchImage from '../components/body/patchImage';
import ProductList from '../components/body/productList';

const body = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/products/new" component={CreateProduct} />
        <Route exact path="/products/:id" component={EditProduct} />
        <Route path="/error/:error_code" component={ErrorPage} />
        <Route path="/products/image/:id" component={PatchImage} />
      </Switch>
    </BrowserRouter>
  );
};

export default body;
