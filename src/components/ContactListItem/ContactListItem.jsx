import { Component } from "react";
import PropTypes from "prop-types";

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

ContactListItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    onDeleteBtn: PropTypes.func.isRequired,
}