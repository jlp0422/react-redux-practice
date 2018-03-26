/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';

// GET ALL PRODUCTS
const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

export const getProductsFromServer = () => {
  return (dispatch) => {
    return axios.get('/api/products')
      .then( res => res.data)
      .then( products => {
        dispatch(getProducts(products))
      })
  }
}

const initialState = {
  products: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, { products: action.products })

  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
