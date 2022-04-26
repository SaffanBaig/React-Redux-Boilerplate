import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PrivateHome from '../pages/PrivateHome'
import PrivateRoute from './privateRoute'

const Router = () => {
    return (
        <Routes>
            <Route exact path='/home' element={
                <PrivateRoute>
                    <PrivateHome />
                </PrivateRoute>
            }/>
            
            <Route path='/' element={<Home />} exact />
        </Routes>
    )
}

export default Router;