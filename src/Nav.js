/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ productCount }) => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/products'>Products ({productCount})</Link>
      </li>
      <li>
        <Link to='/products/create'>Add Product</Link>
      </li>
    </ul>
  )
}

const mapStateToProps = ({ products }) => {
  const productCount = products.length
  return {
    productCount
  }
}

export default connect(mapStateToProps)(Nav);
