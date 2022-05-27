import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";

const WelcomePage = props => {
    const loc = useLocation();
    const auth = useContext(AuthContext); 
    const style = {
        marginTop: "20%"
    }

    return (
        <Col>
            <Row className="vh-100">
                <Col style={style} className="text-center">
                {auth.user && loc.pathname !== '/'
                ?<>
                    <span className="lead">Welcome</span>
                    <h1 className="display-2"><em>{auth.user.firstName}</em></h1>
                </> 
                :<>
                    <span className="lead">Welcome to</span>
                    <h1 className="display-2">LifeHub</h1>
                </>
                }
                </Col>
            </Row>
        </Col>
    )
}

export default WelcomePage;