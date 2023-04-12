import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  border-color: ${props => props.theme.colors.greyBorder};
  ::placeholder {
    color: ${props => props.theme.colors.greyText};
  }
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.greyText};
  border-radius: 3px;
  /* background-color: ${props => props.theme.colors.greyBtn}; */
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
