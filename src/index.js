// REACT
import ReactDOM from 'react-dom';
// ROUTES
import { makeMainRoutes } from './routes';
// REDUX
import TestRedux from './redux/TestRedux';
// SERVICES
// import {
//     EnvironmentManager,
//     ENVIRONMENTS
// } from "./services/EnvironmentManager";
// import {
//     EnvironmentManager,
//     ENVIRONMENTS
// } from "./services/EnvironmentManager";
import {
    UserRepository
} from './services/User';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// REDUX
TestRedux.log();
// Environment
// const Environment = new EnvironmentManager(ENVIRONMENTS.LOCAL);
// Environment.log();
// const test = await Environment.testClient();

const UserRepo = new UserRepository();
UserRepo.signUp('matthew.valli@gmail.com', 'Test123!', 'Matt', 'Valli')
    .then(res => {
        const users = res.data;
        console.log('users', users);
    })
    .catch(err => {
        console.error('ERR - Something went wrong fetching the users', err.data);
    });
UserRepo.fetchMany()
    .then(res => {
        const users = res.data;
        console.log('users', users);
    })
    .catch(err => {
        console.error('ERR - Something went wrong fetching the users', err.data);
    });



// ROUTER
const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
