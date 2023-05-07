import { Component } from "react";

class Contacts extends Component {
    render() {
        const { contacts } = this.props;
        return (
            <ul>
                {contacts.map((item) => (
                    <li key={item.id}>
                        {item.name}:{item.number}
                    </li>
                ))}
            </ul>
        )
    }
}

export default Contacts;