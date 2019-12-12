import React, { Component } from 'react';
import SignupForm from '../components/signupForm';
import { navigate } from '@reach/router';
import axios from 'axios';

class SignUp extends Component {
    handleSignup(data) {
        axios.post(`http://localhost:3000/api/users`, {
            user: {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            }
        }).then(response => {

            // TODO: use a toast service, or modal or something
            // better than an allert.
            alert('user successfully created, please login');

            // Navigate to the home page.
            navigate('/');

        });
    }

    handleCancelSignup() {
        // Navigate to the home page.
        navigate('/');
    }

    render() {
        return (<>
            <SignupForm
                onSignup={(data) => this.handleSignup(data)}
                onCancelClick={() => this.handleCancelSignup()}
            ></SignupForm>
        </>)
    }
}
 
export default SignUp;
