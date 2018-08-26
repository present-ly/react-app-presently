import React, {Component} from 'react';

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
        <h1>Get things done...<i>FAST</i>!</h1>
        <p>Manage and share your media with ease so you can focus on your business and not opertions.</p>
        <h2>Simplify your team interactions</h2>
        <p>Maintain focused discussion by applying messaging directly on Assets.</p>
        <h2>Iterate quickly and track your history</h2>
        <p>Version your media so that refinement happens in a <i>snap</i>!</p>
        <h2>Share content easily</h2>
        <p>Invite non-organizational members to view your content, keeping your customers in the loop and your projects on track.</p>
      </div>
    );
  }
}