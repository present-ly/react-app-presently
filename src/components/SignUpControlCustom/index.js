import React, {Component} from 'react';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class SignUpControlCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpData: {},
      blah: 'Should not make it to signUpData'
    };
  }

  componentDidMount() {
    if (TESTING && TESTING_LIFE_CYCLE) { console.log(`${this.constructor.name}.componentDidMount()`); }
  }

  updateField(fieldName, value) {
    const data = { ...this.state.signUpData };
    data[fieldName] = value;
    this.setState({
      ...this.state,
      signUpData: data
    });
  }

  signUp(e) {
    e.preventDefault();
    console.log('state', this.state);
    const signUpData = { ...this.state.signUpData };
    if (!this.isValidPassword(signUpData)) {
      return;
    }
    if (this.props.cbSignUp) {
      delete signUpData['passwordConfirm'];
      this.props.cbSignUp(signUpData);
    }
  }

  isValidPassword(data) {
    const isConfirmed = data.password === data.passwordConfirm;
    return isConfirmed;
  }

  render() {
    return (
      <form className="form">
        {/* Custom Sign Up Container */}
        <div className="">
          {/* First Name */}
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   onChange={(e) => this.updateField(e.target.name, e.target.value)}
                   id="firstName"
                   name="firstName"
                   placeholder="First name" />
          </div>
          {/* Last Name */}
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   onChange={(e) => this.updateField(e.target.name, e.target.value)}
                   id="lastName"
                   name="lastName"
                   placeholder="Last name" />
          </div>
          {/* Email */}
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   onChange={(e) => this.updateField(e.target.name, e.target.value)}
                   id="email"
                   name="email"
                   placeholder="Email Address" />
          </div>
          {/* Password */}
          <div className="form-group">
            <input type="password"
                   className="form-control"
                   onChange={(e) => this.updateField(e.target.name, e.target.value)}
                   id="password"
                   name="password"
                   placeholder="Password" />
          </div>
          {/* Password Confirm */}
          <div className="form-group">
            <input type="password"
                   className="form-control"
                   onChange={(e) => this.updateField(e.target.name, e.target.value)}
                   id="passwordConfirm"
                   name="passwordConfirm"
                   placeholder="Confirm Password" />
          </div>
          {/* Horizontal Rule */}
          <hr/>
          {/* Custom Sign Up Submit */}
          <div className="form-group">
            <button className="btn btn-primary form-control" onClick={(e) => this.signUp(e)}>{ this.props.labelSubmit || 'Sign Up' }</button>
          </div>
        </div>
      </form>
    );
  }
}
