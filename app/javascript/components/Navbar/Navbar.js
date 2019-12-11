import React from 'react'
import {Link} from '@reach/router'

function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>{' | '}
            <Link to='/user/:user_id'>Profile</Link>{' | '}
            <Link to='/login'>Login</Link>{' | '}
            <Link to='/sign-up'>Sign Up</Link>
        </nav>
    )
}

export default Navbar
