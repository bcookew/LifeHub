import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Home = props => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container>
                    <Row className="justify-content-center m-5">
                        <Outlet />
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Home;