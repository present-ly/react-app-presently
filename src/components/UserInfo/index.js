import React, { Component } from 'react';

const friend =     {

    };

export default class UserInfo extends Component {

  constructor(props) {
    super(props);
    const self = this;
    this.state = {
        friend: props.friend,
        disableUserInput: true
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  updateDateOfBirth(e) {
    const newDateOfBirth = e.target.value;
    const friend = Object.assign(self.state.friend, {
        dateOfBirth: newDateOfBirth
      });
    this.setState({
      friend
    });
  }

  render() {
    const friend = this.state.friend;
    const fullname = `${friend.firstName} ${friend.lastName}`;
    const disableUserInput = this.state.disableUserInput;
    return (
      <div className="bg-primary">
        <div>
          <img src={friend.avatarURL} alt={`Image of ${fullname}`} />
          <h4>{fullname}</h4>
        </div>
        <div>
          <div className="form-group">
            <label for="dateOfBirth">Birthday</label>
            <input className="form-control"
                    type="text"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    placeholder="08/07/1980"
                    value={friend.dateOfBirth}
                    onChange={this.updateDateOfBirth}
                    disabled={disableUserInput ? "disabled" : ""}></input>

          </div>

        </div>
      </div>
    );
  }
}
