import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: ${props => props.theme.colors.light};
  :hover {
    color: ${props => props.theme.colors.greyText};
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
