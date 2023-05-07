import { Component } from "react";
import { Container } from "./App.styled";
import Phonebook from "components/Phonebook/Phonebook";
import Section from "components/Section/Section";
import { nanoid } from "nanoid";
import Contacts from "components/Contacts/Contacts";

class App extends Component {
state = {
  contacts: [],
  name: ''
  }
  
  handleChange = e => {
    this.setState({
      name: e.currentTarget.value
    })
  }

  handleSubmit = (formData) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.concat({ name: formData, id: nanoid() })
      }
    });
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <Container>
        <Section title='Phonebook'>
          <Phonebook name={this.state.name} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        </Section>
        <Section title='Contacts'>
          <Contacts contacts={this.state.contacts}/>
        </Section>
      </Container>
    );
  }
}

export default App;