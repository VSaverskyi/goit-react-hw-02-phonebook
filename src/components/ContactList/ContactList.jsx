import ContactListItem from "components/ContactListItem/ContactListItem";
import { Component } from "react";
import PropTypes from "prop-types";
import { ContactListWrapper } from "./ContactList.styled";

class ContactList extends Component {
    checkIncludesFilterInArray = (item) => {
        const { filter } = this.props;
        return item.name.toLowerCase().includes(filter.toLowerCase());
    }

    render() {
        const { contacts, filter, onDeleteBtnClick } = this.props;
        const contactsFilter = contacts.filter(this.checkIncludesFilterInArray);
        return (
            <ContactListWrapper>
                {filter === '' ? (contacts.map((item) => (
                    <ContactListItem key={item.id} item={item} onDeleteBtn={onDeleteBtnClick}/>
                ))) : ((contactsFilter.length === 0) ? (<li>Contact don`t find</li>) : (contactsFilter
                .map((item) => (
                    <ContactListItem key={item.id} item={item} onDeleteBtn={onDeleteBtnClick}/>
                ))))}
            </ContactListWrapper>
        )
    }
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    filter: PropTypes.string.isRequired,
    onDeleteBtnClick: PropTypes.func.isRequired,
}