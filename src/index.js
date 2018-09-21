// REACT
import ReactDOM from 'react-dom';
// ROUTES
import { makeMainRoutes } from './routes';
// REDUX
import TestRedux from './redux/test';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// REDUX
TestRedux.initialState();

// ROUTER
const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
