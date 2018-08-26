import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './components/App/App';
import DashboardPage from './components/DashboardPage';
import LoginPage from './components/LoginPage';
import Callback from './components/Callback/Callback';
import Auth from './services/Auth';
import history from './services/History/index';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    return auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div className="fill-height">
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/login" render={(props) => <LoginPage auth={auth} {...props} />} />
          <Route path="/dashboard" render={(props) => <DashboardPage auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props)
              .then((userAuthProfile) =>{
                console.log('UserAuthProfile', userAuthProfile);
                history.replace('/dashboard');
              })
              .catch((err) => {
                console.error('ERR - handleAuthentication()', err);
                history.replace('/login');
              });
            return <Callback {...props} /> 
          }}/>
          <Route path="" redirectTo="/home" pathMatch="full" />
        </div>
      </Router>
  );
}
