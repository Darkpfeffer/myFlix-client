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

        fetch("https://myflix-5sws.onrender.com/login", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .then((data) => {
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else {
                alert("Login failed");
            }
        })
        .catch((error) => {
            alert("Something went wrong");
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