import React from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
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
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'The name may contain only letters numerals'
    )
    .min(3, 'Too short')
    .max(30, 'Too long')
    .required('Required')
    .trim(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'The number may contain only letters'
    )
    .min(7, 'Too short')
    .max(20, 'Too long')
    .required('Required')
    .trim(),
});
function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
