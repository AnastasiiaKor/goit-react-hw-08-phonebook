import React from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/Contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/Contacts/selectors';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Label,
  Button,
  Input,
  AddContactForm,
  Error,
} from './ContactForm.styled';
import { FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const nameInputId = nanoid();
const numberInputId = nanoid();
const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(30, 'Too long')
    .required('Required')
    .trim(),
  number: Yup.string()
    .min(7, 'Too short')
    .max(20, 'Too long')
    .required('Required')
    .trim(),
});
function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.map(contact => contact.name).includes(values.name)) {
      toast(`${values.name} is already in your contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <AddContactForm>
        <Label htmlFor={nameInputId}></Label>
        <Input placeholder="Name" type="text" name="name" id={nameInputId} />
        <ErrorMessage name="name" render={msg => <Error>{msg}</Error>} />
        <Label htmlFor={numberInputId}></Label>
        <Input
          placeholder="Phone"
          type="tel"
          name="number"
          id={numberInputId}
        />
        <ErrorMessage name="number" render={msg => <Error>{msg}</Error>} />
        <Button type="submit">
          <FaPlus />
        </Button>
        <ToastContainer />
      </AddContactForm>
    </Formik>
  );
}

export default ContactForm;
