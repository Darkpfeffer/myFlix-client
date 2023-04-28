//Import
import { Link } from "react-router-dom"

//Import React Bootstrap
import {Nav, Navbar} from "react-bootstrap";

export const NavigationBar = ({storedUser, onLoggedOut}) => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mx-0">
            <Navbar.Brand as={Link} to="/">MyFlix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {!storedUser && (
                        <>
                            <Nav.Link as={Link} to={`/`} className="navbar-link">
                            Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={`/login`}>Login</Nav.Link>
                            <Nav.Link as={Link} to={`/signup`}>Sign Up</Nav.Link>
                        </>
                    )}
                    {storedUser && (
                        <>
                            <Nav.Link as={Link} to={`/`} className="navbar-link">
                            Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={`/users`}>Profile</Nav.Link>
                            <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}