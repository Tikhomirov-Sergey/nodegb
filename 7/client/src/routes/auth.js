import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'

import { signIn, isAuthorizedSelector } from '../ducks/auth'

import Authentication from '../components/auth/authentication'

class Auth extends Component {

    render() {

        if(this.props.isAuthorize)  {
            return <Redirect to="/" />
        }

        return (
            <section className="login section-padding">

                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-12 col-xs-12">

                            <div className="login-form login-area">

                                <div className='login-form_title-holder'>
                                    Авторизация
                                </div>

                                <Switch>
                                    <Route path='/auth' render={this.authentication} />
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    authentication = () => <Authentication onSubmit={this.handleAuthentication} />

    handleAuthentication = ({username, password}) => {this.props.signIn(username, password)}

}

export default connect(
    (state) => ({
        isAuthorize: isAuthorizedSelector(state)
    }),
    { signIn }
)(Auth)