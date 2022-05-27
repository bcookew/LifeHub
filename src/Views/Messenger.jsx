import React, {useState, useEffect, useContext} from "react";
import io from 'socket.io-client';
import Chat from "../Components/Chat";
import { print } from '../Accessories/LogFormatting';
import Logout from "../Components/Logout";
import AuthContext from "../Auth/AuthContext";
import { Button, Col, Row } from "react-bootstrap";

const Messenger = props => {
    const [users, setUsers] = useState([]);
    const [socket] = useState(() => io(':8000'));
    const [msgs, setMsgs] = useState([]);
    const auth = useContext(AuthContext);
    useEffect( () => {
        socket.emit('User', {
            _id: auth.user._id,
            name: `${auth.user.firstName} ${auth.user.lastName}`
        });
        socket.on('welcome', data => {
            console.log(data.message);
            console.log(data.onlineUsers);
            setUsers(data.onlineUsers)
        });
        socket.on('newMsg', newMsg => setMsgs(m => {
            return [...m, newMsg];
        })
        );
        return () => socket.disconnect(true);
    }, [])
    
    const printState = () => {
        console.log(users);
        users.map((el, idx) => {
            console.log('Stuff');
            console.log(el);
        })
    }

    return (
        <>
            <Row className="justify-content-center">
                <Col>
                    <div className="display-6">List of users</div>
                    <ul className="list-unstyled">
                        {users.length > 0 ? users.map((el, idx) => <li key={idx}>{el.name}</li>)
                            : <h1>No Users Online</h1>
                        }
                    </ul>
                </Col>
            </Row>
            <Chat msgs={msgs} setMsgs={setMsgs} socket={socket} />
        </>
    )
}

export default Messenger;