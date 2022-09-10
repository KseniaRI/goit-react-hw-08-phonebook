import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/shared-layout/SharedLayout';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/auth-pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/auth-pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

    return (
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path='contacts' element={<PrivateRoute><ContactsPage/></PrivateRoute>} />
            <Route path='register' element={<PublicRoute restricted><RegisterPage/></PublicRoute>} />
            <Route path='login' element={<PublicRoute restricted><LoginPage/></PublicRoute>} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
    );
}


 
  
  
