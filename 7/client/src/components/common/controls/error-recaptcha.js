import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import ReCaptcha from './recaptcha'

class ErrorReCaptcha extends Component {

    render() {

        const {
            classNameContainer,
            input,
            meta: { error, touched },
            ...rest
        } = this.props

        return (
            <div className='recaptcha-error-holder'>
                <ReCaptcha onChange={this.props.input.onChange} />
                <div className='error-holder'>
                    {touched && error && <label className='error'>{error}</label>}
                </div>
            </div>
        )
    }
}

export default ErrorReCaptcha

ErrorReCaptcha.propTypes = {
    onChange: PropTypes.func.isRequired
}
