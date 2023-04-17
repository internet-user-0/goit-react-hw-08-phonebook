import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/operations';


const Login = () => {
const dispatch = useDispatch();

const submit = e => {
   e.preventDefault();
   const form = e.currentTarget;
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
         <h1>войти</h1>
         <form action="" onSubmit={submit}>
            email
            <input type="email" name="email"/>
            <br />
            password
            <input type="password" name="password"/>
            <br />
            <button type="submit">submit</button>
         </form>
      </main>
   );
};

export default Login;
