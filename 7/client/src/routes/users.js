import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'

import { usersListSelector, loadUsers } from '../ducks/user-list'

class Users extends Component {

    componentDidMount() {
        this.props.loadUsers();
    }

    render() {

        return (
            <div>List</div>
        )
    }

}

export default connect(
    (state) => ({
        usersList: usersListSelector(state)
    }),
    { loadUsers }
)(Users)