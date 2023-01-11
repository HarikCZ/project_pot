import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from '../../firebase/clientApp';

const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

const SignInScreen = () => {
    return (
        <div style={{
            maxWidth: '320px',
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
        }}
        >
            <h1>pot login</h1>
            <p>please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default SignInScreen; 