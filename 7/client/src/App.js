import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/common/protected-route'

import Auth from './routes/auth'
import UserList from './routes/users'

class App extends Component {

    render() {

        return (

            <Fragment>

                <content>
                    <Switch>
                        <Route path='/auth' component={Auth} />
                        <ProtectedRoute path='/' component={UserList} />
                    </Switch>
                </content>


            </Fragment>

        )
    }
}

export default App