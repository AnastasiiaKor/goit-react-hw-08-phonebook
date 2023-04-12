import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks/hooks';
import { refreshUser } from 'redux/Auth/operations';
import HomePage from '../pages/HomePage';

const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

const theme = {
  colors: {
    light: '#FFFFFF',
    black: '#000000',
    blue: '#3300FF',
    red: '#FF0F00',
    greyBorder: '#666666',
    greyBgc: '#E7E7E7',
    greyText: '#7D7D7D',
    greyBtn: '#D9D9D9',
  },
};
function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
