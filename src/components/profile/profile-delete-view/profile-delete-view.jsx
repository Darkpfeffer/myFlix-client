//import
import { useState } from "react";

//import react-bootstrap
import {Form, Button, FormGroup} from "react-bootstrap";

export const ProfileDeleteView = ({storedUser, storedToken, onDelete}) => {
    const [controlUsername, setControlUsername] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault()
        if (controlUsername === storedUser.Username) {
            fetch(`https://myflix-5sws.onrender.com/users/${storedUser._id}`, {
                headers: { Authorization: `Bearer ${storedToken}` },
                method: "DELETE"
            }).then((result) => {
                alert (`Account is successfully deleted`)
                localStorage.setItem("user", null)
                localStorage.setItem("token", null)
                onDelete(result.user, result.token)

            }).catch((err) => {
                alert("Something went wrong" + err)
            })
        } else {
            alert("Wrong username added")
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup controlId="fromControlDelete">
                <Form.Label>Enter your username to delete account:</Form.Label>
                <Form.Control 
                    className="text-bg-dark"
                    type="text"
                    value={controlUsername}
                    onChange={(e) => setControlUsername(e.target.value)}
                    required
                    placeholder="Enter your username"
                />
            </FormGroup>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

