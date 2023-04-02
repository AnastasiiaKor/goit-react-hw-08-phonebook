import PropTypes from 'prop-types';
import { Name, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <p>
        <Name>{contact.name}:</Name> {contact.phone}
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
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactItem;
