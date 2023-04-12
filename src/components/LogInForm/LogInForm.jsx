import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
import { StyledForm, StyledInput, Button } from './LoginForm.styled';

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
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
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        <StyledInput placeholder="Email" type="email" name="email" />
      </label>
      <label>
        <StyledInput placeholder="Password" type="password" name="password" />
      </label>
      <Button type="submit">Log In</Button>
    </StyledForm>
  );
}
