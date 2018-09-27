import React, { Component } from 'react';
import _ from 'lodash';

export default class FriendListItem extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  avatarLink(friend) {
     return friend.avatarURL && friend.avatarURL !== '' ? friend.avatarURL : 'assets/avatar.png';
  }

  render() {
      const friend = this.props.friend;
      const imageURL = this.avatarLink(friend);
    return (
      <div className="row">
          <div className="col-xs-2">
              <img className="avatar-sm"
                   src={this.avatarLink(friend)}
                   alt={ 'Image of ' + friend.firstName + ' ' + friend.lastName } />
          </div>
          <div className="col-xs-10">
              <h5>{friend.firstName + ' ' + friend.lastName}</h5>
          </div>
      </div>
    );
  }
}
