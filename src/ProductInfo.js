/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductFromServer } from './store';

const ProductInfo = ({ product, deleteProduct }) => {
  return (
    <div>
    {
      product &&
      <div>
        <h2>Product Info: {product.name} </h2>
        <h5>Price: ${product.price}</h5>
        <h5>Quantity: {product.quantity}</h5>
        <Link to={`/products/${product.id}/edit`}>
          <button>Edit Product</button>
        </Link>&nbsp;&nbsp;
        <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
    </div>

    }

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
