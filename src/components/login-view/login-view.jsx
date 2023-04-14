import React from "react";
import { useState } from "react";

export const LoginView= ({ onLoggedIn }) => {
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        const data= {
            Username: username,
            Password: password
            };

        fetch("http://127.0.0.1:8080/login", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.ok) {
                onLoggedIn(username);
            } else {
                alert("Login failed");
            }
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label>
                Password:
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}