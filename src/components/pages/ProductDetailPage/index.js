import React, { Component } from 'react';

export default class ProductDetailPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        productId: props.match.params.productId || undefined
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  render() {
    return (
      <div className="container">
          <h4>Product Detail Page - Product ID: {this.state.productId}</h4>
      </div>
    );
  }
}
