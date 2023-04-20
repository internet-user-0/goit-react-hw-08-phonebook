import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from '../components/parts/PagesStyle.module.css';

const Login = () => {
   const dispatch = useDispatch();

   const submit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      if (
         !e.currentTarget.email.value ||
         !e.currentTarget.password.value
      ) {
         return;
      }
      dispatch(
         logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
         })
      );
      form.reset();
   };

   return (
      <main>
         <h1>Login</h1>
         <form className={css.form} onSubmit={submit}>
            <label className={css.form__label}>
               <p className={css.form__text}>email</p>
               <input className={css.form__input} type="email" name="email" />
            </label>
            <label className={css.form__label}>
               <p className={css.form__text}>password</p>
               <input className={css.form__input} type="password" name="password" />
            </label>
            <button className={css.form__btn} type="submit">submit</button>
         </form>
      </main>
   );
};

export default Login;
