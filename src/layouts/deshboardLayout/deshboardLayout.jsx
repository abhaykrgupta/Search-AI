import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ChatList from '../../components/ChatList'
import './deshboardLayout.css'

const DeshboardLayout = () => {

    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in')
        }
    }, [isLoaded, userId, navigate])

    if (!isLoaded) return "Loading..."
    return (
        <div className='deshboardLayout'>
            <div className='menu'>
                <ChatList />
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}

export default DeshboardLayout
