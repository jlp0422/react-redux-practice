/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Products = ({products}) => {
  return (
    <div>
      <h2>These are all our products</h2>
      <ul>
        {
          products &&
          products.map( product => (
            <li key={ product.id }>
              <Link to={`/products/${product.id}`}>{ product.name }</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    products
  }
}

export default connect(mapStateToProps)(Products);
