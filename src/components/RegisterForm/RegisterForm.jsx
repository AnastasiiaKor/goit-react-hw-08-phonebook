import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';
import { StyledForm, Button, StyledInput } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
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
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        <StyledInput placeholder="Username" type="text" name="name" />
      </label>
      <label>
        <StyledInput placeholder=" Email" type="email" name="email" />
      </label>
      <label>
        <StyledInput placeholder=" Password" type="password" name="password" />
      </label>
      <Button type="submit">Register</Button>
    </StyledForm>
  );
};
