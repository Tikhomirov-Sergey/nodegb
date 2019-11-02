import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import authenticationReducer, { moduleName as authenticationModule } from '../ducks/auth'
import userListReducer, { moduleName as userListModule } from '../ducks/user-list'

export default combineReducers({
    form,
    [authenticationModule]: authenticationReducer,
    [userListModule]: userListReducer,
})