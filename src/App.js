/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsFromServer } from './store';
import Nav from './Nav';
import Products from './Products';
import ProductForm from './ProductForm';
import ProductInfo from './ProductInfo';

class App extends React.Component {

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={ Nav } />
          <Switch>
            <Route exact path='/products' component={ Products } />
            <Route exact path='/products/create' component={ ProductForm } />
            <Route exact path='/products/:id/edit' render={({ match, history }) => (
              <ProductForm id={ match.params.id * 1} history={ history } />
            )} />
            <Route exact path='/products/:id' render={({ match }) => (
              <ProductInfo id={ match.params.id * 1 } />
            )} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProductsFromServer())
  }
}

export default connect(null, mapDispatchToProps)(App);
