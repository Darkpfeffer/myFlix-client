//import
import { useState } from "react";

//import react bootstrap
import {Form, Button, FormGroup} from "react-bootstrap"

export const ProfilePasswordSettings = ({ storedUser, storedToken, onChanging }) => {
const [password, setPassword] = useState("");
const [controlPassword, setControlPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const myHeaders= {
            "Content-Type" : "application/JSON",
            Authorization: `Bearer ${storedToken}`
        }

        if (password === controlPassword) {
            var data= {
                Username: storedUser.Username,
                Password: password,
                Email: storedUser.Email,
                Birthday: storedUser.Birthday
            } 
        } else {
            alert ("New password is not the same at the two fields!");
            return;
        }
    
        fetch(`https://myflix-5sws.onrender.com/users/${storedUser.Username}`, { 
            method: "PUT",
            headers: new Headers (myHeaders),
                body: JSON.stringify(data)
                
        }).then((res) => (res.json())
        ).then((result) => {
            if (result.Username) {
                alert ("New password is successfully set!")
                localStorage.setItem("user", null)
                localStorage.setItem("token", null)
                onChanging (result.user, result.token)
            } 
        }).catch((err) => {
            if (!password) {
                alert("Enter the new password in both fields")
            } else {
                alert("Something went wrong" + err)
            }
        })
   
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup controlId="formNewPassword">
                <Form.Label>New Password:</Form.Label>
                <Form.Control
                    className="text-bg-dark"
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter new password" 
                />
            </FormGroup>
            <FormGroup controlId="formControlPassword">
                <Form.Label>Enter new password again:</Form.Label>
                <Form.Control 
                    className="text-bg-dark"
                    type="password"
                    value={controlPassword}
                    onChange={(e) => setControlPassword(e.target.value)}
                    placeholder="Enter new password again"
                />
            </FormGroup>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}