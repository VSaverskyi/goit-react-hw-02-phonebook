import ContactListItem from "components/ContactListItem/ContactListItem";
import { Component } from "react";

class ContactList extends Component {
    checkIncludesFilterInArray = (item) => {
        const { filter } = this.props;
        return item.name.toLowerCase().includes(filter.toLowerCase());
    }

    render() {
        const { contacts, filter, onDeleteBtnClick } = this.props;
        const contactsFilter = contacts.filter(this.checkIncludesFilterInArray);
        return (
            <ul>
                {filter === '' ? (contacts.map((item) => (
                    <ContactListItem key={item.id} item={item} onDeleteBtn={onDeleteBtnClick}/>
                ))) : ((contactsFilter.length === 0) ? (<li>Contact don`t find</li>) : (contactsFilter
                .map((item) => (
                    <ContactListItem key={item.id} item={item} onDeleteBtn={onDeleteBtnClick}/>
                ))))}
            </ul>
        )
    }
}

export default ContactList;