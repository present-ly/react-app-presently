import React, { Component } from 'react';

export default class FriendListPage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.setState({
  //       stateVar: this.props.stateVar
  //   });
  // }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  render() {
    return (
      <div className="container">
          <h4>Friend List Page</h4>
      </div>
    );
  }
}
