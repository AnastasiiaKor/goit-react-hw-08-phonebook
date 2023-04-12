import { useAuth } from 'hooks/hooks';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav
      style={{
        display: 'flex',
        gap: 10,
      }}
    >
      <StyledLink
        style={({ isActive }) => ({
          color: isActive && 'red',
        })}
        to="/"
      >
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink
          style={({ isActive }) => ({
            color: isActive && 'red',
          })}
          to="/contacts"
        >
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};
