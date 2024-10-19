import React from 'react'
import './ChatList.css'
import { Link } from 'react-router-dom'

const ChatList = () => {
    return (
        <div className='chatList'>
            <span className='title'>DESHBOARD</span>
            <Link to='/deshboard'>Create a new chat</Link>
            <Link to='/'>Explore Search AI</Link>
            <Link to='/'>Get unlimited access to all features</Link>
            <hr />
            <span className='title'>RECENT CHAT</span>
            <div className='list'>
                <Link to='/'>My chat title</Link>
                <Link to='/'>My chat title</Link>
            </div>
            <hr />
            <div className='upgrade'>
                <img src='/logo.png' alt='' />
                <div className='text'>
                    <span>upgrade to Search AI</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList
