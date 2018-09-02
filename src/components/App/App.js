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

  onSelect() {

  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
          <Menu.Item index="1">Edisen</Menu.Item>
          <Menu.SubMenu index="2" title="Teams">
            <Menu.Item index="2-1">Option 1</Menu.Item>
            <Menu.Item index="2-2">Option 2</Menu.Item>
            <Menu.Item index="2-3">Option 3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item index="3">Notifications</Menu.Item>
          <Menu.Item index="4">Team Members</Menu.Item>
          <Menu.SubMenu index="5" title="Profile">
            <Menu.Item index="5-1">Profile</Menu.Item>
            <Menu.Item index="5-2">Logout</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <div className="line"></div>
        <Navbar fluid className="no-margin-bottom">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Edisen</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'dashboard')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
