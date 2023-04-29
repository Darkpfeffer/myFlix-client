//import
import { useState } from "react";

//import react bootstrap
import {Form, Button, FormGroup, Row, Col} from "react-bootstrap"

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
        <Form onSubmit={handleSubmit} className="mt-2">
            <Row className="mb-3">
                <FormGroup controlId="formNewBirthday" as={Col} sm={{offset: 2}} md={{offset: 4}}>
                    <Form.Label>New birthday:</Form.Label>
                    <Form.Control
                        className="text-bg-dark"
                        type="date" 
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required 
                    />
                </FormGroup>
                <Col sm={{offset: 2}} md={{offset: 3}} className="desktop"></Col>
            </Row>
            <Row className="mb-3">
                <FormGroup controlId="formControlBirthday" as={Col} sm={{offset: 2}} md={{offset: 4}}>
                    <Form.Label>Enter new birthday again:</Form.Label>
                    <Form.Control 
                        className="text-bg-dark"
                        type="date"
                        value={controlBirthday}
                        onChange={(e) => setControlBirthday(e.target.value)}
                    />
                </FormGroup>
                <Col sm={{offset: 1}} md={{offset: 3}} className="desktop desktop-long"></Col>
            </Row>
            <Row className="mb-3">
                <FormGroup controlId="formNewPassword4" as={Col} sm={{offset: 2}} md={{offset: 4}}>
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
                <FormGroup controlId="formControlPassword4" as={Col} sm={{offset: 2}} md={{offset: 4}}>
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