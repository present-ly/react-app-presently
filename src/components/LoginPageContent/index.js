import React, {Component} from 'react';
import './LoginPageContent.css';

const TESTING = true;
const TESTING_LIFE_CYCLE = true;

export default class LoginPageContent extends Component {
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
    //const stylin = {'color':'green', 'font-size':'20px'};

    return (
      <div className="login-content text-right">
        <img className="fit-center" src="assets/logo/1x/logo-mdpi.png" width="300px" />
        <div className="pos-b-r">
          {/* HEADER */}
          <div className="login-content-header">
            <h1>Join the <em>Giving Revolution</em></h1>
          </div>
          {/* MAIN */}
          <div className="login-content-main">
            <h3>Your Go-to Gift Finder.</h3>
            <div className="w-sm-300 p-t-30 pull-right">
              <p>Present-ly is a mobile gifting app that’s transforming the giving experience.</p>
              <p><strong>Give meaningful gifts in seconds.</strong></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
