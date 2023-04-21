import React from "react";
import { useState } from "react";

// import bootstrap components
import {Form, Button, Row, Col} from "react-bootstrap"

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
        <Form onSubmit={handleSubmit} className="mb-5" >
            <Row>
                <Col xs={{offset: 4}} className="fw-bold fs-5 align-self-center mb-2 mt-4">Login: </Col>
            </Row>
            <Row>
                <Form.Group as={Col} xs={{offset: 4}} controlId="formUsername">
                    <Form.Label>
                        Username:
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username"
                        />
                    </Form.Label>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} xs={{offset: 4}} controlId="formPassword">
                    <Form.Label>
                        Password:
                        <Form.Control 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </Form.Label>
                </Form.Group>
            </Row>
            <Row>
                <Col xs={{offset: 4}} className="mt-2">
                    <Button variant="primary" type="submit" className="align-self-center">Submit</Button>
                </Col>
            </Row>
        </Form>
    )
}