import React, { useContext } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import {
    Container,
    Nav,
    Navbar
} from 'react-bootstrap';
import AuthContext from "../Auth/AuthContext";
import Logout from "./Logout";
import { useLocation } from "react-router-dom";

const NavBar = props => {
    const loc = useLocation();
    const auth = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect bg="light" expand="md">
            <Container>
                <Navbar.Brand>LifeHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                            { loc.pathname !== '/'
                            ? <LinkContainer className='nav-link' to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            : <LinkContainer className='nav-link' to='/in'>
                                <Nav.Link>Dashboard</Nav.Link>
                            </LinkContainer>
                            }
                        <LinkContainer className='nav-link' to='/in/messenger'>
                            <Nav.Link>Messenger</Nav.Link>

                        </LinkContainer>
                    </Nav>
                    <Nav>
                        {
                            auth.authenticated ? 
                            <>
                                <Navbar.Text>
                                    <em>Signed in as:</em> <span className="text-black">{auth.user.firstName}</span>
                                </Navbar.Text>
                                
                                <Navbar.Text className="ms-2">
                                    |
                                </Navbar.Text>
                                <Logout classes="nav-link my-auto" />
                            </>
                            :  <>
                                    <LinkContainer className='nav-link' to='/login'>
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer className='nav-link' to='/register'>
                                        <Nav.Link>Register</Nav.Link>
                                    </LinkContainer> 
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;