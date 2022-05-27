import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import AuthContext from "../Auth/AuthContext";

const WelcomePage = props => {
    const auth = useContext(AuthContext); 
    const {name} = props;
    const style = {
        marginTop: "20%"
    }

    return (
        <Col>
            <Row className="vh-100">
                <Col style={style} className="text-center">
                {name 
                ?<>
                    <span className="lead">Welcome</span>
                    <h1 className="display-2"><em>{name()}</em></h1>
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