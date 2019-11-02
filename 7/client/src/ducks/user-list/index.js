import { appName } from '../../config'
import { createSelector } from 'reselect'
import { Record, OrderedMap, List } from 'immutable'
import { call, put, takeEvery, all, select } from 'redux-saga/effects'
import { replace } from 'connected-react-router'

import Api from '../../helpers/api'

/*
*   Contstants 
*/

export const moduleName = 'users-list'

const prefix = `${appName}/${moduleName}`

export const LOAD_USERS_REQUEST = `${prefix}/LOAD_USERS_REQUEST`
export const LOAD_USERS_SUCCESS = `${prefix}/LOAD_USERS_SUCCESS`

/*
*   Reducer
*/

export const ReducerRecord = Record({
    users: List()
})

export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action

    switch (type) {

        case LOAD_USERS_SUCCESS: 
            return state

        default: 
            return state
 
    }
}

/*
*   Selectors
*/

export const stateSelector = (state) => state[moduleName]
export const usersListSelector = createSelector(stateSelector, state => state.users)

/*
*   Action Creaters
*/

export function loadUsers(username, password) {
    return {
        type: LOAD_USERS_REQUEST
    }
}

/*
*   Sagas
*/

export function* loadUsersSaga({payload}) {

    debugger
    const data = yield call(Api.GetSaga, 'api/user-list', null, true)
    debugger
}

export function* saga() {
    yield all([
        takeEvery(LOAD_USERS_REQUEST, loadUsersSaga),
    ])
}