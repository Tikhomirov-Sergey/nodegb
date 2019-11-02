import React, { Component, Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'
import { NavLink } from 'react-router-dom'

import ErrorInput from '../common/controls/error-input'
import Checkbox from '../common/controls/checkbox'

class Authentiction extends Component { 

    render() {
        return (
            <form className='login-form' onSubmit={this.props.handleSubmit}>
                <div className='form-group'>
                    <Field icon='lni-envelope' name='username' id='username' placeholder='Username' component={ErrorInput} />
                </div>
                <div className='form-group'>
                    <Field icon='lni-lock' id='password' name='password' type='password' placeholder='Пароль' component={ErrorInput} />
                </div>
                <div className='form-group form-group__checlbox-holder'>
                    <Checkbox id='checkedall' label='Запомнить меня'/>
                    <NavLink to='/auth/forgot-password' className='forgetpassword'>Востановить пароль?</NavLink>
                </div>
                <div className='text-center'>
                    <button className='btn btn-common log-btn'>Войти</button>
                </div>
            </form>
        )
    }

}

const validate = ({username, password}) => {
    const errors = {}

    if (!username) errors.username = 'Укажите username'
    if (!password) errors.password = 'Укажите пароль'

    return errors
}

export default reduxForm({
    form: 'authentiction',
    validate
})(Authentiction)