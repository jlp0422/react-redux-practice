import React from 'react';
import { connect } from 'react-redux';
import { deleteProductFromServer } from './store';

const ProductInfo = ({ product, deleteProduct }) => {
  return (
    <div>
      <h2>Product Info: { product && product.name} </h2>
      {
        product &&
        <div>
          <h5>Price: ${ product.price }</h5>
          <h5>Quantity: { product.quantity }</h5>
        </div>
      }
      <button>Edit Product</button>&nbsp;&nbsp;
      <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
    </div>
  )
}

const mapStateToProps = ({ products }, { id }) => {
  const product = products && products.find(p => p.id === id * 1)
  return {
    product,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProductFromServer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
