import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class InputIcon extends Component {

    render() {
        return (
            <div className={this.props.classNameContainer}>
                {this.props.icon && <i className={this.props.icon} />}
                <input id={this.props.id} className={this.props.className} name={this.props.name} {...this.props} />
            </div>
        )
    }
}

export default InputIcon

InputIcon.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    classNameContainer: PropTypes.string
}

InputIcon.defaultProps = {
    classNameContainer: "input-icon",
    className: "form-control",
    type: "text"
}
