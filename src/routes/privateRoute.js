import React from 'react'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router'

const PrivateRoute = ({children, ...rest}) => {
    return (
        typeof window !== undefined && localStorage.getItem('token') ? (
            children
        ) : (
            <Navigate to='/' />
        )

    )
}

export default PrivateRoute