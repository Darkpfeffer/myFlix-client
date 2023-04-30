//import
import {Link} from "react-router-dom";

//import react bootstrap
import {Row, Col} from "react-bootstrap";

export const ProfileSettingsView = () => {
    return (
        <>
            <Row className="mt-2 mb-2">
                <Col sm={{offset: 2}} md={{offset: 4}}>
                    <Link to={`/users/settings/password`}>Change password</Link>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm={{offset: 2}} md={{offset: 4}}>
                    <Link to={`/users/settings/username`}>Change username</Link>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm={{offset: 2}} md={{offset: 4}}>
                    <Link to={`/users/settings/email`}>Change email address</Link>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm={{offset: 2}} md={{offset: 4}}>
                    <Link to={`/users/settings/birthday`}>Change your birthday</Link>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm={{offset: 2}} md={{offset: 4}}>
                    <Link to={`/users/settings/delete`}>Delete account</Link>
                </Col>
            </Row>
        </>
    )
}