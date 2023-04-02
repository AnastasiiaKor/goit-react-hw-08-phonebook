import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactList.styled';
import { fetchContacts } from 'redux/operations';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactItem contact={contact} />
          </Item>
        );
      })}
    </List>
  );
}

export default ContactList;
