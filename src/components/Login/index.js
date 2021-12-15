import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

import "./Login.css";


function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, navigate] = useLocation();
    const { isLogged, login, isLoginLoading, hasLoginError } = useUser();


    useEffect(() => {
        if(isLogged) {
            navigate("/");
            onLogin && onLogin();
        }

    }, [isLogged, navigate, onLogin])


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
            {
                isLoginLoading
                    ? <strong>Checking credentials...</strong>
                    : <form onSubmit={handleSubmit} className="form">
                        <label htmlFor="username">Username
                            <input
                                value={username}
                                onChange={handleChangeUsername}
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                            />
                        </label>

                        <label htmlFor="password">Password
                            <input
                                value={password}
                                onChange={handleChangePassword}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                        </label>

                        <button className="btn">Login</button>
                    </form>
            }
            {
                hasLoginError && <strong>credentials are invalid</strong>
            }
        </>
    );
}


export default Login;