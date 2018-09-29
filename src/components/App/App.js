import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Menu } from 'element-react';
import history from '../../services/History/index';
import 'element-theme-default';
import './App.css';

export default class App extends Component {
  goTo(route) {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      this.props.history.replace(`/${route}`);
    } else {
      // TODO: Add AuthorizationService.handleUnathorized();
    }
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    history.replace('/login');
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
  }

  onSelect(index, indexPath) {
    console.log('index, indexPath', index, indexPath);
    switch(index) {
      case '5-2':
        this.logout();
        break;
      case '5-3':
        this.login();
        break;

        default:
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log('isAuthenticated', isAuthenticated)
    return (
      <div>
        <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
          <Menu.Item index="1" onClick={this.goTo.bind(this, 'dashboard')}>Present-ly</Menu.Item>
          <Menu.SubMenu index="2" title="Teams">
            <Menu.Item index="2-1">Option 1</Menu.Item>
            <Menu.Item index="2-2">Option 2</Menu.Item>
            <Menu.Item index="2-3">Option 3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item index="3">Notifications</Menu.Item>
          <Menu.Item index="4">Team Members</Menu.Item>
          <Menu.SubMenu index="5" title="Profile">
            <Menu.Item index="5-1">Profile</Menu.Item>
            { isAuthenticated()
              ? <Menu.Item index="5-2">Logout</Menu.Item>
              : <Menu.Item index="5-3">Login</Menu.Item>
            }

          </Menu.SubMenu>
        </Menu>
      </div>
    );
  }
}
