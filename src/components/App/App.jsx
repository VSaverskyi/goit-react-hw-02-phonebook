import { Component } from "react";
import { Container } from "./App.styled";
import Phonebook from "components/Phonebook/Phonebook";
import Section from "components/Section/Section";
import { nanoid } from "nanoid";
import Contacts from "components/Contacts/Contacts";

class App extends Component {
state = {
  contacts: [],
  name: '',
  number: ''
  }
  
  handleChangeName = e => {
    this.setState({
      name: e.currentTarget.value
    })
  }

  handleChangeNumber = e => {
    this.setState({
      number: e.currentTarget.value
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
    return (
      <Container>
        <Section title='Phonebook'>
          <Phonebook name={this.state.name} number={this.state.number} onChangeName={this.handleChangeName} onChangeNumber={this.handleChangeNumber} onSubmit={this.handleSubmit}/>
        </Section>
        <Section title='Contacts'>
          <Contacts contacts={this.state.contacts}/>
        </Section>
      </Container>
    );
  }
}

export default App;