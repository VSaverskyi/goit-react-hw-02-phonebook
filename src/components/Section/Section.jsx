import { Component } from "react";
import PropTypes from "prop-types";
import { SectionName, SectionWrapper } from "./Section.styled";

class Section extends Component {
    render() {
        return (
            <SectionWrapper>
            <SectionName>{this.props.title}</SectionName>
                {this.props.children}
            </SectionWrapper>
        )
    }
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}