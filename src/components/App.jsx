import { Container } from "./Details/Container.styled";
import { ContactForm } from "./Contacts/ContactForm";
import { GlobalStyle } from "./GlobalStyle";
import { Filter } from "./FilterContact/FilterContact";
import { ContactList } from "./ContactList/ContactList";



export const App =() => {

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  ); 
}


