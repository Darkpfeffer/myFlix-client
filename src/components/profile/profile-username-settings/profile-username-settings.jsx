//import
import { useState } from "react";

//import react bootstrap
import {Form, Button, FormGroup, Col, Row} from "react-bootstrap"

export const ProfileUsernameSettings = ({ storedUser, storedToken, onChanging }) => {
const [username, setUsername] = useState("");
const [controlUsername, setControlUsername] = useState("");
const [password, setPassword] = useState("");
const [controlPassword, setControlPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const myHeaders= {
            "Content-Type" : "application/JSON",
            Authorization: `Bearer ${storedToken}`
        }

        if (username === controlUsername && password === controlPassword) {
            var data= {
                Username: username,
                Password: password,
                Email: storedUser.Email,
                Birthday: storedUser.Birthday
            } 
        } else {
            alert ("New username and password is not the same at the two fields!");
            return;
        }
    
        fetch(`https://myflix-5sws.onrender.com/users/${storedUser.Username}`, { 
            method: "PUT",
            headers: new Headers (myHeaders),
                body: JSON.stringify(data)
                
        }).then((res) => (res.json())
        ).then((result) => {
            if (result.Username) {
                alert ("New username and password are successfully set!")
                localStorage.setItem("user", null)
                localStorage.setItem("token", null)
                onChanging (result.user, result.token)
            } 
        }).catch((err) => {
            if (!username && !password) {
                alert("Enter the new username and password in both fields")
            } else {
                alert("Something went wrong" + err)
            }
        })
   
    }
    return (
        <Form onSubmit={handleSubmit} className="mt-2">
            <Row className="mb-3">
                <FormGroup controlId="formNewUsername" as={Col} sm={{offset: 2}} md={{offset: 4}}>
                    <Form.Label>New username:</Form.Label>
                    <Form.Control
                        className="text-bg-dark"
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        minLength="5"
                        required
                        placeholder="Enter new username" 
                    />
                </FormGroup>
                <Col sm={{offset: 2}} md={{offset: 3}} className="desktop"></Col>
            </Row>
            <Row className="mb-3">
                <FormGroup controlId="formControlUsername" as={Col} sm={{offset: 2}} md={{offset: 4}}>
                    <Form.Label>Enter new username again:</Form.Label>
                    <Form.Control 
                        className="text-bg-dark"
                        type="text"
                        value={controlUsername}
                        onChange={(e) => setControlUsername(e.target.value)}
                        placeholder="Enter new username again"
                    />
                </FormGroup>
                <Col sm={{offset: 1}} md={{offset: 3}} className="desktop desktop-long"></Col>
            </Row>
            <Row className="mb-3">
                <FormGroup controlId="formNewPassword2" as={Col} sm={{offset: 2}} md={{offset: 4}}>
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
                <Col sm={{offset: 2}} md={{offset: 3}} className="desktop"></Col>
            </Row>
            <Row className="mb-3">
                <FormGroup controlId="formControlPassword2" as={Col} sm={{offset: 2}} md={{offset: 4}}>
                    <Form.Label>Enter new password again:</Form.Label>
                    <Form.Control 
                        className="text-bg-dark"
                        type="password"
                        value={controlPassword}
                        onChange={(e) => setControlPassword(e.target.value)}
                        placeholder="Enter new password again"
                    />
                </FormGroup>
                <Col sm={{offset: 1}} md={{offset: 3}} className="desktop desktop-long"></Col>
            </Row>
            <Row className="mb-3">
                <Col sm={{offset: 2}} md={{offset: 4}} >
                    <Button variant="primary" type="submit">Submit</Button>
                </Col>
            </Row>
        </Form>
    )
}