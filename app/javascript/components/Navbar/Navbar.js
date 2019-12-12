import React, { Component } from 'react';
import { Link } from "@reach/router"
import "./Navbar.css"

class Navbar extends Component {
    
    handleLogoutClick(event) {
        event.preventDefault();
        this.props.user.logout();
    }

    render() { 

        const user = this.props.user;

        return ( 
            <div>
            <ul className="nav">
                <li><span>JuicyB</span></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user/:user_id">Profile</Link></li>

                { !user.isLoggedIn &&
                    <>
                        <li style={{float:'right'}}><Link to="/login">Login</Link></li>
                        <li style={{float:'right'}}><Link to="/sign-up">Sign Up</Link></li>
                    </>
                }
                

                { user.isLoggedIn && user.currentUser && 
                    <li style={{float:'right', marginRight: '5px'}}>
                        <span>
                            {user.currentUser.name}<br />
                            <a href="#" onClick={(e)=>this.handleLogoutClick(e)}>logout</a>
                        </span>
                    </li>
                }
            </ul>
        </div>);
    }
}
 
export default Navbar;