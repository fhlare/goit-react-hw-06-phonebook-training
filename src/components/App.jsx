// import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';



export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && (
        <ContactList/>
      )}
      <GlobalStyle />
    </Container>
  );
};
