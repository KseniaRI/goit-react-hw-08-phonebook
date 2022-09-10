import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshingUser } from 'redux/auth/auth-selectors';

export default function PrivateRoute({children}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshingUser = useSelector(getIsRefreshingUser);
  const shouldRedirect = !isLoggedIn && !isRefreshingUser;
  return shouldRedirect ? <Navigate to='/login' /> : children ;
}