import ContactList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter';
import { ContactsSection, Title, FlexContainer } from './Section.styled';

export function Section() {
  return (
    <ContactsSection>
      <FlexContainer>
        <Title>Contacts</Title>
        <Filter />
      </FlexContainer>
      <ContactList />
    </ContactsSection>
  );
}
