import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Label = styled.label`
  font-weight: 500;
`;
export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  width: 100px;
  font-weight: 500;
  font-size: 14px;
  color: green;
  background-color: white;
  border-color: green;
  cursor: pointer;
  border-style: solid;
  :active {
    background-color: green;
    color: white;
  }
`;
export const Input = styled(Field)`
  width: 200px;
  height: 20px;
  border-radius: 10px;
  border-style: solid;
`;
export const AddContactForm = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-right: auto;
`;
