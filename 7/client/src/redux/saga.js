import { all } from 'redux-saga/effects'
import { saga as authenticationSaga } from '../ducks/auth'
import { saga as userListSaga } from '../ducks/user-list'

export default function* () {
    yield all([
        authenticationSaga(),
        userListSaga(),
    ])
}