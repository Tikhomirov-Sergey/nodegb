import axios from 'axios'
import { call, put, takeEvery, all, select } from 'redux-saga/effects'

import { accessTokenSelector } from '../../ducks/auth'
import { apiUrl as baseURL } from '../../config'

export default class Api {

    static Get = (url, data, options) => {
        return Api.Request(url, 'GET', data, options)
    }

    static Post = (url, data, options) => {
        return Api.Request(url, 'POST', data, options)
    }

    static Request = (url, method, data, config) => {

        config = config || {}
        
        return new Promise(async (resolve, reject) => {

            try {
                debugger
                const { data: result } = await axios({ method, baseURL, url, data, ...config })

                resolve(result)
            }
            catch(error) {
                resolve({error})
            }
        });
    }

    static GetSaga = function* (url, data, needAuthorization) {
        debugger
        let config = {}

        if(needAuthorization) {
            const token = yield select(accessTokenSelector)

            config.headers = config.headers || {}
            config.headers.Accept = config.headers.Accept || {}

            config.headers.Accept.Authorization = `Bearer ${token}`
        }

        config.crossDomain = true

        return yield call(Api.Get, url, data, config)
    }

}