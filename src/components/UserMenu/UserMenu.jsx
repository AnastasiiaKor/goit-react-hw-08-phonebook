import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';
import { logOut } from 'redux/Auth/operations';
import { FlexContainer, Greeting, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <FlexContainer>
      <Greeting>Welcome, {user.name}</Greeting>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </FlexContainer>
  );
};
