import React, { Component } from 'react';
import _ from 'lodash';
// APP COMPONENTS
import FriendListItem from '../FriendListItem';
// TESTING
//const TESTING = true;
// const LOG_ENTRY = true;
// const LOG_SEQUENCE = true;
// MOCK DATA
const mockedFriendList = [
    {
        id: '1',
        firstName: "Matt",
        lastName: "Valli",
        dateOfBirth: "05/27/1987",
        avatarURL: "https://media.licdn.com/dms/image/C4E03AQFdcDwlmX3n7w/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=3Tq1d3QlN_0CVPTx0NfA4ubqt0DQhdyRqJjQ_4CuFDk"
    },
    {
        id: '2',
        firstName: "Steph",
        lastName: "Huynh",
        dateOfBirth: "08/07/1980",
        avatarURL: "https://media.licdn.com/dms/image/C4E03AQFdcDwlmX3n7w/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=3Tq1d3QlN_0CVPTx0NfA4ubqt0DQhdyRqJjQ_4CuFDk"
    },
    {
        id: '3',
        firstName: "Justin",
        lastName: "Radeka",
        dateOfBirth: "01/11/1970",
        avatarURL: "https://media.licdn.com/dms/image/C4E03AQFdcDwlmX3n7w/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=3Tq1d3QlN_0CVPTx0NfA4ubqt0DQhdyRqJjQ_4CuFDk"
    }
];

export default class FriendListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        friendList: mockedFriendList
    };
  }

  CLASSNAME() {
      return this.constructor.name;
  }

  componentDidMount() {
    console.log('componentDidMount()');
    // TODO: Use AJAX to fetch a users friend list
  }

  displayFriends(friendList) {
    return _.map(friendList, (friend) => {
      return (
          <FriendListItem friend={friend}
                          key={ friend.id } />
      );
    })
  }

  render() {
    const friendList = this.state.friendList;
    return (
      <div className="container">
          <h4>Friend List Page</h4>
          {this.displayFriends(friendList)}
      </div>
    );
  }
}
