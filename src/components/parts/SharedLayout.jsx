import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './sharedLayout.module.css';
import styled from 'styled-components';

import { useAuth } from 'hooks';
import { logOut} from 'redux/auth/operations';

const StyledLink = styled(NavLink)`
   &.active {
      color: blue;
   }
`;




export const SharedLayout = () => {
   const { isLoggedIn, user } = useAuth();
   const dispatch = useDispatch();

   return (
      <div>
         <header className={css.container}>
            <nav>
               {isLoggedIn ? (
                  <div>
                     <h4>{user.email}</h4>
                     <button type="button" onClick={() => dispatch(logOut())}>
                        log out
                     </button>
                  </div>
               ) : (
                  <div>
                     <StyledLink to="/" className={css.navLink}>
                        регистрация
                     </StyledLink>
                     <StyledLink to="/login" className={css.navLink}>
                        войти
                     </StyledLink>
                  </div>
               )}
               {false && (
                  <div>
                     <p>добро пожаловать</p>
                     <StyledLink to="/register" className={css.navLink}>
                        выйти
                     </StyledLink>
                  </div>
               )}
            </nav>
         </header>
         <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
         </Suspense>
      </div>
   );
};
