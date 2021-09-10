import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const user = useSelector(state => state.user)
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      user 
      ? <Component {...props} />
      : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;