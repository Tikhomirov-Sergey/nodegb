import { localstorageKey } from '../config'

export default class LocalStorage {

    static setObjectToStorage(object, prefix) {
        localStorage.setItem(`${localstorageKey}-${prefix}`, JSON.stringify(object))
    }

    static getObjectFromStorage(prefix) {
        const object = localStorage.getItem(`${localstorageKey}-${prefix}`)
        return object && JSON.parse(object)
    }

    static learStorage(prefix) {
        localStorage.removeItem(`${localstorageKey}-${prefix}`)
    }

}