import { Component } from "react";
import { nanoid } from "nanoid";

class Filter extends Component {
render() {
        const { filter, onChange } = this.props;
        const idForFilter = nanoid();
        return (
            <>
                <label htmlFor={idForFilter}>Find contacts by name</label>
                <input id={idForFilter}
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={onChange}
                />
            </>
        )
    }
}

export default Filter;