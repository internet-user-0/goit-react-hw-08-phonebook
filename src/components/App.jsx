import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { SharedLayout } from './parts/SharedLayout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

const Register = lazy(() => import('./../pages/Reqister'));
const Login = lazy(() => import('./../pages/Login'));
const PhoneBook = lazy(() => import('./../pages/PhoneBook'));

export const App = () => {
   const dispatch = useDispatch();
   const { isRefreshing } = useAuth();

   useEffect(() => {
      dispatch(refreshUser());
   }, [dispatch]);
   
   return (
      !isRefreshing && (
         <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<RestrictedRoute component={Register} redirectTo='/contacts'/>} />
            <Route path="/login" element={<RestrictedRoute component={Login} redirectTo='/contacts'/>} />
            <Route path="/contacts" element={<PrivateRoute component={PhoneBook} redirectTo='/'/>} />
         </Route>
      </Routes>
      )
   );
};

