import React, { Component } from 'react';

export default class PurchasePage extends Component {

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
          <h4>Purchase Page - Product ID: {this.state.productId}</h4>
      </div>
    );
  }
}
