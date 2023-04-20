import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './sharedLayout.module.css';
import styled from 'styled-components';

import { useAuth } from 'hooks';
import { logOut} from 'redux/auth/operations';

const StyledLink = styled(NavLink)`
   &.active {
      color: #92230f;
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
                  <div className={css.userOn}>
                     <p className={css.userMail}>{user.email}</p>
                     <button className={css.userButton} type="button" onClick={() => dispatch(logOut())}>
                        log out
                     </button>
                  </div>
               ) : (
                  <div className={css.userOff__container}>
                     <p className={css.logo}>Contact book</p>
                     <div className={css.userOff}>
                     <StyledLink to="/" className={css.navLink}>
                     Register
                     </StyledLink>
                     <StyledLink to="/login" className={css.navLink}>
                     Login
                     </StyledLink>
                  </div>
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
