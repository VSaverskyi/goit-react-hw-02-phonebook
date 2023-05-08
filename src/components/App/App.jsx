import { Component } from "react";
import { Container } from "./App.styled";
import ContactForm from "components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

class App extends Component {
  state = {
  contacts: [],
  filter: ''
}
  
  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = (name, number) => {
    this.state.contacts.find((item) => item.name.toLowerCase() === name.toLowerCase()) ?
      alert(name + ' is already in contacts.') :
      this.setState((prevState) => {
        return {contacts: prevState.contacts.concat({ name, number, id: nanoid() })}
      }
    );
  }

  handleDeleteBtnClick = (id) => {
    this.setState((prevState) => {
      return {contacts: prevState.contacts.filter((item) => item.id !== id)}
    })
  }

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm  onSubmit={this.handleSubmit} />
        
        {contacts.length !== 0 && 
        <>
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.handleChange}/>
          <ContactList contacts={contacts} filter={filter} onDeleteBtnClick={this.handleDeleteBtnClick} />
        </>
        }
      </Container>
    );
  }
}

export default App;