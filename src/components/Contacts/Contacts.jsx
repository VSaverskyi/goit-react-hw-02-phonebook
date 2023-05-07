import { Component } from "react";

class Contacts extends Component {
    render() {
        const { contacts, filter } = this.props;
        return (
            <ul>
                {filter === '' ? (contacts.map((item) => (
                    <li key={item.id}>
                        {item.name}:{item.number}
                    </li>
                ))) : ((contacts.filter((item) => {
                    return item.name.toLowerCase().includes(filter.toLowerCase());
                }).length === 0) ? (<li>Contact don`t find</li>) : (contacts.filter((item) => {
                    return item.name.toLowerCase().includes(filter.toLowerCase());
                })
                .map((item) => (
                    <li key={item.id}>
                        {item.name}:{item.number}
                    </li>
                ))))}
            </ul>
        )
    }
}

export default Contacts;