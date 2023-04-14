import React from "react";
import { useState } from "react";

export const LoginView= () => {
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        const data= {
            Password: password,
            Username: username
            };

        fetch("http://127.0.0.1:8080/login", {
            method: "POST",
            body: JSON.stringify(data)
        }).then((response => response.json())).then(data => console.log(data));
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Password:
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}