import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, navigate] = useLocation();
    const { isLogged, login, isLoginLoading, hasLoginError } = useUser();


    useEffect(() => {
        if(isLogged) navigate("/");
    }, [isLogged, navigate])


    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };


    return (
        <>
            <h2>Login</h2>
            {
                isLoginLoading
                    ? <strong>Checking credentials...</strong>
                    : <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                            value={username}
                            onChange={handleChangeUsername}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={handleChangePassword}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />

                        <button>Login</button>
                    </form>
            }
            {
                hasLoginError && <strong>credentials are invalid</strong>
            }
        </>
    );
}


export default Login;