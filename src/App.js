/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsFromServer } from './store';
import Products from './Products';
import Nav from './Nav';

class App extends React.Component {

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={ Nav } />
          <Route exact path='/products' component={ Products } />
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
