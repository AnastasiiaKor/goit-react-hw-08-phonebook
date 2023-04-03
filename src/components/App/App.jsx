import { ThemeProvider } from '@emotion/react';
import ContactForm from '../ContactForm';
import { Wrapper } from './App.styled';
import { Section } from 'components/Section/Section';

const theme = {
  colors: {
    light: '#FFFFFF',
    black: '#000000',
    blue: '#3300FF',
    red: '#FF0F00',
    greyBorder: '#666666',
    greyBgc: '#E7E7E7',
    greyText: '#7D7D7D',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <Section />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
