import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {

    render() {

        if(!this.props.label)
            return null

        return (
            <div className={this.props.classNameContainer}>
                <input {...this.props} type="checkbox" className={this.props.className} id={this.props.id} />
                <label className={this.props.labelClassName} for={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}

export default Checkbox

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    classNameContainer: PropTypes.string
}

Checkbox.defaultProps = {
    classNameContainer: "custom-control custom-checkbox",
    className: "custom-control-input",
    labelClassName: "custom-control-label"
}
