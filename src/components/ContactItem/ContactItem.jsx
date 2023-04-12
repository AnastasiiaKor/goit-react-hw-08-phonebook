import PropTypes from 'prop-types';
import { Name, Button, Phone } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import { FaTrashAlt } from 'react-icons/fa';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <Name>{contact.name}</Name>
      <Phone>{contact.number}</Phone>

      <Button type="button" onClick={handleDelete}>
        <FaTrashAlt />
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
