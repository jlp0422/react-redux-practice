/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

class ProductForm extends React.Component {
  constructor({ product }) {
    super()
    this.state = {
      product: {
        name: product ? product.name : '',
        price: product ? product.price : '',
        quantity: product ? product.quantity : ''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { product } = nextProps
    this.setState({
      product: {
        name: product ? product.name : '',
        price: product ? product.price : '',
        quantity: product ? product.quantity : ''
      }
     })
  }

  render() {
    const { name, price, quantity } = this.state.product
    const { id } = this.props
    return (
      <form>
        <label>Name</label>
        <input value={ name } />
        <br />
        <label>Price</label>
        <input value={ price } />
        <br />
        <label>Quantity</label>
        <input value={ quantity } />
        <button>
        {
          id ? ('Update') : ('Add')
        }
        </button>
      </form>
    )
  }
}

const mapStateToProps = ({ products }, { id }) => {
  const product = products.find(product => product.id === id)
  return {
    product
  }
}

export default connect(mapStateToProps)(ProductForm);
