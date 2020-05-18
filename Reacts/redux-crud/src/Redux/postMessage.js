import api from "./api.js";
import {ACTION_TYPES} from './postType'

export const fetchAll = () => dispatch => {
    console.log(api.postMessage())
    api.postMessage().fetchAll()
        .then(res => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: res.data.Data
            })
        })
        .catch(err => console.log(err))

}

export const create = (data, onSuccess) => dispatch => {
    api.postMessage().create(data)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data.Data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id,data, onSuccess) => dispatch => {
    api.postMessage().update(id,data)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: res.data.Data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}


export const Delete = (id, onSuccess) => dispatch => {
    api.postMessage().delete(id)
        .then(res =>{
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}


