import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

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

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}