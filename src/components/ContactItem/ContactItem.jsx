import PropTypes from 'prop-types';
import { Name, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <p>
        <Name>{contact.name}:</Name> {contact.number}
      </p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactItem;
