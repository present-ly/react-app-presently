import React, { Component } from 'react';

export default class FriendMarketPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        friendId: props.match.params.friendId || undefined
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  render() {
    return (
      <div className="container">
          <h4>Friend Market Page - Friend ID: {this.state.friendId}</h4>
      </div>
    );
  }
}
