import { Component } from "react";
import { nanoid } from "nanoid";

class Phonebook extends Component  {
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(e.currentTarget.elements.name.value);
        
}

    render() {
        const { name, onChange } = this.props;
        const idForName = nanoid();

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
                    onChange={onChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default Phonebook;