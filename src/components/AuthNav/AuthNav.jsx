import { StyledLink, FlexContainer } from './AuthNav.styles';

export const AuthNav = () => {
  return (
    <FlexContainer>
      <StyledLink
        style={({ isActive }) => ({
          color: isActive && 'red',
        })}
        to="/register"
      >
        Register
      </StyledLink>
      <StyledLink
        style={({ isActive }) => ({
          color: isActive && 'red',
        })}
        to="/login"
      >
        Log In
      </StyledLink>
    </FlexContainer>
  );
};
