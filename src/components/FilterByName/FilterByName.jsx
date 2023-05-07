import { Component } from "react";
import { nanoid } from "nanoid";

class FilterByName extends Component {
    render() {
        const { filter, onChange } = this.props;
        const idForFilter = nanoid();
        return (
            <>
                <label htmlFor={idForFilter}></label>
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

export default FilterByName;