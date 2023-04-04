import { getContacts, getFilter, getLoading } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactList.styled';
import { fetchContacts } from 'redux/operations';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

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
