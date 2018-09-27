import React, { Component } from 'react';
import UserInfo from "../UserInfo";

const friend =     {
        id: 1,
        firstName: "Matt",
        lastName: "Valli",
        dateOfBirth: "05/27/1987",
        avatarURL: "https://media.licdn.com/dms/image/C4E03AQFdcDwlmX3n7w/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=3Tq1d3QlN_0CVPTx0NfA4ubqt0DQhdyRqJjQ_4CuFDk",
        gender: "male"
    };

export default class FriendDetailPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        friendId: props.match.params.friendId || undefined,
        friend
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  render() {
    const friend = this.state.friend;
    return (
      <div className="container-fluid">
          <h4>Friend Detail Page - Friend ID: {this.state.friendId}</h4>
          <div className="col-xs-12 col-sm-3">
            <UserInfo friend={friend} />
          </div>
      </div>
    );
  }
}
