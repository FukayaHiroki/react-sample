import axios from 'axios';
import Cookie from 'js-cookie';

export const READ_PRODUCTS = 'READ_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_PRODUCT = 'GET_PRODUCT';
export const READ_PRODUCT = 'READ_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const ERROR = 'ERROR';
export const PATCH_IMAGE = 'PATCH_IMAGE';
export const GET_IMAGE = 'GET_IMAGE';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const apiToken = Cookie.get('authenticationApiToken');
const axiosBase = axios.create({
  baseURL: `${REACT_APP_API_URL}`,
  withCredentials: false,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${apiToken}`,
  },
});
const patchAxiosBase = axios.create({
  baseURL: `${REACT_APP_API_URL}`,
  withCredentials: false,
  headers: {
    'Content-type': 'multipart/form-data',
    Authorization: `Bearer ${apiToken}`,
  },
});

const imageAxiosBase = axios.create({
  baseURL: `${REACT_APP_API_URL}`,
  withCredentials: false,
  headers: {
    'Content-type': 'image/jpeg',
    Authorization: `Bearer ${apiToken}`,
  },
});
const errorHandle = (e, dispatch) => {
  if (!e.response) {
    const status = '500';
    const message = 'INTERNAL_SERVER_ERROR';
    dispatch({ type: ERROR, status, message });
  } else {
    const { status = '', message = '' } = e.response;
    dispatch({ type: ERROR, status, message });
  }
};

export const readProducts = () => async dispatch => {
  try {
    const response = await axiosBase.get('/');
    dispatch({ type: READ_PRODUCTS, response });
  } catch (e) {
    errorHandle(e, dispatch);
  }
};

export const getImage = product => async dispatch => {
  try {
    const response = await imageAxiosBase({
      method: 'GET',
      url: `/${product.id}/images/${product.imagePath}`,
      responseType: 'blob',
    });
    dispatch({ type: GET_IMAGE, response });
  } catch (e) {
    errorHandle(e, dispatch);
  }
};

export const createProduct = values => async dispatch => {
  try {
    const response = await axiosBase({
      method: 'POST',
      data: values,
    });
    dispatch({ type: CREATE_PRODUCT, response });
  } catch (e) {
    errorHandle(e, dispatch);
  }
};

export const deleteProduct = id => async dispatch => {
  try {
    await axiosBase({
      method: 'delete',
      url: `/${id}`,
    });
    dispatch({ type: DELETE_PRODUCT, id });
  } catch (e) {
    errorHandle(e, dispatch);
  }
};

export const getProduct = id => async dispatch => {
  try {
    const response = await axiosBase({
      method: 'get',
      url: `/${id}`,
    });
    dispatch({ type: GET_PRODUCT, response });
  } catch (e) {
    errorHandle(e, dispatch);
  }
};

export const updateProduct = values => async dispatch => {
  try {
    const response = await axiosBase({
      method: 'put',
      url: `/${values.id}`,
      data: values,
    });
    dispatch({ type: UPDATE_PRODUCT, response });
  } catch (e) {
    errorHandle(e, dispatch);
  }
};

export const searchProducts = value => async dispatch => {
  try {
    const keyword = value.keyword || '';
    const response = await axiosBase({
      method: 'get',
      url: `?title=${keyword}`,
    });
    dispatch({ type: SEARCH_PRODUCTS, response });
  } catch (e) {
    errorHandle(e, dispatch);
  }
};

export const patchImage = values => async dispatch => {
  try {
    const params = new FormData();
    params.append('imagePath', values.imagePath[0]);
    const response = await patchAxiosBase({
      method: 'PATCH',
      url: `/${values.id}/images`,
      data: params,
    });
    dispatch({ type: PATCH_IMAGE, response });
  } catch (e) {
    errorHandle(e, dispatch);
  }
};
