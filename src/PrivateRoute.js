/* eslint-disable */
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOADING, AUTHENTICATED } from './constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  if (auth.status === LOADING) return <p>Loading ....</p>;

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.status === AUTHENTICATED ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
};

export default PrivateRoute;
