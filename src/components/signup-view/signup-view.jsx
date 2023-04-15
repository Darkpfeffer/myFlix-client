import { useState} from "react";

export const SignupView= () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [email, setEmail]= useState("");
    const [birthday, setBirthday]= useState("");

    const handleSubmit= (event) => {
        event.preventDefault();

        const data={
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        }

        fetch("https://myflix-5sws.onrender.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.ok) {
                alert("Signup successful");
                window.location.reload();
            } else {
                alert("Signup failed");
            }
        }).catch((error) => {
            alert("Something went wrong" +error)
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    minLength="5"
                    required
                />
            </label><br/>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label><br/>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label><br/>
            <label>
                Birthday:
                <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            </label><br/>
            <button type="submit">Submit</button>
        </form>
    )
}