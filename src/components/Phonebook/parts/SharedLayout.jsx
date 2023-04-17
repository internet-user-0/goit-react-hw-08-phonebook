import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './sharedLayout.module.css';
import styled from 'styled-components';

import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';

const StyledLink = styled(NavLink)`
   &.active {
      color: tomato;
   }
`;

export const SharedLayout = () => {
   const { isLoggedIn } = useAuth();
   const dispatch = useDispatch();
   console.log(isLoggedIn);
   return (
      <div>
         <header className={css.container}>
            <nav>
               {isLoggedIn ? (
                  <div>
                     <StyledLink to="/contacts" className={css.navLink}>
                        контакты
                     </StyledLink>
                     {/* <StyledLink></StyledLink> */}
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
