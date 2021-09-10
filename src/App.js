import  { Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tasks from './Tasks'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import history from './history'
import "./App.css"

function Alert({ type="info", children }) {
  return <p className={`alert alert-${type}`}>{children}</p>
}

export default function App() {
  const error = useSelector(state => state.error)
  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Tasks} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>

      { error ? <Alert type="error">{error}</Alert> : null }
    </div>
  )
}
