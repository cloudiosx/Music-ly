import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Feed from './components/Feed/Feed';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session/actions';
import MainLayoutTemplate from './layout/MainLayoutTemplate';
import { mainLayoutRoutes } from './routes';
import { getAllUsers } from './store/user/actions';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const renderMainLayoutRoutes = (routes) => {
    return routes.map((route, idx) => {
      // by dafault route's exact is true if no declare
      const isExact = route.exact === undefined ? true : route.exact;
      return <MainLayoutTemplate key={idx} exact={isExact} path={route.path} Component={route.component} />;
    });
  };

  useEffect(() => {
    setLoaded(false);
    dispatch(
      authenticate(() => {
        dispatch(getAllUsers());
        setLoaded(true);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>{renderMainLayoutRoutes(mainLayoutRoutes)}</Switch>
    </BrowserRouter>
  );
}

export default App;
