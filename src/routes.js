// LIBRARIES
import React from 'react';
import { Route, Router } from 'react-router-dom';
// SERVICES
import Auth from './services/Auth';
import history from './services/History/index';
// CONTAINER COMPONENTS
import App from './components/App/App';
// AUTH PAGES
import Callback from './components/Callback/Callback';
// PUBLIC PAGES
import AuthenticationPage from './components/AuthenticationPage';
// PRIVATE PAGES
import DashboardPage from './components/DashboardPage';
import FriendListPage from "./components/FriendListPage";

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
            {/* AUTH ROUTES */}
            <Route path="/callback" render={(props) => {
                handleAuthentication(props)
                    .then((userAuthProfile) =>{
                        console.log('UserAuthProfile', userAuthProfile);
                        history.replace('/dashboard');
                    })
                    .catch((err) => {
                        console.error('ERR - handleAuthentication()', err);
                        // TODO - AuthorizationService.handleUnauthorized();
                    });
                return <Callback {...props} />
            }}/>
            {/* PUBLIC ROUTES */}
            <Route path="/login" render={(props) => <AuthenticationPage auth={auth} isSignUp={false} {...props} />} />
            <Route path="/signUp" render={(props) => <AuthenticationPage auth={auth} isSignUp={true} {...props} />} />
            {/* PRIVATE ROUTES */}
            <Route path="/dashboard" render={(props) => <DashboardPage auth={auth} {...props} />} />
            <Route path="/friends" render={(props) => <FriendListPage auth={auth} {...props} />} />
          <Route path="" redirectTo="/login" pathMatch="full" />
        </div>
      </Router>
  );
}
