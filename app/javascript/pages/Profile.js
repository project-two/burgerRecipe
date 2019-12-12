import React, { Component } from 'react';


class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <p>Hello {this.props.user.name} </p>
            </div>
         );
    }
}
 
export default Profile;
