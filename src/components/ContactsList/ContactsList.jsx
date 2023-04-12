import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/Contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactList.styled';
import { fetchContacts } from 'redux/Contacts/operations';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>Loading contacts...</div>}
      <List>
        {filteredContacts.map(contact => {
          return (
            <Item key={contact.id}>
              <ContactItem contact={contact} />
            </Item>
          );
        })}
      </List>
    </>
  );
}

export default ContactList;
