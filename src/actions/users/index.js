import { AUTH_ERROR, GET_ALL_USERS, USER_LOGIN } from "../types"
import userAPI from "./api"

export const login = (payload) => async dispatch => {
    try {
        const response = await userAPI.login(payload)
        console.log("RESPONSE", response)
        if (response) {
            dispatch({
                type: USER_LOGIN,
                payload: response.data
            })
        }
    } catch(err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
    
}

export const getAllUsers = () => async dispatch => {
    try {
        const response = await userAPI.getAllUsers()
        console.log("RESPONSE", response)
        if (response) {
            dispatch({
                type: GET_ALL_USERS,
                payload: response.data
            })
        }
    } catch(err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
    
}