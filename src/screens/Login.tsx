import React from 'react';

type LoginProps = {
    loggedIn: boolean
}

const Login = (props: LoginProps) => {

    const attemptLogin = (event: React.FormEvent) => {
        console.log("attempting login: " + event);
    }

    return (
        <>
            {/* <input type="text" defaultValue="" id="username"></input>
            <input type="text" defaultValue="" id="password"></input>
            <button type="submit" value="login" onSubmit={(event) => attemptLogin.bind(this, event)}/> */}
        </>
    );
}   

export default Login;