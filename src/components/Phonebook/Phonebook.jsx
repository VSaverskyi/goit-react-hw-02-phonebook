import { Component } from "react";
import { nanoid } from "nanoid";

class Phonebook extends Component  {
    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = e.currentTarget.elements;
        this.props.onSubmit(name.value, number.value );
    }

    render() {
        const { name, number, onChangeName, onChangeNumber } = this.props;
        const idForName = nanoid();
        const idForTel = nanoid();

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={idForName}>
                    Name
                </label>
                <input
                    id={idForName}
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChangeName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor={idForTel}>
                    Number
                </label>
                <input
                    id={idForTel}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={onChangeNumber}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default Phonebook;