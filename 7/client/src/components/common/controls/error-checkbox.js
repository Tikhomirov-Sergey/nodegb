import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Checkbox from './checkbox'

class ErrorCheckbox extends Component {

    render() {

        const {
            classNameContainer,
            input,
            meta: { error, touched },
            ...rest
        } = this.props

        return (
            <Checkbox {...rest} {...input} classNameContainer={`${classNameContainer} ${touched && error ? 'checkbox-error-active' : ''}`} />
        )
    }
}

export default ErrorCheckbox

ErrorCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    classNameContainer: PropTypes.string
}

ErrorCheckbox.defaultProps = {
    classNameContainer: "custom-control custom-checkbox",
    className: "custom-control-input",
    labelClassName: "custom-control-label"
}
