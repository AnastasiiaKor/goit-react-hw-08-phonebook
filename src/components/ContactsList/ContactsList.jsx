import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactList.styled';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <Item key={id}>
            <ContactItem name={name} number={number} id={id} />
          </Item>
        );
      })}
    </List>
  );
}

export default ContactList;
