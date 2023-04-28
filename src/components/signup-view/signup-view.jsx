import { useState} from "react";
import { Link} from "react-router-dom";

// import bootstrap components
import {Form, Button, Row, Col} from "react-bootstrap"

export const SignupView= () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [controlPassword, setControlPassword]= useState("")
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
                window.location.replace("/login");
            } else {
                alert("Signup failed");
            }
        }).catch((error) => {
            alert("Something went wrong" +error)
        });
    };

    return (
        <Form onSubmit={handleSubmit} className="">
            <Row>
                <Col className="mt-3"></Col>
            </Row>
            <Row className="mb-2 mt-5">
                <Col sm={{offset: 2}} md={{offset: 4}} className="fs-5 fw-bold">Register:</Col>
            </Row>
            <Row>
                <Form.Group as={Col} sm={{offset: 2}} md={{offset: 4}} controlId="formRegisterUsername">
                    <Form.Label>
                        Username:
                        <Form.Control
                            className="text-bg-dark"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            minLength="5"
                            required
                            placeholder="Enter your username"
                        />
                    </Form.Label>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} sm={{offset: 2}} md={{offset: 4}} controlId="formRegisterPassword">
                    <Form.Label>
                        Password:
                        <Form.Control
                            className="text-bg-dark"
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
                <Form.Group as={Col} sm={{offset: 2}} md={{offset: 4}} controlId="formRegisterControlPassword">
                    <Form.Label>
                        Enter password again:
                        <Form.Control
                            className="text-bg-dark"
                            type="password"
                            value={controlPassword}
                            onChange={(e) => setControlPassword(e.target.value)}
                            required
                            placeholder="Enter your password again"
                        />
                    </Form.Label>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} sm={{offset: 2}} md={{offset: 4}} controlId="formRegisterEmail">
                    <Form.Label>
                        Email:
                        <Form.Control
                            className="text-bg-dark"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email address"
                        />
                    </Form.Label>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} sm={{offset: 2}} md={{offset: 4}} controlId="formRegisterBirthday">
                    <Form.Label>
                        Birthday:
                        <Form.Control
                            className="text-bg-dark"
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
                        />
                    </Form.Label>
                </Form.Group>
            </Row>
            <Row>
                <Col sm={{offset: 2}} md={{offset: 4}} className="mt-2">
                    <Button variant="primary" type="submit">Submit</Button>
                </Col>
            </Row>
            <Row>    
                <Col sm={{offset: 2}} md={{offset: 4}} className="mt-4">
                    <Link to={`/login`}>
                        I already have an account.
                    </Link>
                </Col>
            </Row>
        </Form>
    )
}