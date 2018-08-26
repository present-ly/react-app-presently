import React, {Component} from 'react';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log('props', this.props);
    this.state = {};
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  render() {
    return (
      <form className="form">
        {/* Custom Login Container */}
        <div className="">
          {/* Username */}
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   id="username"
                   name="username"
                   placeholder="Username" />
          </div>
          {/* Password */}
          <div className="form-group">
            <input type="password"
                   className="form-control"
                   id="password"
                   name="password"
                   placeholder="Password" />
          </div>
          {/* Custom Login Submit */}
          <div className="form-group">
            <button className="btn btn-primary form-control">Login</button>
          </div>
        </div>
      </form>
    );
  }
}