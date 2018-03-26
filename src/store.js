/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  products: []
}

const GET_PRODUCTS = 'GET_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

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

// DELETE PRODUCT
const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}

export const deleteProductFromServer = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/products/${id}`)
      .then(() => dispatch(deleteProduct(id)))
      .then(() => location.hash = '/products')
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, { products: action.products })

    case DELETE_PRODUCT:
      const products = state.products.filter(product => product.id !== action.id * 1)
      return Object.assign({}, state, { products })

  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
