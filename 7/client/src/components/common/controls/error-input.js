import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import InputIcon from './input-icon'

class ErrorInput extends Component {

    render() {

        const {
            classNameContainer,
            input,
            meta: { error, touched },
            ...rest
        } = this.props

        return (
            <div className='input-error-holder'>
                <InputIcon {...rest} {...input} classNameContainer={`${classNameContainer} ${touched && error ? 'input-error-active' : ''}`} />
                <div className='error-holder'>
                    {touched && error && <label className='error'>{error}</label>}
                </div>
            </div>
        )
    }
}

export default ErrorInput

ErrorInput.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    classNameContainer: PropTypes.string
}

ErrorInput.defaultProps = {
    classNameContainer: "input-icon",
    className: "form-control",
    type: "text"
}
