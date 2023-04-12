import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Greeting = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.light};
  margin: 0 10px;
`;
export const LogOutBtn = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.greyText};
  border-radius: 3px;
  background-color: ${props => props.theme.colors.greyBtn};
  color: ${props => props.theme.colors.greyBorder};
  font-weight: 600;
  font-size: 15px;

  :active {
    background-color: ${props => props.theme.colors.blue};

    color: ${props => props.theme.colors.light};
  }
  :hover {
    border-color: ${props => props.theme.colors.light};

    color: ${props => props.theme.colors.light};
  }
`;
