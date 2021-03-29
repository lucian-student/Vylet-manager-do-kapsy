import React, { Fragment, useState, useEffect, useRef, useContext } from 'react';
import './responsiveCss/main.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { silentLoginQuery } from './queries/token/silentRefreshToken';
import { AuthContext } from './context/auth';
import NotAuthRoute from './utils/notAuthRoute';
import AuthRoute from './utils/authRoute';
import PageNotFound from './pages/notFoundPage';
import Login from './pages/login';
import Register from './pages/register';
import WelcomePage from './pages/welcomePage';
import Main from './pages/main';
import Menu from './components/menu';
function App() {
  const [loading, setLoading] = useState(true);
  const source = useRef(axios.CancelToken.source());
  const { loginUser } = useContext(AuthContext);
  useEffect(() => {
    const reciveData = async () => {
      await silentLoginQuery(setLoading, loginUser, source.current);
    }
    reciveData();
    const cancelToken = source.current;
    return () => {
      cancelToken.cancel('canceled');
    }
  }, [loginUser]);

  if (loading) {
    return <div>Loading ...</div>
  }
  return (
    <Fragment>
      {!loading && (
        <Router>
          <Menu />
          <Switch>
            <AuthRoute exact path='/routes/main' component={Main} />
            <NotAuthRoute exact path='/routes/login' component={Login} />
            <NotAuthRoute exact path='/routes/register' component={Register} />
            <NotAuthRoute exact path='/' component={WelcomePage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      )}
    </Fragment>
  );
}

export default App;
