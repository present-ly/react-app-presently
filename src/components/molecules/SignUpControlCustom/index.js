import React, {Component} from 'react';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class SignUpControlCustom extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  signUp() {
    const res = {};
    if (this.props.cbSignUp) {
      this.props.cbSignUp(res);
    }
  }

  render() {
    return (
      <form className="form">
        {/* Custom Sign Up Container */}
        <div className="">
          {/* Username */}
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   id="firstName"
                   name="firstName"
                   placeholder="First name" />
          </div>
          {/* Username */}
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   id="lastName"
                   name="lastName"
                   placeholder="Last name" />
          </div>
          {/* Email */}
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   id="email"
                   name="email"
                   placeholder="Email" />
          </div>
          {/* Password */}
          <div className="form-group">
            <input type="password"
                   className="form-control"
                   id="password"
                   name="password"
                   placeholder="Password" />
          </div>
          {/* Password Confirm */}
          <div className="form-group">
            <input type="password"
                   className="form-control"
                   id="password-confirm"
                   name="password-confirm"
                   placeholder="Confirm Password" />
          </div>
          {/* Horizontal Rule */}
          <hr/>
          {/* Custom Sign Up Submit */}
          <div className="form-group">
            <button className="btn btn-primary form-control" onClick={this.signUp}>{ this.props.labelSubmit || 'Sign Up' }</button>
          </div>
        </div>
      </form>
    );
  }
}