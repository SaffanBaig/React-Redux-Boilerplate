import { AUTH_ERROR, GET_ALL_USERS, USER_LOGIN } from "../actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

const userReducer = (state=initialState, action) => {
      switch(action.type){
        case USER_LOGIN:
            localStorage.setItem('token', action.payload.data.Token)
            return {...state, user: action.payload.data, isAuthenticated: true, loading: false}
        case AUTH_ERROR:
        case GET_ALL_USERS:
            return {...state, user: action.payload.data}
        default: {
            return state;
            }
    }
}

export default userReducer
