//import
import { useState } from "react";

//import react bootstrap
import {Form, Button, FormGroup, Row, Col} from "react-bootstrap"

export const ProfileEmailSettings = ({ user, token, onChanging }) => {
const [email, setEmail] = useState("");
const [controlEmail, setControlEmail] = useState("");
const [password, setPassword] = useState("");
const [controlPassword, setControlPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const myHeaders= {
            "Content-Type" : "application/JSON",
            Authorization: `Bearer ${token}`
        }

        if (email === controlEmail && password === controlPassword) {
            var data= {
                Username: user.Username,
                Password: password,
                Email: email,
                Birthday: user.Birthday
            } 
        } else {
            alert ("New email and password is not the same at the two fields!");
            return;
        }
    
        fetch(`https://myflix-5sws.onrender.com/users/${user.Username}`, { 
            method: "PUT",
            headers: new Headers (myHeaders),
                body: JSON.stringify(data)
                
        }).then((res) => (res.json())
        ).then((result) => {
            if (result.Username) {
                alert ("New email and password are successfully set!")
                localStorage.setItem("user", null)
                localStorage.setItem("token", null)
                onChanging (result.user, result.token)
            } 
        }).catch((err) => {
            if (!email && !password) {
                alert("Enter the new email and password in both fields")
            } else {
                alert("Something went wrong" + err)
            }
        })
   
    }
    return (
        <Form onSubmit={handleSubmit} className="mt-2">
            <Row className="mb-3">
                <FormGroup controlId="formNewEmail" as={Col} sm={{offset: 2}} md={{offset: 4}}>
                    <Form.Label>New email:</Form.Label>
                    <Form.Control
                        className="text-bg-dark"
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter new email" 
                    />
                </FormGroup>
                <Col sm={{offset: 2}} md={{offset: 3}} className="desktop"></Col>
            </Row>
            <Row className="mb-3"> 
                <FormGroup controlId="formControlEmail" as={Col} sm={{offset: 2}} md={{offset: 4}}>
                    <Form.Label>Enter new email again:</Form.Label>
                    <Form.Control 
                        className="text-bg-dark"
                        type="text"
                        value={controlEmail}
                        onChange={(e) => setControlEmail(e.target.value)}
                        placeholder="Enter new email again"
                    />
                </FormGroup>
                <Col sm={{offset: 1}} md={{offset: 3}} className="desktop desktop-long"></Col>
            </Row>
            <Row className="mb-3">
                <FormGroup controlId="formNewPassword3" as={Col} sm={{offset: 2}} md={{offset: 4}}>
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
                <FormGroup controlId="formControlPassword3" as={Col} sm={{offset: 2}} md={{offset: 4}}>
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