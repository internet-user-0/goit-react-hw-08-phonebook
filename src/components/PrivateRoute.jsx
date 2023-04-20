import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({component: Component, redirectTo = "/"}) => {
   const {isLoggedIn, isRefreshing} = useAuth();
   const souldRedirect = !isRefreshing && !isLoggedIn;

   return souldRedirect ? <Navigate to={redirectTo}/> : <Component/>
}