import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


const Register = () => {
   const dispatch = useDispatch();

   const submit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
         register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
         })
      );
      form.reset();
   };

   return (
      <main>
         <h1>регистрация</h1>
         <form action="" onSubmit={submit}>
            email
            <input type="email" name='email'/>
            <br />
            name
            <input type="text" name='name'/>
            <br />
            password
            <input type="password" name='password'/>
            <br />
            <button type="submit">submit</button>
         </form>
      </main>
   );
};

export default Register;
