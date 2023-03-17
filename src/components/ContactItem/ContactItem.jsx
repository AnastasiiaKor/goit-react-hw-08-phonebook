import PropTypes from 'prop-types';
import { Name, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p>
        <Name>{name}:</Name> {number}
      </p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
