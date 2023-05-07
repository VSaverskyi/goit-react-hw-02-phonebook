import { Component } from "react";
import { Container } from "./App.styled";
import Phonebook from "components/Phonebook/Phonebook";
import Section from "components/Section/Section";
import { nanoid } from "nanoid";
import Contacts from "components/Contacts/Contacts";
import FilterByName from "components/FilterByName/FilterByName";

class App extends Component {
 state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }
  
  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = (name, number) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.concat({ name, number, id: nanoid() })
      }
    });
    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    const { filter, name, number, contacts } = this.state;
    return (
      <Container>
        <Section title='Phonebook'>
          <Phonebook name={name} number={number} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        </Section>
        <Section title='Contacts'>
          <FilterByName filter={filter} onChange={this.handleChange}/>
          <Contacts contacts={contacts} filter={filter} />
        </Section>
      </Container>
    );
  }
}

export default App;