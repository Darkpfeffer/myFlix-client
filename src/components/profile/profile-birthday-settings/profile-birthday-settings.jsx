//import
import { useState } from "react";

//import react bootstrap
import {Form, Button, FormGroup} from "react-bootstrap"

export const ProfileBirthdaySettings = ({ storedUser, storedToken, onChanging }) => {
const [birthday, setBirthday] = useState("");
const [controlBirthday, setControlBirthday] = useState("");
const [password, setPassword] = useState("");
const [controlPassword, setControlPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const myHeaders= {
            "Content-Type" : "application/JSON",
            Authorization: `Bearer ${storedToken}`
        }

        if (birthday === controlBirthday && password === controlPassword) {
            var data= {
                Username: storedUser.Username,
                Password: password,
                Email: storedUser.Email,
                Birthday: birthday
            } 
        } else {
            alert ("New birthday and password is not the same at the two fields!");
            return;
        }
    
        fetch(`https://myflix-5sws.onrender.com/users/${storedUser.Username}`, { 
            method: "PUT",
            headers: new Headers (myHeaders),
                body: JSON.stringify(data)
                
        }).then((res) => (res.json())
        ).then((result) => {
            if (result.Username) {
                alert ("New birthday and password are successfully set!")
                localStorage.setItem("user", null)
                localStorage.setItem("token", null)
                onChanging (result.user, result.token)
            } 
        }).catch((err) => {
            if (!birthday && !password) {
                alert("Enter the new email and password in both fields")
            } else {
                alert("Something went wrong" + err)
            }
        })
   
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup controlId="formNewBirthday">
                <Form.Label>New birthday:</Form.Label>
                <Form.Control
                    className="text-bg-dark"
                    type="date" 
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required 
                />
            </FormGroup>
            <FormGroup controlId="formControlBirthday">
                <Form.Label>Enter new birthday again:</Form.Label>
                <Form.Control 
                    className="text-bg-dark"
                    type="date"
                    value={controlBirthday}
                    onChange={(e) => setControlBirthday(e.target.value)}
                />
            </FormGroup>

            <FormGroup controlId="formNewPassword4">
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
            <FormGroup controlId="formControlPassword4">
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