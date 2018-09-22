// REACT
import ReactDOM from 'react-dom';
// ROUTES
import { makeMainRoutes } from './routes';
// REDUX
import TestRedux from './redux/TestRedux';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// REDUX
TestRedux.log();



// ROUTER
const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
