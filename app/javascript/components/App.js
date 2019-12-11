import React from 'react'
import {Router} from '@reach/router'
// Pages
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

// Components
import Navbar from './Navbar/Navbar'


const App = () => {

    
    return (
        <React.Fragment>
            <Navbar />
            

            <Router>
                <Home path='/'/>
                <Profile path='/user/:user_id'/>
                <Login path='/login'/>
                <SignUp path='/sign-up'/>
            </Router>
        </React.Fragment>
    )
}

export default App;