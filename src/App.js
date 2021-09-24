import { Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Tasks from './Tasks';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';
import UploadImage from './UploadImage';
import history from './history';
// import { loadUser } from './actionCreators';
// import { LOGOUT, TOKEN } from './constants';
import Card from './components/Card';

import './App.css';

function Alert({ type = 'info', children }) {
  return <p className={`alert alert-${type}`}>{children}</p>;
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function App() {
  const error = useSelector((state) => state.error);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem(TOKEN)) {
  //     dispatch(loadUser());
  //   } else {
  //     dispatch({
  //       type: LOGOUT,
  //     });
  //   }
  // }, [dispatch]);

  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Tasks} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/upload" component={UploadImage} />
          <Route exact path="/card" component={Card} />
        </Switch>
      </Router>

      {error ? <Alert type="error">{error}</Alert> : null}
    </div>
  );
}
