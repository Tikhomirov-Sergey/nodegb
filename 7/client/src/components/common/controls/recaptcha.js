import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReCAPTCHA from 'react-google-recaptcha'

import { recaptchaKey } from '../../../configs/main'

class ReCaptcha extends Component {

    render() {
        return (
            <div className='captcha'>
                <ReCAPTCHA
                    sitekey={recaptchaKey}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default ReCaptcha

ReCaptcha.propTypes = {
    onChange: PropTypes.func.isRequired
}