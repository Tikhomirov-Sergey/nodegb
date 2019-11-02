import { appName } from '../../config'
import { createSelector } from 'reselect'
import { Record, OrderedMap, List } from 'immutable'
import { call, put, takeEvery, all, select } from 'redux-saga/effects'
import { replace } from 'connected-react-router'
import jwt from 'jwt-decode'

import { UserAuthEntity } from './entity/auth-entity'
import Api from '../../helpers/api'
import errorAction from '../../helpers/error'
import LocalStorage from '../../helpers/local-storage'

/*
*   Contstants 
*/

export const moduleName = 'auth'

const prefix = `${appName}/${moduleName}`

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`

/*
*   Reducer
*/

export const ReducerRecord = Record({
    accessToken: null,
    user: null
})

export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action

    switch (type) {

        case SIGN_IN_SUCCESS: 
            return state
                .set('accessToken', payload.access_token)
                .set('user', payload.user)

        default: 
            return state
 
    }
}

/*
*   Selectors
*/

export const stateSelector = (state) => state[moduleName]
export const userSelector = createSelector(stateSelector, state => state.user)

export const isAuthorizedSelector = createSelector(
    userSelector,
    (user) => !!user
)

export const accessTokenSelector = createSelector(stateSelector, state => state.accessToken)

/*
*   Action Creaters
*/

export function signIn(username, password) {
    return {
        type: SIGN_IN_REQUEST,
        payload: { username, password }
    }
}

/*
*   Sagas
*/

export function* signInSaga({payload}) {

    const {username, password} = payload
    const { error, result } = yield call(Api.Post, 'auth', {username, password})
    
    if(error) {
        return errorAction(error)
    }

    const { user } = jwt(result.access_token)

    yield put({
        type: SIGN_IN_SUCCESS,
        payload: { user, access_token: result.access_token }
    })

    LocalStorage.setObjectToStorage(result.refresh_token, 'refresh_token')
}

export function* saga() {
    yield all([
        takeEvery(SIGN_IN_REQUEST, signInSaga),
    ])
}