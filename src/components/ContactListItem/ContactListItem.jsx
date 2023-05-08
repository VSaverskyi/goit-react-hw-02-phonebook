import { Component } from "react";

class ContactListItem extends Component {
    render() {
        const {  item, onDeleteBtn } = this.props;
        return (
            <li>
                {item.name}:{item.number}
                <button type="button" onClick={() => onDeleteBtn(item.id)}>Delete</button>
            </li>
        )
    }
}

export default ContactListItem;