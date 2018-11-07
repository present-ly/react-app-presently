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
    return (
      <div>
        <h1>The Giving Revolution</h1>
      </div>
    );
  }
}
