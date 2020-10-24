import lodash from 'lodash';
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  ERROR,
  GET_IMAGE,
  GET_PRODUCT,
  PATCH_IMAGE,
  READ_PRODUCTS,
  SEARCH_PRODUCTS,
  UPDATE_PRODUCT,
} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case READ_PRODUCTS:
    case SEARCH_PRODUCTS:
    case PATCH_IMAGE:
      return lodash.mapKeys(action.response.data, 'id');
    case CREATE_PRODUCT:
    case UPDATE_PRODUCT:
    case GET_PRODUCT:
      const data = action.response.data;
      return { ...state, [data.id]: data };
    case DELETE_PRODUCT:
      delete state[action.id];
      return { ...state };
    case ERROR:
      const { status } = action;
      return { ...state, status };
    case GET_IMAGE:
      const image = action.response.data;
      return { ...state, image };
    default:
      return state;
  }
};
