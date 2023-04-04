import React from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Label, Button, Input, AddContactForm } from './ContactForm.styled';

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
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.map(contact => contact.name).includes(values.name)) {
      alert(`${values.name} is already in your contacts`);
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
        <Label htmlFor={nameInputId}>Name</Label>
        <Input type="text" name="name" id={nameInputId} />
        <ErrorMessage name="name" render={msg => alert(msg)} />
        <Label htmlFor={numberInputId}>Number</Label>
        <Input type="tel" name="number" id={numberInputId} />
        <ErrorMessage name="number" render={msg => alert(msg)} />
        <Button type="submit">Add contact</Button>
      </AddContactForm>
    </Formik>
  );
}

export default ContactForm;
