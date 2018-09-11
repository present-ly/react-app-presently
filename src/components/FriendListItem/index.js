import React, { Component } from 'react';
import _ from 'lodash';

export default class FriendListPage extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('componentDidMount()');
  }


  render() {
      const friend = this.props.friend;
    return (
      <div className="row">
          <div className="col-xs-2">
              <img className="avatar"
                   href={friend.avatarURL}
                   alt={ 'Image of ' + friend.firstName + ' ' + friend.lastName } />
          </div>
          <div className="col-xs-10">
              <h5>{friend.firstName + ' ' + friend.lastName}</h5>
          </div>
      </div>
    );
  }
}
