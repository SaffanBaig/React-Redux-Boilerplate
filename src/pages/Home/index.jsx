import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login, getAllUsers } from '../../actions/users'


const Home = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.userReducer)
    const handleLogin = () => {
        dispatch(login({
            email: 'saffan@gmail.com',
            password: '123456'
        }))
    }
    const handleGetAllUsers = () => {
        dispatch(getAllUsers())
    }

    useEffect(() => {
      console.log("USER DATA", userData)
    }, [userData])
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleGetAllUsers}>Get Users</button>
        </div>
    )
}

export default Home