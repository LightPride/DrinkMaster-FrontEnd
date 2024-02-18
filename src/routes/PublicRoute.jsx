import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ component: Component, redirectTo = '/' }) {
  const { token } = useSelector((state) => state.auth);
  const isAuthenticated = token;

  return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
}

export default PublicRoute;
