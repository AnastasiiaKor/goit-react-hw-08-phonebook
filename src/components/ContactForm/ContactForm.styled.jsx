import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Label = styled.label`
  font-weight: 500;
`;
export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.greyText};
  border-radius: 3px;
  background-color: ${props => props.theme.colors.greyBtn};
  svg {
    color: ${props => props.theme.colors.greyBorder};
    width: 25px;
    height: 25px;
  }
  :active {
    background-color: ${props => props.theme.colors.blue};
    svg {
      color: ${props => props.theme.colors.light};
    }
  }
  :hover {
    border-color: ${props => props.theme.colors.light};
    svg {
      color: ${props => props.theme.colors.light};
    }
  }
`;
export const Input = styled(Field)`
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
export const AddContactForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.blue};
`;

export const Error = styled.p`
  color: red;
`;
